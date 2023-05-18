import { StockMovementsDto } from '../modules/stock-movements/dtos/stock-movements.dto';

export const StockMovementsMock: StockMovementsDto = {
  dateMovement: new Date(),
  equipmentId: '1',
  finalLocation: 'São Paulo',
  startLocation: 'Rio de Janeiro',
  typeMovement: 'Transferência',
};
