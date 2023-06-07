import { HttpStatus, Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TcprOrderDetailManualDto } from './dto/tcpr-order-detail-manual.dto';
import { TcprOrderDetailManual } from 'src/feature/tcpr-order-detail-manual.entity';
@Injectable()
export class TcprOrderDetailManualService {
  constructor(
    @InjectRepository(TcprOrderDetailManual)
    private repository: Repository<TcprOrderDetailManual>,
  ) {}
  async create(dto: TcprOrderDetailManualDto) {
    try {
      // dto.dateCreation = new Date();
      // const data = await this.repository.save({
      //   ...dto,
      //   orderGeneralManual: { id: dto.orderGeneralManualId },
      // });
      // return {
      //   statusCode: HttpStatus.OK,
      //   message: 'Cliente creado con exito',
      //   data,
      // };
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
          message: 'Clientes obtenidos con exito',
          data: data,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Clientes no existen ',
        };
      }
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.response?.message,
      };
    }
  }

  async findOne(id: number) {
    try {
      const data = await this.repository.findOneBy({ id });
      if (data) {
        return {
          statusCode: HttpStatus.OK,
          message: 'Cliente obtenido con exito',
          data,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Cliente no existe',
        };
      }
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message,
      };
    }
  }

  async update(id: number, dto: TcprOrderDetailManualDto) {
    try {
      const data = await this.repository
        .createQueryBuilder()
        .update(TcprOrderDetailManual)
        .set({
          ...dto,
          orderGeneralManual: dto.orderGeneralManualId,
        })
        .where('id = :id', { id })
        .execute();

      if (data.affected !== 0) {
        return {
          statusCode: HttpStatus.OK,
          message: 'Cliente actualizado con exito',
          affected: data.affected,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Cliente no existe',
        };
      }
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message,
      };
    }
  }

  async remove(id: number) {
    try {
      const data = await this.repository.delete({ id });
      if (data.affected !== 0) {
        return {
          statusCode: HttpStatus.OK,
          message: 'Cliente eliminado con exito',
          affected: data.affected,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Cliente no existe',
          affected: data.affected,
        };
      }
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message,
      };
    }
  }
}
