import { Module } from '@nestjs/common';
import { TcpcLoginUsersService } from './tcpc-login-users.service';
import { TcpcLoginUsersController } from './tcpc-login-users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TcpcLoginUsers } from 'src/feature/tcpc-login-users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TcpcLoginUsers])],
  controllers: [TcpcLoginUsersController],
  providers: [TcpcLoginUsersService],
})
export class TcpcLoginUsersModule {}
