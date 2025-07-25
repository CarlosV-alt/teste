import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profissional } from './profissionais.entity';
import { CreateProfissionalDto } from './create-profissionais.dto';

@Injectable()
export class ProfissionaisService {
  constructor(
    @InjectRepository(Profissional)
    private profissionalRepository: Repository<Profissional>,
  ) {}

  create(dto: CreateProfissionalDto) {
    return this.profissionalRepository.save(dto);
  }

  findAll() {
    return this.profissionalRepository.find();
  }
}
