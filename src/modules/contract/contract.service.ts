import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContractDto } from './dtos/contract.dto';
import { ContractEntity } from './entities/contract.entity';

@Injectable()
export class ContractService {
  constructor(
    @InjectRepository(ContractEntity)
    private contractRepository: Repository<ContractEntity>,
  ) {}

  async getAllContracts(): Promise<ContractEntity[]> {
    return this.contractRepository.find();
  }

  async getContractById(id: number): Promise<ContractEntity> {
    return this.contractRepository.findOne({ where: { id } });
  }

  async createContract(params: ContractDto): Promise<ContractEntity> {
    const itemCreated = this.contractRepository.create(params);
    return this.contractRepository.save(itemCreated);
  }

  async updateContract(
    id: number,
    params: ContractDto,
  ): Promise<ContractEntity> {
    await this.contractRepository.update(id, params);
    return this.contractRepository.findOne({ where: { id } });
  }

  async deleteContract(id: number): Promise<void> {
    await this.contractRepository.delete(id);
  }
}
