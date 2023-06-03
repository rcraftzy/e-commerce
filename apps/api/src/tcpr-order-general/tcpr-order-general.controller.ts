import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TcprOrderGeneralService } from './tcpr-order-general.service';
import { CreateTcprOrderGeneralDto } from './dto/create-tcpr-order-general.dto';
import { UpdateTcprOrderGeneralDto } from './dto/update-tcpr-order-general.dto';

@Controller('tcpr-order-general')
export class TcprOrderGeneralController {
  constructor(private readonly tcprOrderGeneralService: TcprOrderGeneralService) {}

  @Post()
  create(@Body() createTcprOrderGeneralDto: CreateTcprOrderGeneralDto) {
    return this.tcprOrderGeneralService.create(createTcprOrderGeneralDto);
  }

  @Get()
  findAll() {
    return this.tcprOrderGeneralService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tcprOrderGeneralService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTcprOrderGeneralDto: UpdateTcprOrderGeneralDto) {
    return this.tcprOrderGeneralService.update(+id, updateTcprOrderGeneralDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tcprOrderGeneralService.remove(+id);
  }
}
