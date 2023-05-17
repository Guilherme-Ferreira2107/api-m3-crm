 
import { IsNotEmpty, IsNumber, IsDateString, IsString, IsIn } from 'class-validator';

export class SupportDto {
  @IsNotEmpty()
  @IsNumber()
  contractId: number;

  @IsNotEmpty()
  @IsDateString()
  dateTicket: Date;

  @IsNotEmpty()
  @IsString()
  describe: string;

  @IsNotEmpty()
  @IsString()
  @IsIn(['Aberto', 'Em andamento', 'Fechado'])
  status: string;
}
