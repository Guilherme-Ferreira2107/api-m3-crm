import { IsNotEmpty, IsNumber, IsDateString } from 'class-validator';

export class ContratosDto {
  @IsNotEmpty()
  @IsNumber()
  clienteId: number;

  @IsNotEmpty()
  @IsDateString()
  dataInicio: Date;

  @IsNotEmpty()
  @IsDateString()
  dataFim: Date;

  @IsNotEmpty()
  @IsNumber()
  valor: number;
}
