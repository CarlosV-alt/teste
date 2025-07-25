import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProfissionaisService } from './profissionais.service';
import { CreateProfissionalDto } from './create-profissionais.dto';

@Controller('profissionais')
export class ProfissionaisController {
  constructor(private readonly profissionaisService: ProfissionaisService) {}

  @Post()
  create(@Body() dto: CreateProfissionalDto) {
    return this.profissionaisService.create(dto);
  }

  @Get()
  findAll() {
    return this.profissionaisService.findAll();
  }
}
