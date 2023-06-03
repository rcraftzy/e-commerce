import { Injectable } from '@nestjs/common';
import { CreateTcprTrazaDto } from './dto/create-tcpr-traza.dto';
import { UpdateTcprTrazaDto } from './dto/update-tcpr-traza.dto';

@Injectable()
export class TcprTrazasService {
  create(createTcprTrazaDto: CreateTcprTrazaDto) {
    return 'This action adds a new tcprTraza';
  }

  findAll() {
    return `This action returns all tcprTrazas`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tcprTraza`;
  }

  update(id: number, updateTcprTrazaDto: UpdateTcprTrazaDto) {
    return `This action updates a #${id} tcprTraza`;
  }

  remove(id: number) {
    return `This action removes a #${id} tcprTraza`;
  }
}
