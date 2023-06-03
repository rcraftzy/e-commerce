import { PartialType } from '@nestjs/mapped-types';
import { CreateTcprOrderTypePaymentDto } from './create-tcpr-order-type-payment.dto';

export class UpdateTcprOrderTypePaymentDto extends PartialType(CreateTcprOrderTypePaymentDto) {}
