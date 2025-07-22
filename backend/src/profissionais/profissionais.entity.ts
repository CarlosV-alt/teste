import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Atendimento } from '../atendimentos/atendimentos.entity';

@Entity()
export class Profissional {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 50 })
  funcao: string;

  @Column({ length: 50 })
  setor: string;

  @OneToMany(() => Atendimento, (atendimento) => atendimento.profissional)
  atendimentos: Atendimento[];
}