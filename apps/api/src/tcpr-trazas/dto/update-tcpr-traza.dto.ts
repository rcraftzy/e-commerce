import { PartialType } from '@nestjs/mapped-types';
import { CreateTcprTrazaDto } from './create-tcpr-traza.dto';

export class UpdateTcprTrazaDto extends PartialType(CreateTcprTrazaDto) {}
