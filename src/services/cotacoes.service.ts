import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CotacoesEntity } from '../entities/cotacoes.entity';
import { CotacoesDto } from '../dtos/cotacoes.dto';

@Injectable()
export class CotacoesService {
  constructor(
    @InjectRepository(CotacoesEntity)
    private readonly cotacoesRepository: Repository<CotacoesEntity>,
  ) {}

  async getAllCotacoes(): Promise<CotacoesEntity[]> {
    return this.cotacoesRepository.find();
  }

  async getCotacoesById(id: number): Promise<CotacoesEntity> {
    return this.cotacoesRepository.findOne({ where: {id} });
  }

  async createCotacoes(cotacoesDto: CotacoesDto): Promise<CotacoesEntity> {
    const cotacoes = this.cotacoesRepository.create(cotacoesDto);
    return this.cotacoesRepository.save(cotacoes);
  }

  async updateCotacoes(
    id: number,
    cotacoesDto: CotacoesDto,
  ): Promise<CotacoesEntity> {
    await this.cotacoesRepository.update(id, cotacoesDto);
    return this.cotacoesRepository.findOne({ where: {id} });
  }

  async deleteCotacoes(id: number): Promise<void> {
    await this.cotacoesRepository.delete(id);
  }
}
