import { Module } from '@nestjs/common';
import { TcprOrderDetailManualService } from './tcpr-order-detail-manual.service';
import { TcprOrderDetailManualController } from './tcpr-order-detail-manual.controller';

@Module({
  controllers: [TcprOrderDetailManualController],
  providers: [TcprOrderDetailManualService]
})
export class TcprOrderDetailManualModule {}
