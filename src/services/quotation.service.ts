import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QuotationDto } from '../dtos/quotation.dto';
import { QuotationEntity } from '../entities/quotation.entity';

@Injectable()
export class QuotationService {
  constructor(
    @InjectRepository(QuotationEntity)
    private readonly quotationRepository: Repository<QuotationEntity>,
  ) {}

  async getAllQuotation(): Promise<QuotationEntity[]> {
    return this.quotationRepository.find();
  }

  async getQuotationById(id: number): Promise<QuotationEntity> {
    return this.quotationRepository.findOne({ where: { id } });
  }

  async createQuotation(params: QuotationDto): Promise<QuotationEntity> {
    const itemCreated = this.quotationRepository.create(params);
    return this.quotationRepository.save(itemCreated);
  }

  async updateQuotation(
    id: number,
    params: QuotationDto,
  ): Promise<QuotationEntity> {
    await this.quotationRepository.update(id, params);
    return this.quotationRepository.findOne({ where: { id } });
  }

  async deleteQuotation(id: number): Promise<void> {
    await this.quotationRepository.delete(id);
  }
}
