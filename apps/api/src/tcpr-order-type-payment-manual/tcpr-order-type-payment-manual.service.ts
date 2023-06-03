import { Injectable } from '@nestjs/common';
import { CreateTcprOrderTypePaymentManualDto } from './dto/create-tcpr-order-type-payment-manual.dto';
import { UpdateTcprOrderTypePaymentManualDto } from './dto/update-tcpr-order-type-payment-manual.dto';

@Injectable()
export class TcprOrderTypePaymentManualService {
  create(createTcprOrderTypePaymentManualDto: CreateTcprOrderTypePaymentManualDto) {
    return 'This action adds a new tcprOrderTypePaymentManual';
  }

  findAll() {
    return `This action returns all tcprOrderTypePaymentManual`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tcprOrderTypePaymentManual`;
  }

  update(id: number, updateTcprOrderTypePaymentManualDto: UpdateTcprOrderTypePaymentManualDto) {
    return `This action updates a #${id} tcprOrderTypePaymentManual`;
  }

  remove(id: number) {
    return `This action removes a #${id} tcprOrderTypePaymentManual`;
  }
}
