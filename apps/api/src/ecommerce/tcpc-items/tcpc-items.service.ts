import { Injectable } from '@nestjs/common';
import { TcpcItemDto } from './dto/tcpc-item.dto';

@Injectable()
export class TcpcItemsService {
  create(dto: TcpcItemDto) {
    return 'This action adds a new tcpcItem';
  }

  findAll() {
    return `This action returns all tcpcItems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tcpcItem`;
  }

  update(id: number, updateTcpcItemDto: TcpcItemDto) {
    return `This action updates a #${id} tcpcItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} tcpcItem`;
  }
}
