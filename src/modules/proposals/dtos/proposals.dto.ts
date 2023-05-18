import {
  IsNotEmpty,
  IsNumber,
  IsDateString,
  IsString,
  IsIn,
} from 'class-validator';

export class ProposalsDto {
  @IsNotEmpty()
  @IsNumber()
  quotationId: number;

  @IsNotEmpty()
  @IsDateString()
  dateProposal: Date;

  @IsNotEmpty()
  @IsNumber()
  valueProposal: number;

  @IsNotEmpty()
  @IsString()
  @IsIn(['Aceita', 'Recusada', 'Pendente'])
  status: string;
}
