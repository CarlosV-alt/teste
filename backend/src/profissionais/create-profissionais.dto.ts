import { IsString } from 'class-validator';

export class CreateProfissionalDto {
  @IsString()
  nome: string;

  @IsString()
  funcao: string;

  @IsString()
  setor: string;
}
