import { Module } from '@nestjs/common';
import { TcprOrderGeneralService } from './tcpr-order-general.service';
import { TcprOrderGeneralController } from './tcpr-order-general.controller';

@Module({
  controllers: [TcprOrderGeneralController],
  providers: [TcprOrderGeneralService]
})
export class TcprOrderGeneralModule {}
