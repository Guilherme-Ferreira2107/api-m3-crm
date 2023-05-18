import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReportsDto } from './dtos/reports.dto';
import { ReportsEntity } from './entities/reports.entity';

@Injectable()
export class ReportsService {
  constructor(
    @InjectRepository(ReportsEntity)
    private readonly reportsRepository: Repository<ReportsEntity>,
  ) {}

  async getAllReports(): Promise<ReportsEntity[]> {
    return this.reportsRepository.find();
  }

  async getReportsById(id: number): Promise<ReportsEntity> {
    return this.reportsRepository.findOne({ where: { id } });
  }

  async createReports(params: ReportsDto): Promise<ReportsEntity> {
    const itemCreated = this.reportsRepository.create(params);
    return this.reportsRepository.save(itemCreated);
  }

  async updateReports(id: number, params: ReportsDto): Promise<ReportsEntity> {
    await this.reportsRepository.update(id, params);
    return this.reportsRepository.findOne({ where: { id } });
  }

  async deleteReports(id: number): Promise<void> {
    await this.reportsRepository.delete(id);
  }
}
