import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { StockMovementsDto } from '../dtos/stock-movements.dto';
import { StockMovementsService } from '../services/stock-movements.service';

@Controller('stock-movements')
export class StockMovementsController {
  constructor(private readonly stockMovementService: StockMovementsService) {}

  @Get()
  getAllQuotation() {
    return this.stockMovementService.getAllStockMovements();
  }

  @Get(':id')
  getStockMovementsById(@Param('id') id: number) {
    return this.stockMovementService.getStockMovementsById(id);
  }

  @Post()
  createStockMovements(@Body() stockMovements: StockMovementsDto) {
    return this.stockMovementService.createStockMovements(stockMovements);
  }

  @Put(':id')
  updateStockMovements(
    @Param('id') id: number,
    @Body() stockMovements: StockMovementsDto,
  ) {
    return this.stockMovementService.updateStockMovements(id, stockMovements);
  }

  @Delete(':id')
  deleteStockMovements(@Param('id') id: number) {
    return this.stockMovementService.deleteStockMovements(id);
  }
}
