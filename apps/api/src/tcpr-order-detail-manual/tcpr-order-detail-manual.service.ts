import { Injectable } from '@nestjs/common';
import { CreateTcprOrderDetailManualDto } from './dto/create-tcpr-order-detail-manual.dto';
import { UpdateTcprOrderDetailManualDto } from './dto/update-tcpr-order-detail-manual.dto';

@Injectable()
export class TcprOrderDetailManualService {
  create(createTcprOrderDetailManualDto: CreateTcprOrderDetailManualDto) {
    return 'This action adds a new tcprOrderDetailManual';
  }

  findAll() {
    return `This action returns all tcprOrderDetailManual`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tcprOrderDetailManual`;
  }

  update(id: number, updateTcprOrderDetailManualDto: UpdateTcprOrderDetailManualDto) {
    return `This action updates a #${id} tcprOrderDetailManual`;
  }

  remove(id: number) {
    return `This action removes a #${id} tcprOrderDetailManual`;
  }
}
