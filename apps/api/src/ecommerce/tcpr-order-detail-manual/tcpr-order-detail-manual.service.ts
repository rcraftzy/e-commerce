import { HttpStatus, Injectable } from '@nestjs/common';
import { TcprOrderDetailManualDto } from './dto/tcpr-order-detail-manual.dto';
import { TcprOrderDetailManual } from 'src/feature/tcpr-order-detail-manual.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class TcprOrderDetailManualService {
  constructor(
    @InjectRepository(TcprOrderDetailManual)
    private repository: Repository<TcprOrderDetailManual>,
  ) {}
  async create(dto: TcprOrderDetailManualDto) {
    try {
      const data = await this.repository.save({
        ...dto,
        orderGeneralManualId: { id: dto.orderGeneralManualId },
      });
      return {
        statusCode: HttpStatus.OK,
        message: 'Orden detalle manual creado con exito',
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
      if (data.length != 0) {
        return {
          statusCode: HttpStatus.OK,
          message: 'Detalles de ordenes manuales obtenido con exito',
          data,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Detalles de ordenes manuales no existen',
        };
      }
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message,
      };
    }
  }

  async findOne(id: number) {
    try {
      const data = await this.repository.findOneBy({ id });
      if (data) {
        return {
          statusCode: HttpStatus.OK,
          message: 'Detalle de orden manual obtenido con exito',
          data,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Detalle de orden manual no existe',
        };
      }
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message,
      };
    }
  }

  update(id: number, updateTcprOrderdetalleDto: TcprOrderDetailManualDto) {
    return `This action updates a #${id} tcprOrderdetalle`;
  }

  remove(id: number) {
    return `This action removes a #${id} tcprOrderdetalle`;
  }
}
