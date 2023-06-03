import { Module } from '@nestjs/common';
import { TcprTrazasService } from './tcpr-trazas.service';
import { TcprTrazasController } from './tcpr-trazas.controller';

@Module({
  controllers: [TcprTrazasController],
  providers: [TcprTrazasService]
})
export class TcprTrazasModule {}
