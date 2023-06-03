import { PartialType } from '@nestjs/mapped-types';
import { CreateTcprOrderGeneralDto } from './create-tcpr-order-general.dto';

export class UpdateTcprOrderGeneralDto extends PartialType(CreateTcprOrderGeneralDto) {}
