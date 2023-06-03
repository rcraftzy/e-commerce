import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TcpcItemsService } from './tcpc-items.service';
import { CreateTcpcItemDto } from './dto/create-tcpc-item.dto';
import { UpdateTcpcItemDto } from './dto/update-tcpc-item.dto';

@Controller('tcpc-items')
export class TcpcItemsController {
  constructor(private readonly tcpcItemsService: TcpcItemsService) {}

  @Post()
  create(@Body() createTcpcItemDto: CreateTcpcItemDto) {
    return this.tcpcItemsService.create(createTcpcItemDto);
  }

  @Get()
  findAll() {
    return this.tcpcItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tcpcItemsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTcpcItemDto: UpdateTcpcItemDto) {
    return this.tcpcItemsService.update(+id, updateTcpcItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tcpcItemsService.remove(+id);
  }
}
