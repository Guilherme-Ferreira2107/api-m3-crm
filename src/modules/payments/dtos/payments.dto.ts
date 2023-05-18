import { IsNotEmpty, IsNumber, IsDateString } from 'class-validator';

export class PaymentsDto {
  @IsNotEmpty()
  @IsNumber()
  contractId: number;

  @IsNotEmpty()
  @IsDateString()
  datePayments: Date;

  @IsNotEmpty()
  @IsNumber()
  paymentsValue: number;
}
