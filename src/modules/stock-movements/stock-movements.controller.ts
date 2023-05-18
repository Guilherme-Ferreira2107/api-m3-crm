import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { StockMovementsDto } from './dtos/stock-movements.dto';
import { StockMovementsService } from './stock-movements.service';

@Controller('stock-movements')
export class StockMovementsController {
  constructor(private readonly stockMovementService: StockMovementsService) {}

  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  getAllQuotation() {
    return this.stockMovementService.getAllStockMovements();
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  getStockMovementsById(@Param('id') id: number) {
    return this.stockMovementService.getStockMovementsById(id);
  }

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  createStockMovements(@Body() params: StockMovementsDto) {
    return this.stockMovementService.createStockMovements(params);
  }

  @Put(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  updateStockMovements(
    @Param('id') id: number,
    @Body() params: StockMovementsDto,
  ) {
    return this.stockMovementService.updateStockMovements(id, params);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  deleteStockMovements(@Param('id') id: number) {
    return this.stockMovementService.deleteStockMovements(id);
  }
}
