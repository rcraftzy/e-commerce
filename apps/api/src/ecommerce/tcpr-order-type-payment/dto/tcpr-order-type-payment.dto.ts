import { IsNumber, IsOptional } from 'class-validator';

export class TcprOrderTypePaymentDto {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsOptional()
  @IsNumber()
  pointid: number;

  @IsOptional()
  @IsNumber()
  idOrderGeneral: number;

  @IsOptional()
  @IsNumber()
  orderNumberId: string;

  @IsOptional()
  @IsNumber()
  idTypePay: number;

  @IsOptional()
  nomTypePay: string;

  @IsOptional()
  @IsNumber()
  value: number;

  @IsOptional()
  dateCreation: Date;
}
