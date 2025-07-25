import { Controller, Get, Post, Body } from '@nestjs/common';
import { CidadaosService } from './cidadaos.service';
import { CreateCidadaoDto } from './create-cidadaos.dto';

@Controller('cidadaos')
export class CidadaosController {
  constructor(private readonly cidadaosService: CidadaosService) {}

  @Post()
  create(@Body() dto: CreateCidadaoDto) {
    return this.cidadaosService.create(dto);
  }

  @Get()
  findAll() {
    return this.cidadaosService.findAll();
  }
}
