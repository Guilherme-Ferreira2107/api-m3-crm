import { IsNotEmpty, IsNumber, IsDateString } from 'class-validator';

export class ContractDto {
  @IsNotEmpty()
  @IsNumber()
  clientId: number;

  @IsNotEmpty()
  @IsDateString()
  dateStart: Date;

  @IsNotEmpty()
  @IsDateString()
  dateFinal: Date;

  @IsNotEmpty()
  @IsNumber()
  value: number;
}
