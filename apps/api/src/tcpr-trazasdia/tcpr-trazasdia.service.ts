import { Injectable } from '@nestjs/common';
import { CreateTcprTrazasdiaDto } from './dto/create-tcpr-trazasdia.dto';
import { UpdateTcprTrazasdiaDto } from './dto/update-tcpr-trazasdia.dto';

@Injectable()
export class TcprTrazasdiaService {
  create(createTcprTrazasdiaDto: CreateTcprTrazasdiaDto) {
    return 'This action adds a new tcprTrazasdia';
  }

  findAll() {
    return `This action returns all tcprTrazasdia`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tcprTrazasdia`;
  }

  update(id: number, updateTcprTrazasdiaDto: UpdateTcprTrazasdiaDto) {
    return `This action updates a #${id} tcprTrazasdia`;
  }

  remove(id: number) {
    return `This action removes a #${id} tcprTrazasdia`;
  }
}
