import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsDateString, IsString } from 'class-validator';

export class QuotationDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  clientId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  dateQuotation: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  itens: string;
}
