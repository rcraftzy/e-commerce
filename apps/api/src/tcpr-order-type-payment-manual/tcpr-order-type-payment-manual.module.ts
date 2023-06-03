import { Module } from '@nestjs/common';
import { TcprOrderTypePaymentManualService } from './tcpr-order-type-payment-manual.service';
import { TcprOrderTypePaymentManualController } from './tcpr-order-type-payment-manual.controller';

@Module({
  controllers: [TcprOrderTypePaymentManualController],
  providers: [TcprOrderTypePaymentManualService]
})
export class TcprOrderTypePaymentManualModule {}
