import { HttpStatus, Injectable } from '@nestjs/common';
import { TcpcItemDto } from './dto/tcpc-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TcpcItems } from 'src/feature/tcpc-items.entity';
@Injectable()
export class TcpcItemsService {
  constructor(
    @InjectRepository(TcpcItems)
    private repository: Repository<TcpcItems>,
  ) {}
  async create(dto: TcpcItemDto) {
    try {
      const data = await this.repository.save({
        ...dto,
        dateCreation: new Date(),
      });
      return {
        statusCode: HttpStatus.OK,
        message: 'Items creado con exito',
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
          message: 'Items  obtenido con exito',
          data,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Items  no existen',
        };
      }
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message,
      };
    }
  }

  async findOne(itemId: number) {
    try {
      const data = await this.repository.findOneBy({ itemId });
      if (data) {
        return {
          statusCode: HttpStatus.OK,
          message: 'Item obtenido con exito',
          data,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Item no existe',
        };
      }
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message,
      };
    }
  }

  async update(itemId: number, dto: TcpcItemDto) {
    try {
      const data = await this.repository
        .createQueryBuilder()
        .update(TcpcItems)
        .set({ ...dto })
        .where(`itemId = ${itemId}`)
        .execute();
      if (data.affected !== 0) {
        return {
          statusCode: HttpStatus.OK,
          message: 'Item actualizado con exito',
          affected: data.affected,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Item no existe',
        };
      }
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message,
      };
    }
  }

  async remove(itemId: number) {
    try {
      const data = await this.repository.delete({ itemId });
      if (data.affected !== 0) {
        return {
          statusCode: HttpStatus.OK,
          message: 'Item eliminado con exito',
          affected: data.affected,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Item no existe',
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
