import { Controller, Get, Post, Body } from '@nestjs/common';
import { AtendimentosService } from './atendimentos.service';
import { CreateAtendimentoDto } from './create-atendimentos.dto';

@Controller('atendimentos')
export class AtendimentosController {
  constructor(private readonly atendimentosService: AtendimentosService) {}

  @Post()
  create(@Body() dto: CreateAtendimentoDto) {
    return this.atendimentosService.create(dto);
  }

  @Get()
  findAll() {
    return this.atendimentosService.findAll();
  }
}
