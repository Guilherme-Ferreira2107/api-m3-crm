import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class EquipmentsDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  typeEquipment: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  brandEquipment: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  modelEquipment: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  serieNumberEquipment: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  statusEquipment: string;
}
