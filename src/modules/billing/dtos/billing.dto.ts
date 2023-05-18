import { IsNotEmpty, IsNumber, IsDateString } from 'class-validator';

export class BillingDto {
  @IsNotEmpty()
  @IsNumber()
  contractId: number;

  @IsNotEmpty()
  @IsDateString()
  dateBilling: Date;

  @IsNotEmpty()
  @IsNumber()
  billingValue: number;
}
