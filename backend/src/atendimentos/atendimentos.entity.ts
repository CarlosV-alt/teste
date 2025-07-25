import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
  ManyToOne, 
  JoinColumn,
  CreateDateColumn
} from 'typeorm';
import { Cidadao } from '../cidadaos/cidadaos.entity';
import { Profissional } from '../profissionais/profissionais.entity';

export enum TipoAtendimento {
  VISITA_DOMICILIAR = 'VISITA_DOMICILIAR',
  CONSULTA = 'CONSULTA',
  ENCAMINHAMENTO = 'ENCAMINHAMENTO'
}

@Entity()
export class Atendimento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data: Date;

  @Column({
    type: 'enum',
    enum: TipoAtendimento,
    default: TipoAtendimento.VISITA_DOMICILIAR
  })
  tipo: TipoAtendimento;

  @Column('text')
  descricao: string;

  @ManyToOne(() => Cidadao, (cidadao) => cidadao.atendimentos, { eager: true })
  @JoinColumn({ name: 'cidadao_id' })
  cidadao: Cidadao;

  @ManyToOne(() => Profissional, (profissional) => profissional.atendimentos, { eager: true })
  @JoinColumn({ name: 'profissional_id' })
  profissional: Profissional;
}