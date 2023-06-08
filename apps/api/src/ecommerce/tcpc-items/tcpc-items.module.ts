import { Module } from '@nestjs/common';
import { TcpcItemsService } from './tcpc-items.service';
import { TcpcItemsController } from './tcpc-items.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TcpcItems } from 'src/feature/tcpc-items.entity';
@Module({
  imports: [TypeOrmModule.forFeature([TcpcItems])],
  controllers: [TcpcItemsController],
  providers: [TcpcItemsService],
})
export class TcpcItemsModule {}
