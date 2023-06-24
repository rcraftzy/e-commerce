import { TcpcItemsCategories } from 'src/feature/tcpc-items-categories';
import { TcpcItemsCategoryDto } from './dto/tcpc-items-category.dto';
import { HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TcpcItemsCategoriesService {
  constructor(
    @InjectRepository(TcpcItemsCategories)
    private repository: Repository<TcpcItemsCategories>,
  ) {}
  // async create(dto: TcpcItemsCategoryDto) {
  //   try {
  //     const { brandId, ...information } = dto;
  //     const data = await this.repository.save({
  //       ...information,
  //       brand: { brandId },
  //     });
  //     return {
  //       statusCode: HttpStatus.OK,
  //       message: 'Categoria creado con exito',
  //       data,
  //     };
  //   } catch (error) {
  //     return {
  //       statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
  //       message: error?.message,
  //     };
  //   }
  // }

  async findAll() {
    try {
      const data = await this.repository.find();
      if (data.length != 0) {
        return {
          statusCode: HttpStatus.OK,
          message: 'Categorias obtenido con exito',
          data,
        };
      } else {
        return {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Categorias no existen',
        };
      }
    } catch (error) {
      return {
        statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
        message: error?.message,
      };
    }
  }

  // async findOne(categoryId: number) {
  //   try {
  //     const data = await this.repository.findOneBy({ categoryId });
  //     if (data) {
  //       return {
  //         statusCode: HttpStatus.OK,
  //         message: 'Categoria obtenido con exito',
  //         data,
  //       };
  //     } else {
  //       return {
  //         statusCode: HttpStatus.BAD_REQUEST,
  //         message: 'Categoria no existe',
  //       };
  //     }
  //   } catch (error) {
  //     return {
  //       statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
  //       message: error?.message,
  //     };
  //   }
  // }

  // async update(id: number, dto: TcpcItemsCategoryDto) {
  //   try {
  //     const { brandId, ...information } = dto;

  //     const data = await this.repository
  //       .createQueryBuilder()
  //       .update(TcprPointSale)
  //       .set({ ...information, brand: { brandId } })
  //       .where(`id = ${id}`)
  //       .execute();
  //     if (data.affected !== 0) {
  //       return {
  //         statusCode: HttpStatus.OK,
  //         message: 'Categoria actualizado con exito',
  //         affected: data.affected,
  //       };
  //     } else {
  //       return {
  //         statusCode: HttpStatus.BAD_REQUEST,
  //         message: 'Categoria no existe',
  //       };
  //     }
  //   } catch (error) {
  //     return {
  //       statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
  //       message: error?.message,
  //     };
  //   }
  // }

  // async remove(categoryId: number) {
  //   try {
  //     const data = await this.repository.delete({ categoryId });
  //     if (data.affected !== 0) {
  //       return {
  //         statusCode: HttpStatus.OK,
  //         message: 'Categoria eliminado con exito',
  //         affected: data.affected,
  //       };
  //     } else {
  //       return {
  //         statusCode: HttpStatus.BAD_REQUEST,
  //         message: 'Categoria no existe',
  //         affected: data.affected,
  //       };
  //     }
  //   } catch (error) {
  //     return {
  //       statusCode: HttpStatus.INTERNAL_SERVER_ERROR,
  //       message: error?.message,
  //     };
  //   }
  // }
}
