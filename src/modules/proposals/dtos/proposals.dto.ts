import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsDateString,
  IsString,
  IsIn,
} from 'class-validator';

export class ProposalsDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  quotationId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  dateProposal: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  valueProposal: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsIn(['Aceita', 'Recusada', 'Pendente'])
  status: string;
}
