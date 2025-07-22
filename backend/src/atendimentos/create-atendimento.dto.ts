import { IsInt, IsEnum, IsString, IsNotEmpty } from 'class-validator';
import { TipoAtendimento } from './atendimentos.entity';

export class CreateAtendimentoDto {
  @IsInt()
  cidadao_id: number;

  @IsInt()
  profissional_id: number;

  @IsEnum(TipoAtendimento)
  tipo: TipoAtendimento;

  @IsString()
  @IsNotEmpty()
  descricao: string;
}