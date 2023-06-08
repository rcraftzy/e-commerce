import { Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TcpcLoginUsers } from 'src/feature/tcpc-login-users.entity';
import * as crypto from 'crypto';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class TcpcLoginUsersService {
  constructor(
    @InjectRepository(TcpcLoginUsers)
    private usersRepository: Repository<TcpcLoginUsers>,
  ) {}

  findAll() {
    try {
      return this.usersRepository.find();
    } catch (error) {
      console.log(error);
    }
  }

  async login({ email, password }: LoginUserDto) {
    try {
      const hashedPassword = crypto
        .createHash('sha1')
        .update(password)
        .digest('hex');

      const exitUser = await this.usersRepository.findOne({
        where: {
          clue: hashedPassword,
          user: email,
        },
      });

      if (exitUser) {
        exitUser.clue = '';
        return {
          statusCode: HttpStatus.OK,
          message: 'Logeado con exito',
          data: exitUser,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'email o contraseña es incorrecto',
        };
      }
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.response?.message,
      };
    }
  }
}
