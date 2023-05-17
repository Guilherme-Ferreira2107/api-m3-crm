import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BillingDto } from '../dtos/billing.dto';
import { BillingEntity } from '../entities/billing.entity';

@Injectable()
export class BillingService {
  constructor(
    @InjectRepository(BillingEntity)
    private readonly billingRepository: Repository<BillingEntity>,
  ) {}

  async getAllBilling(): Promise<BillingEntity[]> {
    return this.billingRepository.find();
  }

  async getBillingById(id: number): Promise<BillingEntity> {
    return this.billingRepository.findOne({ where: { id } });
  }

  async createBilling(billing: BillingDto): Promise<BillingEntity> {
    const billingCreated = this.billingRepository.create(billing);
    return this.billingRepository.save(billingCreated);
  }

  async updateBilling(id: number, billing: BillingDto): Promise<BillingEntity> {
    await this.billingRepository.update(id, billing);
    return this.billingRepository.findOne({ where: { id } });
  }

  async deleteBilling(id: number): Promise<void> {
    await this.billingRepository.delete(id);
  }
}
