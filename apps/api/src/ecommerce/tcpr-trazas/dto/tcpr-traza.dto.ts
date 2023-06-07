import { IsNumber, IsOptional, IsString } from 'class-validator';

export class TcprTrazaDto {
  @IsOptional()
  @IsNumber()
  id: number;

  @IsOptional()
  @IsNumber()
  customerId: number;

  @IsOptional()
  @IsNumber()
  pointId: number;

  @IsOptional()
  @IsNumber()
  pointOriginId: number;

  @IsOptional()
  @IsNumber()
  orderGeneralId: number;

  @IsOptional()
  @IsNumber()
  trazaId: number;

  @IsOptional()
  @IsNumber()
  incidentId: number;

  @IsOptional()
  @IsString()
  observations: string;

  @IsOptional()
  @IsNumber()
  domiciliaryId: number;

  @IsOptional()
  @IsNumber()
  userId: number;

  @IsOptional()
  @IsNumber()
  userTransferId: number;

  @IsOptional()
  @IsNumber()
  userCancelId: number;

  @IsOptional()
  dateStart: Date;

  @IsOptional()
  dateFin: Date;

  @IsOptional()
  closeTransfer: Date;

  @IsOptional()
  closeCancel: Date;
}
