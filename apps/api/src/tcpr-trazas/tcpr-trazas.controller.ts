import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TcprTrazasService } from './tcpr-trazas.service';
import { CreateTcprTrazaDto } from './dto/create-tcpr-traza.dto';
import { UpdateTcprTrazaDto } from './dto/update-tcpr-traza.dto';

@Controller('tcpr-trazas')
export class TcprTrazasController {
  constructor(private readonly tcprTrazasService: TcprTrazasService) {}

  @Post()
  create(@Body() createTcprTrazaDto: CreateTcprTrazaDto) {
    return this.tcprTrazasService.create(createTcprTrazaDto);
  }

  @Get()
  findAll() {
    return this.tcprTrazasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tcprTrazasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTcprTrazaDto: UpdateTcprTrazaDto) {
    return this.tcprTrazasService.update(+id, updateTcprTrazaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tcprTrazasService.remove(+id);
  }
}
