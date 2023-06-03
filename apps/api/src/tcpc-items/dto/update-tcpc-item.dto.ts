import { PartialType } from '@nestjs/mapped-types';
import { CreateTcpcItemDto } from './create-tcpc-item.dto';

export class UpdateTcpcItemDto extends PartialType(CreateTcpcItemDto) {}
