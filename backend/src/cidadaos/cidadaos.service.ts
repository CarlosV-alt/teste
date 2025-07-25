import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cidadao } from './cidadaos.entity';
import { CreateCidadaoDto } from './create-cidadaos.dto';

@Injectable()
export class CidadaosService {
  constructor(
    @InjectRepository(Cidadao)
    private cidadaoRepository: Repository<Cidadao>,
  ) {}

  create(dto: CreateCidadaoDto) {
    return this.cidadaoRepository.save(dto);
  }

  findAll() {
    return this.cidadaoRepository.find();
  }
}
