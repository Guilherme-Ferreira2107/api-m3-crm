import { IsNotEmpty, IsNumber, IsDateString } from 'class-validator';

export class CotacoesDto {
  @IsNotEmpty()
  @IsNumber()
  clienteId: number;

  @IsNotEmpty()
  @IsDateString()
  dataCotacao: Date;

  @IsNotEmpty()
  @IsNumber()
  valorTotal: number;
}
