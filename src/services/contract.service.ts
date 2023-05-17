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

  async createContrato(contractDto: ContractDto): Promise<ContractEntity> {
    const contrato = this.contractRepository.create(contractDto);
    return this.contractRepository.save(contrato);
  }

  async updateContrato(
    id: number,
    contractDto: ContractDto,
  ): Promise<ContractEntity> {
    await this.contractRepository.update(id, contractDto);
    return this.contractRepository.findOne({ where: { id } });
  }

  async deleteContrato(id: number): Promise<void> {
    await this.contractRepository.delete(id);
  }
}
