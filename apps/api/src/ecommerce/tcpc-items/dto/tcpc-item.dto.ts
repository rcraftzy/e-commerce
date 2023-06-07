import {
  IsOptional,
  IsString,
  IsNumber,
  IsNotEmpty,
  IsDate,
} from 'class-validator';

export class TcpcItemDto {
  @IsOptional()
  @IsNumber()
  itemId: number;

  @IsOptional()
  @IsString()
  skuItem: string;

  @IsOptional()
  @IsString()
  itemName: string;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  @IsNumber()
  categoryId: number;

  @IsOptional()
  @IsNumber()
  brandId: number;

  @IsOptional()
  @IsNumber()
  tax: number;

  @IsOptional()
  @IsString()
  image: string;

  @IsOptional()
  @IsNumber()
  idTool: number;

  @IsOptional()
  @IsNumber()
  quantityUtensil: number;

  @IsOptional()
  @IsNumber()
  redemptionPoints: number;

  @IsOptional()
  @IsString()
  idHomologation: string;

  @IsOptional()
  @IsString()
  idFamily: string;

  @IsOptional()
  @IsDate()
  dateCreation: Date;

  @IsOptional()
  @IsNumber()
  asset: number;

  @IsOptional()
  @IsDate()
  dateInactive: Date;
}
