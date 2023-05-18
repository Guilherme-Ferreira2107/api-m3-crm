import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsDateString } from 'class-validator';

export class ReportsDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  reportType: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsDateString()
  creationDate: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  appliedFilters: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  reportResults: string;
}
