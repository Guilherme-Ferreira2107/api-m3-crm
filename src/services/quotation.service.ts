import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QuotationEntity } from '../entities/quotation.entity';
import { QuotationDto } from '../dtos/quotation.dto';

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

  async createQuotation(QuotationDto: QuotationDto): Promise<QuotationEntity> {
    const Quotation = this.quotationRepository.create(QuotationDto);
    return this.quotationRepository.save(Quotation);
  }

  async updateQuotation(
    id: number,
    QuotationDto: QuotationDto,
  ): Promise<QuotationEntity> {
    await this.quotationRepository.update(id, QuotationDto);
    return this.quotationRepository.findOne({ where: { id } });
  }

  async deleteQuotation(id: number): Promise<void> {
    await this.quotationRepository.delete(id);
  }
}
