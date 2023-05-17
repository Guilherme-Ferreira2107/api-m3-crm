import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SupportDto } from '../dtos/support.dto';
import { SupportEntity } from '../entities/support.entity';

@Injectable()
export class SupportService {
  constructor(
    @InjectRepository(SupportEntity)
    private readonly supportRepository: Repository<SupportEntity>,
  ) {}

  async getAllSupport(): Promise<SupportEntity[]> {
    return this.supportRepository.find();
  }

  async getSupportById(id: number): Promise<SupportEntity> {
    return this.supportRepository.findOne({ where: { id } });
  }

  async createSupport(params: SupportDto): Promise<SupportEntity> {
    const itemCreated = this.supportRepository.create(params);
    return this.supportRepository.save(itemCreated);
  }

  async updateSupport(id: number, params: SupportDto): Promise<SupportEntity> {
    await this.supportRepository.update(id, params);
    return this.supportRepository.findOne({ where: { id } });
  }

  async deleteSupport(id: number): Promise<void> {
    await this.supportRepository.delete(id);
  }
}
