import { IsNotEmpty, IsString } from 'class-validator';

export class EquipmentsDto {
  @IsNotEmpty()
  @IsString()
  typeEquipment: string;

  @IsNotEmpty()
  @IsString()
  brandEquipment: string;

  @IsNotEmpty()
  @IsString()
  modelEquipment: string;

  @IsNotEmpty()
  @IsString()
  serieNumberEquipment: string;

  @IsNotEmpty()
  @IsString()
  statusEquipment: string;
}
