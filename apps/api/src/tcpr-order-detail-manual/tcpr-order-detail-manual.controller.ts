import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TcprOrderDetailManualService } from './tcpr-order-detail-manual.service';
import { CreateTcprOrderDetailManualDto } from './dto/create-tcpr-order-detail-manual.dto';
import { UpdateTcprOrderDetailManualDto } from './dto/update-tcpr-order-detail-manual.dto';

@Controller('tcpr-order-detail-manual')
export class TcprOrderDetailManualController {
  constructor(private readonly tcprOrderDetailManualService: TcprOrderDetailManualService) {}

  @Post()
  create(@Body() createTcprOrderDetailManualDto: CreateTcprOrderDetailManualDto) {
    return this.tcprOrderDetailManualService.create(createTcprOrderDetailManualDto);
  }

  @Get()
  findAll() {
    return this.tcprOrderDetailManualService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tcprOrderDetailManualService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTcprOrderDetailManualDto: UpdateTcprOrderDetailManualDto) {
    return this.tcprOrderDetailManualService.update(+id, updateTcprOrderDetailManualDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tcprOrderDetailManualService.remove(+id);
  }
}
