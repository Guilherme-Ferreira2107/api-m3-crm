import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContractDto } from '../dtos/contract.dto';
import { ContractEntity } from '../entities/contract.entity';

@Injectable()
export class ContractService {
  constructor(
    @InjectRepository(ContractEntity)
    private contractRepository: Repository<ContractEntity>,
  ) {}

  async getAllContratos(): Promise<ContractEntity[]> {
    return this.contractRepository.find();
  }

  async getContratoById(id: number): Promise<ContractEntity> {
    return this.contractRepository.findOne({ where: { id } });
  }

  async createContrato(contract: ContractDto): Promise<ContractEntity> {
    const contractCreated = this.contractRepository.create(contract);
    return this.contractRepository.save(contractCreated);
  }

  async updateContrato(
    id: number,
    contract: ContractDto,
  ): Promise<ContractEntity> {
    await this.contractRepository.update(id, contract);
    return this.contractRepository.findOne({ where: { id } });
  }

  async deleteContrato(id: number): Promise<void> {
    await this.contractRepository.delete(id);
  }
}
