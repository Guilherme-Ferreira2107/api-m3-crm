import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsIn } from 'class-validator';

export class StockMovementsDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  equipmentId: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  dateMovement: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsIn(['Entrega', 'Retirada', 'Transferência'])
  typeMovement: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  startLocation: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  finalLocation: string;
}
