import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsDateString } from 'class-validator';

export class PaymentsDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  contractId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  datePayments: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  paymentsValue: number;
}
