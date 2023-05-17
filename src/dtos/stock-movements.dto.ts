import { IsNotEmpty, IsString, IsIn } from 'class-validator';

export class StockMovementsDto {
  @IsNotEmpty()
  @IsString()
  equipmentId: string;

  @IsNotEmpty()
  @IsString()
  dateMovement: Date;

  @IsNotEmpty()
  @IsString()
  @IsIn(['Entrega', 'Retirada', 'Transferência'])
  typeMovement: string;

  @IsNotEmpty()
  @IsString()
  startLocation: string;

  @IsNotEmpty()
  @IsString()
  finalLocation: string;
}
