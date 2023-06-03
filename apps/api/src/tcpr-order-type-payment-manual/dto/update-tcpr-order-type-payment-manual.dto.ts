import { PartialType } from '@nestjs/mapped-types';
import { CreateTcprOrderTypePaymentManualDto } from './create-tcpr-order-type-payment-manual.dto';

export class UpdateTcprOrderTypePaymentManualDto extends PartialType(CreateTcprOrderTypePaymentManualDto) {}
