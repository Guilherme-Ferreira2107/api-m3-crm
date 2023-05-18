import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientDto } from './dtos/client.dto';
import { ClientEntity } from './entities/client.entity';

@Injectable()
export class ClientService {
  constructor(
    @InjectRepository(ClientEntity)
    private clientRepository: Repository<ClientEntity>,
  ) {}

  async createClient(params: ClientDto): Promise<ClientEntity> {
    return this.clientRepository.save(params);
  }

  async getClientById(id: number): Promise<ClientEntity> {
    return this.clientRepository.findOne({ where: { id } });
  }

  async getAllClient(): Promise<ClientEntity[]> {
    return this.clientRepository.find();
  }

  async updateClient(
    id: number,
    params: Partial<ClientDto>,
  ): Promise<ClientEntity> {
    await this.clientRepository.update(id, params);
    return this.getClientById(id);
  }

  async deleteClient(id: number): Promise<any> {
    const response = await this.clientRepository.delete(id);
    return {
      message:
        response.affected === 1
          ? 'Cliente Deletado!'
          : 'Cliente não encontrado!',
    };
  }
}
