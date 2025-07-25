import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Atendimento } from '../atendimentos/atendimentos.entity';
import { CreateAtendimentoDto } from './create-atendimentos.dto';
import { Cidadao } from '../cidadaos/cidadaos.entity';
import { Profissional } from '../profissionais/profissionais.entity';

@Injectable()
export class AtendimentosService {
  constructor(
    @InjectRepository(Atendimento)
    private atendimentosRepository: Repository<Atendimento>,
    @InjectRepository(Cidadao)
    private cidadaosRepository: Repository<Cidadao>,
    @InjectRepository(Profissional)
    private profissionaisRepository: Repository<Profissional>,
  ) {}

  async create(createAtendimentoDto: CreateAtendimentoDto): Promise<Atendimento> {
    const { cidadao_id, profissional_id, ...rest } = createAtendimentoDto;
    
    const cidadao = await this.cidadaosRepository.findOneBy({ id: cidadao_id });
    const profissional = await this.profissionaisRepository.findOneBy({ id: profissional_id });

    if (!cidadao || !profissional) {
      throw new Error('Cidadão ou Profissional não encontrado');
    }

    const atendimento = this.atendimentosRepository.create({
      ...rest,
      cidadao,
      profissional,
    });

    return this.atendimentosRepository.save(atendimento);
  }

  findAll(): Promise<Atendimento[]> {
    return this.atendimentosRepository.find({
      relations: ['cidadao', 'profissional'],
    });
  }
}