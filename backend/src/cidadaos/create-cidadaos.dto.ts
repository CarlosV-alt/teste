import { IsString, IsDateString, Length, IsIn } from 'class-validator';

export class CreateCidadaoDto {
  @IsString()
  @Length(3, 100)
  nome: string;

  @IsString()
  @Length(11, 11)
  cpf: string;

  @IsDateString() // Garante que é uma data válida
  data_nascimento: string; // Recebe string no formato ISO

  @IsString()
  @IsIn(['M', 'F', 'O'])
  sexo: string;
}