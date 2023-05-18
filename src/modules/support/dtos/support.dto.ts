import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsDateString,
  IsString,
  IsIn,
} from 'class-validator';

export class SupportDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  contractId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  dateTicket: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  describe: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsIn(['Aberto', 'Em andamento', 'Fechado'])
  status: string;
}
