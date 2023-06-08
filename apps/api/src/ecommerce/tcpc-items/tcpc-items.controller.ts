import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TcpcItemsService } from './tcpc-items.service';
import { TcpcItemDto } from './dto/tcpc-item.dto';

@Controller('tcpc-items')
export class TcpcItemsController {
  constructor(private readonly repository: TcpcItemsService) {}

  @Post()
  async create(@Body() dto: TcpcItemDto) {
    return await this.repository.create(dto);
  }

  @Get()
  async findAll() {
    return await this.repository.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.repository.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: TcpcItemDto) {
    return this.repository.update(+id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.repository.remove(+id);
  }
}
