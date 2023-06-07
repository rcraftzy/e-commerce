import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TcprOrderGeneralManualService } from './tcpr-order-general-manual.service';
import { TcprOrderGeneralManualDto } from './dto/tcpr-order-general-manual.dto';

@Controller('tcpr-order-general-manual')
export class TcprOrderGeneralManualController {
  constructor(private readonly service: TcprOrderGeneralManualService) {}

  @Post()
  create(@Body() createTcprOrderGeneralManualDto: TcprOrderGeneralManualDto) {
    return this.service.create(createTcprOrderGeneralManualDto);
  }

  @Get()
  async findAll() {
    return await this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTcprOrderGeneralManualDto: TcprOrderGeneralManualDto,
  ) {
    return this.service.update(+id, updateTcprOrderGeneralManualDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
