import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockMovementsEntity } from '../entities/stock-movements.entity';
import { StockMovementsController } from '../controllers/stock-movements.controller';
import { StockMovementsService } from '../services/stock-movements.service';

@Module({
  imports: [TypeOrmModule.forFeature([StockMovementsEntity])],
  controllers: [StockMovementsController],
  providers: [StockMovementsService],
})
export class StockMovementsModule {}
