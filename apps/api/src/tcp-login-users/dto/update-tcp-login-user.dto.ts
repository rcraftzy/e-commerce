import { PartialType } from '@nestjs/mapped-types';
import { CreateTcpLoginUserDto } from './create-tcp-login-user.dto';

export class UpdateTcpLoginUserDto extends PartialType(CreateTcpLoginUserDto) {}
