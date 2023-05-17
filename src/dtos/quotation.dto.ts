import { IsNotEmpty, IsNumber, IsDateString } from 'class-validator';

export class QuotationDto {
  @IsNotEmpty()
  @IsNumber()
  clientId: number;

  @IsNotEmpty()
  @IsDateString()
  dateQuotation: Date;

  @IsNotEmpty()
  @IsNumber()
  totalValue: number;
}
