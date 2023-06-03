import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TcpLoginUsersService } from './tcp-login-users.service';
import { CreateTcpLoginUserDto } from './dto/create-tcp-login-user.dto';
import { UpdateTcpLoginUserDto } from './dto/update-tcp-login-user.dto';

@Controller('tcp-login-users')
export class TcpLoginUsersController {
  constructor(private readonly tcpLoginUsersService: TcpLoginUsersService) {}

  @Post()
  create(@Body() createTcpLoginUserDto: CreateTcpLoginUserDto) {
    return this.tcpLoginUsersService.create(createTcpLoginUserDto);
  }

  @Get()
  findAll() {
    return this.tcpLoginUsersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tcpLoginUsersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTcpLoginUserDto: UpdateTcpLoginUserDto) {
    return this.tcpLoginUsersService.update(+id, updateTcpLoginUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tcpLoginUsersService.remove(+id);
  }
}
