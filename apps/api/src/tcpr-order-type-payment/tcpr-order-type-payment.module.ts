import { Module } from '@nestjs/common';
import { TcprOrderTypePaymentService } from './tcpr-order-type-payment.service';
import { TcprOrderTypePaymentController } from './tcpr-order-type-payment.controller';

@Module({
  controllers: [TcprOrderTypePaymentController],
  providers: [TcprOrderTypePaymentService]
})
export class TcprOrderTypePaymentModule {}
