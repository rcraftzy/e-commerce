import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TcprTrazasdiaService } from './tcpr-trazasdia.service';
import { CreateTcprTrazasdiaDto } from './dto/create-tcpr-trazasdia.dto';
import { UpdateTcprTrazasdiaDto } from './dto/update-tcpr-trazasdia.dto';

@Controller('tcpr-trazasdia')
export class TcprTrazasdiaController {
  constructor(private readonly tcprTrazasdiaService: TcprTrazasdiaService) {}

  @Post()
  create(@Body() createTcprTrazasdiaDto: CreateTcprTrazasdiaDto) {
    return this.tcprTrazasdiaService.create(createTcprTrazasdiaDto);
  }

  @Get()
  findAll() {
    return this.tcprTrazasdiaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tcprTrazasdiaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTcprTrazasdiaDto: UpdateTcprTrazasdiaDto) {
    return this.tcprTrazasdiaService.update(+id, updateTcprTrazasdiaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tcprTrazasdiaService.remove(+id);
  }
}
