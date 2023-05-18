import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaymentsDto } from './dtos/payments.dto';
import { PaymentsEntity } from './entities/payments.entity';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(PaymentsEntity)
    private readonly paymentsRepository: Repository<PaymentsEntity>,
  ) {}

  async getAllPayments(): Promise<PaymentsEntity[]> {
    return this.paymentsRepository.find();
  }

  async getPaymentsById(id: number): Promise<PaymentsEntity> {
    return this.paymentsRepository.findOne({ where: { id } });
  }

  async createPayments(params: PaymentsDto): Promise<PaymentsEntity> {
    const itemCreated = this.paymentsRepository.create(params);
    return this.paymentsRepository.save(itemCreated);
  }

  async updatePayments(
    id: number,
    params: PaymentsDto,
  ): Promise<PaymentsEntity> {
    await this.paymentsRepository.update(id, params);
    return this.paymentsRepository.findOne({ where: { id } });
  }

  async deletePayments(id: number): Promise<void> {
    await this.paymentsRepository.delete(id);
  }
}
