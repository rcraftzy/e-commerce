import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { TcpcLoginUsersService } from './tcpc-login-users.service';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('tcpc-login-users')
export class TcpcLoginUsersController {
  constructor(private readonly repository: TcpcLoginUsersService) {}

  @Post('login')
  async login(@Body() dto: LoginUserDto) {
    return await this.repository.login(dto);
  }

  @Get()
  async findAll() {
    return await this.repository.findAll();
  }
}
