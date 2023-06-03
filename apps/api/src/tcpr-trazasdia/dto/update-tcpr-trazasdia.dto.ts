import { PartialType } from '@nestjs/mapped-types';
import { CreateTcprTrazasdiaDto } from './create-tcpr-trazasdia.dto';

export class UpdateTcprTrazasdiaDto extends PartialType(CreateTcprTrazasdiaDto) {}
