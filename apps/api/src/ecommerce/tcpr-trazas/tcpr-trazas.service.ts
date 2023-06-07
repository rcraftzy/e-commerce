import { Injectable } from '@nestjs/common';
import { TcprTrazaDto } from './dto/tcpr-traza.dto';

@Injectable()
export class TcprTrazasService {
  create(createTcprTrazaDto: TcprTrazaDto) {
    return 'This action adds a new tcprTraza';
  }

  findAll() {
    return `This action returns all tcprTrazas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tcprTraza`;
  }

  update(id: number, updateTcprTrazaDto: TcprTrazaDto) {
    return `This action updates a #${id} tcprTraza`;
  }

  remove(id: number) {
    return `This action removes a #${id} tcprTraza`;
  }
}
