import { Injectable } from '@nestjs/common';
import { TcprOrderTypePaymentDto } from './dto/tcpr-order-type-payment.dto';

@Injectable()
export class TcprOrderTypePaymentService {
  create(createTcprOrderTypePaymentDto: TcprOrderTypePaymentDto) {
    return 'This action adds a new tcprOrderTypePayment';
  }

  findAll() {
    return `This action returns all tcprOrderTypePayment`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tcprOrderTypePayment`;
  }

  update(id: number, updateTcprOrderTypePaymentDto: TcprOrderTypePaymentDto) {
    return `This action updates a #${id} tcprOrderTypePayment`;
  }

  remove(id: number) {
    return `This action removes a #${id} tcprOrderTypePayment`;
  }
}
