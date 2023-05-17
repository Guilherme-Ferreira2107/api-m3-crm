import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ContratosRepository } from '../repositories/contratos.repository';
import { ContratosDto } from '../dtos/contratos.dto';
import { ContratosEntity } from '../entities/contratos.entity';

@Injectable()
export class ContratosService {
  constructor(
    @InjectRepository(ContratosRepository)
    private readonly contratosRepository: ContratosRepository,
  ) {}

  async getAllContratos(): Promise<ContratosEntity[]> {
    return this.contratosRepository.find();
  }

  async getContratoById(id: number): Promise<ContratosEntity> {
    return this.contratosRepository.findOne({ where: { id } });
  }

  async createContrato(contratosDto: ContratosDto): Promise<ContratosEntity> {
    const contrato = this.contratosRepository.create(contratosDto);
    return this.contratosRepository.save(contrato);
  }

  async updateContrato(
    id: number,
    contratosDto: ContratosDto,
  ): Promise<ContratosEntity> {
    await this.contratosRepository.update(id, contratosDto);
    return this.contratosRepository.findOne({ where: { id } });
  }

  async deleteContrato(id: number): Promise<void> {
    await this.contratosRepository.delete(id);
  }
}
