import { PartialType } from '@nestjs/mapped-types';
import { CreateTcprOrderDetailManualDto } from './create-tcpr-order-detail-manual.dto';

export class UpdateTcprOrderDetailManualDto extends PartialType(CreateTcprOrderDetailManualDto) {}
