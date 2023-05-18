import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StockMovementsDto } from './dtos/stock-movements.dto';
import { StockMovementsEntity } from './entities/stock-movements.entity';

@Injectable()
export class StockMovementsService {
  constructor(
    @InjectRepository(StockMovementsEntity)
    private readonly stockMovementRepository: Repository<StockMovementsEntity>,
  ) {}

  async getAllStockMovements(): Promise<StockMovementsEntity[]> {
    return this.stockMovementRepository.find();
  }

  async getStockMovementsById(id: number): Promise<StockMovementsEntity> {
    return this.stockMovementRepository.findOne({ where: { id } });
  }

  async createStockMovements(
    params: StockMovementsDto,
  ): Promise<StockMovementsEntity> {
    const stockMovementCreated = this.stockMovementRepository.create(params);
    return this.stockMovementRepository.save(stockMovementCreated);
  }

  async updateStockMovements(
    id: number,
    params: StockMovementsDto,
  ): Promise<StockMovementsEntity> {
    await this.stockMovementRepository.update(id, params);
    return this.stockMovementRepository.findOne({ where: { id } });
  }

  async deleteStockMovements(id: number): Promise<void> {
    await this.stockMovementRepository.delete(id);
  }
}
