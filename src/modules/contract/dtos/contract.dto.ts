import { IsNotEmpty, IsNumber, IsDateString, IsString } from 'class-validator';

export class ContractDto {
  @IsNotEmpty()
  @IsNumber()
  clientId: number;

  @IsNotEmpty()
  @IsNumber()
  equipmentId: number;

  @IsNotEmpty()
  @IsString()
  describe: string;

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
