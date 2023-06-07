import { HttpStatus, Injectable } from '@nestjs/common';
import { TcprClientDto } from './dto/tcpr-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TcprClient } from 'src/feature/tcpr-client.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TcprClientService {
  constructor(
    @InjectRepository(TcprClient)
    private repository: Repository<TcprClient>,
  ) {}
  async create(dto: TcprClientDto) {
    try {
      dto.dateCreation = new Date();
      const data = await this.repository.save(dto);
      return {
        statusCode: HttpStatus.OK,
        message: 'Cliente creado con exito',
        data,
      };
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message,
      };
    }
  }

  async findAll() {
    try {
      const data = await this.repository.find();
      if (data) {
        return {
          statusCode: HttpStatus.OK,
          message: 'datos obtenidos con exito',
          data: data,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'No existen datos',
        };
      }
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.response?.message,
      };
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} tcprClient`;
  }

  update(id: number, dto: TcprClientDto) {
    return `This action updates a #${id} tcprClient`;
  }

  remove(id: number) {
    return `This action removes a #${id} tcprClient`;
  }
}
