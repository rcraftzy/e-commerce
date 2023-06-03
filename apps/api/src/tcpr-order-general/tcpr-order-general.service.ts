import { Injectable } from '@nestjs/common';
import { CreateTcprOrderGeneralDto } from './dto/create-tcpr-order-general.dto';
import { UpdateTcprOrderGeneralDto } from './dto/update-tcpr-order-general.dto';

@Injectable()
export class TcprOrderGeneralService {
  create(createTcprOrderGeneralDto: CreateTcprOrderGeneralDto) {
    return 'This action adds a new tcprOrderGeneral';
  }

  findAll() {
    return `This action returns all tcprOrderGeneral`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tcprOrderGeneral`;
  }

  update(id: number, updateTcprOrderGeneralDto: UpdateTcprOrderGeneralDto) {
    return `This action updates a #${id} tcprOrderGeneral`;
  }

  remove(id: number) {
    return `This action removes a #${id} tcprOrderGeneral`;
  }
}
