import { Injectable } from '@nestjs/common';
import { CreateTcprOrderTypePaymentDto } from './dto/create-tcpr-order-type-payment.dto';
import { UpdateTcprOrderTypePaymentDto } from './dto/update-tcpr-order-type-payment.dto';

@Injectable()
export class TcprOrderTypePaymentService {
  create(createTcprOrderTypePaymentDto: CreateTcprOrderTypePaymentDto) {
    return 'This action adds a new tcprOrderTypePayment';
  }

  findAll() {
    return `This action returns all tcprOrderTypePayment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tcprOrderTypePayment`;
  }

  update(id: number, updateTcprOrderTypePaymentDto: UpdateTcprOrderTypePaymentDto) {
    return `This action updates a #${id} tcprOrderTypePayment`;
  }

  remove(id: number) {
    return `This action removes a #${id} tcprOrderTypePayment`;
  }
}
