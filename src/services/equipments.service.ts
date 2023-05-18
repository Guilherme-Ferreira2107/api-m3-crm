import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EquipmentsDto } from '../dtos/equipments.dto';
import { EquipmentsEntity } from '../entities/equipments.entity';

@Injectable()
export class EquipmentsService {
  constructor(
    @InjectRepository(EquipmentsEntity)
    private equipmentsRepository: Repository<EquipmentsEntity>,
  ) {}

  async createEquipments(params: EquipmentsDto): Promise<EquipmentsEntity> {
    return this.equipmentsRepository.save(params);
  }

  async getEquipmentsById(id: number): Promise<EquipmentsEntity> {
    return this.equipmentsRepository.findOne({ where: { id } });
  }

  async getAllEquipments(): Promise<EquipmentsEntity[]> {
    return this.equipmentsRepository.find();
  }

  async updateEquipments(
    id: number,
    params: Partial<EquipmentsDto>,
  ): Promise<EquipmentsEntity> {
    await this.equipmentsRepository.update(id, params);
    return this.getEquipmentsById(id);
  }

  async deleteEquipments(id: number): Promise<any> {
    const response = await this.equipmentsRepository.delete(id);
    return {
      message:
        response.affected === 1
          ? 'Equipamento Deletado!'
          : 'Equipamento não encontrado!',
    };
  }
}
