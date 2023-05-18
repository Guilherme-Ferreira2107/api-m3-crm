import { IsNotEmpty, IsString, IsDateString } from 'class-validator';

export class ReportsDto {
  @IsNotEmpty()
  @IsString()
  reportType: string;

  @IsNotEmpty()
  @IsDateString()
  creationDate: Date;

  @IsNotEmpty()
  @IsString()
  appliedFilters: string;

  @IsNotEmpty()
  @IsString()
  reportResults: string;
}
