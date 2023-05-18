import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProposalsDto } from './dtos/proposals.dto';
import { ProposalsEntity } from './entities/proposals.entity';

@Injectable()
export class ProposalsService {
  constructor(
    @InjectRepository(ProposalsEntity)
    private readonly proposalsRepository: Repository<ProposalsEntity>,
  ) {}

  async getAllProposals(): Promise<ProposalsEntity[]> {
    return this.proposalsRepository.find();
  }

  async getProposalsById(id: number): Promise<ProposalsEntity> {
    return this.proposalsRepository.findOne({ where: { id } });
  }

  async createProposals(params: ProposalsDto): Promise<ProposalsEntity> {
    const itemCreated = this.proposalsRepository.create(params);
    return this.proposalsRepository.save(itemCreated);
  }

  async updateProposals(
    id: number,
    params: ProposalsDto,
  ): Promise<ProposalsEntity> {
    await this.proposalsRepository.update(id, params);
    return this.proposalsRepository.findOne({ where: { id } });
  }

  async deleteProposals(id: number): Promise<void> {
    await this.proposalsRepository.delete(id);
  }
}
