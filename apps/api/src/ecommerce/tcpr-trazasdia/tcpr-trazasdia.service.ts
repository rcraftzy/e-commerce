import { HttpStatus, Injectable } from '@nestjs/common';
import { TcprTrazasdiaDto } from './dto/tcpr-trazasdia.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TcprTrazasdia } from 'src/feature/tcpr-trazasdia.entity';
@Injectable()
export class TcprTrazasdiaService {
  constructor(
    @InjectRepository(TcprTrazasdia)
    private repository: Repository<TcprTrazasdia>,
  ) {}
  async create(dto: TcprTrazasdiaDto) {
    // try {
    //   const data = await this.repository.save({
    //     ...dto,
    //     customerId: { customerId: dto.customerId },
    //   });
    //   return {
    //     statusCode: HttpStatus.OK,
    //     message: 'Orden detalle creado con exito',
    //     data,
    //   };
    // } catch (error) {
    //   return {
    //     statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
    //     message: error?.message,
    //   };
    // }
  }

  async findAll() {
    try {
      const data = await this.repository.find();
      if (data.length != 0) {
        return {
          statusCode: HttpStatus.OK,
          message: 'Detalles de ordenes obtenido con exito',
          data,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Detalles de ordenes no existen',
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
      const data = await this.repository.find({ where: { id } });
      if (data.length !== 0) {
        return {
          statusCode: HttpStatus.OK,
          message: 'Detalle de orden obtenido con exito',
          data,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Detalle de orden no existe',
        };
      }
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message,
      };
    }
  }

  async update(id: number, dto: TcprTrazasdiaDto) {
    try {
      // const data = await this.repository
      //   .createQueryBuilder()
      //   .update(TcprOrderDetail)
      //   .set({ ...dto, customerId: { customerId: dto.customerId } })
      //   .where(`id = ${id}`)
      //   .execute();
      // if (data.affected !== 0) {
      //   return {
      //     statusCode: HttpStatus.OK,
      //     message: 'Detalle de orden actualizado con exito',
      //     affected: data.affected,
      //   };
      // } else {
      //   return {
      //     statusCode: HttpStatus.BAD_REQUEST,
      //     message: 'Detalle de orden no existe',
      //   };
      // }
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
          message: 'Detalle de orden eliminado con exito',
          affected: data.affected,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Detalle de orden no existe',
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
