import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AtendimentosService } from './atendimentos.service';
import { AtendimentosController } from './atendimentos.controller';
import { Atendimento } from './atendimentos.entity';
import { Cidadao } from '../cidadaos/cidadaos.entity';
import { Profissional } from '../profissionais/profissionais.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Atendimento, Cidadao, Profissional])
  ],
  controllers: [AtendimentosController],
  providers: [AtendimentosService],
})
export class AtendimentosModule {}