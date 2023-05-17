import { IsNotEmpty, IsNumber, IsDateString, IsString } from 'class-validator';

export class BillingDto {
  @IsNotEmpty()
  @IsNumber()
  contractId: number;

  @IsNotEmpty()
  @IsDateString()
  dateBilling: Date;

  @IsNotEmpty()
  @IsString()
  billingValue: number;
}
