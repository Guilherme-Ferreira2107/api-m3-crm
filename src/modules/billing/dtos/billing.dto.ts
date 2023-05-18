import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsDateString } from 'class-validator';

export class BillingDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  contractId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  dateBilling: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  billingValue: number;
}
