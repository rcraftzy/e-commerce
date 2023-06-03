import { Module } from '@nestjs/common';
import { TcpLoginUsersService } from './tcp-login-users.service';
import { TcpLoginUsersController } from './tcp-login-users.controller';

@Module({
  controllers: [TcpLoginUsersController],
  providers: [TcpLoginUsersService]
})
export class TcpLoginUsersModule {}
