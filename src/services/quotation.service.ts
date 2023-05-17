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

  async createQuotation(quotation: QuotationDto): Promise<QuotationEntity> {
    const quotationCreated = this.quotationRepository.create(quotation);
    return this.quotationRepository.save(quotationCreated);
  }

  async updateQuotation(
    id: number,
    quotation: QuotationDto,
  ): Promise<QuotationEntity> {
    await this.quotationRepository.update(id, quotation);
    return this.quotationRepository.findOne({ where: { id } });
  }

  async deleteQuotation(id: number): Promise<void> {
    await this.quotationRepository.delete(id);
  }
}
