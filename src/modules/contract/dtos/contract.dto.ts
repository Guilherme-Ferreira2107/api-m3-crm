import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsDateString, IsString } from 'class-validator';

export class ContractDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  clientId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  equipmentId: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  describe: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  dateStart: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  dateFinal: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  value: number;
}
