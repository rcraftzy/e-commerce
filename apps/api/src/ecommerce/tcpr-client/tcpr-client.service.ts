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

  async findOne(customerId: number) {
    try {
      const data = await this.repository.findOneBy({ customerId });
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

  async update(customerId: number, dto: TcprClientDto) {
    try {
      const data = await this.repository
        .createQueryBuilder()
        .update(TcprClient)
        .set({ ...dto })
        .where(`customerId = ${customerId}`)
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

  async remove(customerId: number) {
    try {
      const data = await this.repository.delete({ customerId });
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
