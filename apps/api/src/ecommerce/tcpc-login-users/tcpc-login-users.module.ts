import { Module } from '@nestjs/common';
import { TcpcLoginUsersService } from './tcpc-login-users.service';
import { TcpcLoginUsersController } from './tcpc-login-users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TcpcLoginUsers } from 'src/feature/tcpc-login-users.entity';
import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRET } from 'src/common/constants';

@Module({
  imports: [
    TypeOrmModule.forFeature([TcpcLoginUsers]),
    JwtModule.register({
      global: true,
      secret: JWT_SECRET,
      signOptions: { expiresIn: '60m' },
    }),
  ],
  controllers: [TcpcLoginUsersController],
  providers: [TcpcLoginUsersService],
  exports: [TcpcLoginUsersService],
})
export class TcpcLoginUsersModule {}
