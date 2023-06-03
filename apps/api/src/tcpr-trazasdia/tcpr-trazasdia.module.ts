import { Module } from '@nestjs/common';
import { TcprTrazasdiaService } from './tcpr-trazasdia.service';
import { TcprTrazasdiaController } from './tcpr-trazasdia.controller';

@Module({
  controllers: [TcprTrazasdiaController],
  providers: [TcprTrazasdiaService]
})
export class TcprTrazasdiaModule {}
