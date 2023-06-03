import { Injectable } from '@nestjs/common';
import { CreateTcpLoginUserDto } from './dto/create-tcp-login-user.dto';
import { UpdateTcpLoginUserDto } from './dto/update-tcp-login-user.dto';

@Injectable()
export class TcpLoginUsersService {
  create(createTcpLoginUserDto: CreateTcpLoginUserDto) {
    return 'This action adds a new tcpLoginUser';
  }

  findAll() {
    return `This action returns all tcpLoginUsers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tcpLoginUser`;
  }

  update(id: number, updateTcpLoginUserDto: UpdateTcpLoginUserDto) {
    return `This action updates a #${id} tcpLoginUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} tcpLoginUser`;
  }
}
