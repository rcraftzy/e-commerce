import { Injectable } from '@nestjs/common';
import { CreateTcpcItemDto } from './dto/create-tcpc-item.dto';
import { UpdateTcpcItemDto } from './dto/update-tcpc-item.dto';

@Injectable()
export class TcpcItemsService {
  create(createTcpcItemDto: CreateTcpcItemDto) {
    return 'This action adds a new tcpcItem';
  }

  findAll() {
    return `This action returns all tcpcItems`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tcpcItem`;
  }

  update(id: number, updateTcpcItemDto: UpdateTcpcItemDto) {
    return `This action updates a #${id} tcpcItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} tcpcItem`;
  }
}
