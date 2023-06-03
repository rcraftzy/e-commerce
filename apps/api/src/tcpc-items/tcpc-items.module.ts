import { Module } from '@nestjs/common';
import { TcpcItemsService } from './tcpc-items.service';
import { TcpcItemsController } from './tcpc-items.controller';

@Module({
  controllers: [TcpcItemsController],
  providers: [TcpcItemsService]
})
export class TcpcItemsModule {}
