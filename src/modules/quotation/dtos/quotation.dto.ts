import { IsNotEmpty, IsNumber, IsDateString, IsString } from 'class-validator';

export class QuotationDto {
  @IsNotEmpty()
  @IsNumber()
  clientId: number;

  @IsNotEmpty()
  @IsDateString()
  dateQuotation: Date;

  @IsNotEmpty()
  @IsString()
  itens: string;
}
