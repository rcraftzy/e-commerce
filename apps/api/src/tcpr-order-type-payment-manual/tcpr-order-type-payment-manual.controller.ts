import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TcprOrderTypePaymentManualService } from './tcpr-order-type-payment-manual.service';
import { CreateTcprOrderTypePaymentManualDto } from './dto/create-tcpr-order-type-payment-manual.dto';
import { UpdateTcprOrderTypePaymentManualDto } from './dto/update-tcpr-order-type-payment-manual.dto';

@Controller('tcpr-order-type-payment-manual')
export class TcprOrderTypePaymentManualController {
  constructor(private readonly tcprOrderTypePaymentManualService: TcprOrderTypePaymentManualService) {}

  @Post()
  create(@Body() createTcprOrderTypePaymentManualDto: CreateTcprOrderTypePaymentManualDto) {
    return this.tcprOrderTypePaymentManualService.create(createTcprOrderTypePaymentManualDto);
  }

  @Get()
  findAll() {
    return this.tcprOrderTypePaymentManualService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tcprOrderTypePaymentManualService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTcprOrderTypePaymentManualDto: UpdateTcprOrderTypePaymentManualDto) {
    return this.tcprOrderTypePaymentManualService.update(+id, updateTcprOrderTypePaymentManualDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tcprOrderTypePaymentManualService.remove(+id);
  }
}
