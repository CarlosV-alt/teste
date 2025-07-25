import { IsInt, IsDateString, IsEnum, IsString, IsNotEmpty } from 'class-validator';
import { TipoAtendimento } from './atendimentos.entity';

export class CreateAtendimentoDto {
  @IsInt()
  cidadao_id: number;

  @IsInt()
  profissional_id: number;

  @IsDateString()
  data: string;

  @IsEnum(TipoAtendimento)
  tipo: TipoAtendimento;

  @IsString()
  @IsNotEmpty()
  descricao: string;
}