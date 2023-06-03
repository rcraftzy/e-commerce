import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TcprOrderTypePaymentService } from './tcpr-order-type-payment.service';
import { CreateTcprOrderTypePaymentDto } from './dto/create-tcpr-order-type-payment.dto';
import { UpdateTcprOrderTypePaymentDto } from './dto/update-tcpr-order-type-payment.dto';

@Controller('tcpr-order-type-payment')
export class TcprOrderTypePaymentController {
  constructor(private readonly tcprOrderTypePaymentService: TcprOrderTypePaymentService) {}

  @Post()
  create(@Body() createTcprOrderTypePaymentDto: CreateTcprOrderTypePaymentDto) {
    return this.tcprOrderTypePaymentService.create(createTcprOrderTypePaymentDto);
  }

  @Get()
  findAll() {
    return this.tcprOrderTypePaymentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tcprOrderTypePaymentService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTcprOrderTypePaymentDto: UpdateTcprOrderTypePaymentDto) {
    return this.tcprOrderTypePaymentService.update(+id, updateTcprOrderTypePaymentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tcprOrderTypePaymentService.remove(+id);
  }
}
