import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Atendimento } from '../atendimentos/atendimentos.entity';

@Entity()
export class Cidadao {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  nome: string;

  @Column({ length: 11, unique: true })
  cpf: string;

  @Column('date')
  data_nascimento: Date;

  @Column({ type: 'char', length: 1 })
  sexo: string; // 'M', 'F' ou 'O'

  @OneToMany(() => Atendimento, (atendimento) => atendimento.cidadao)
  atendimentos: Atendimento[];
}