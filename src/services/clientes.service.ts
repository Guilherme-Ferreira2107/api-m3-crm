import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClientesEntity } from '../entities/clientes.entity';
import { ClientesDto } from '../dtos/clientes.dto';
import { Repository } from 'typeorm';

@Injectable()
export class ClientesService {
  constructor(
    @InjectRepository(ClientesEntity)
    private clientesRepository: Repository<ClientesEntity>,
  ) {}

  async createCliente(clienteDto: ClientesDto): Promise<ClientesEntity> {
    return this.clientesRepository.save(clienteDto);
  }

  async getClienteById(id: number): Promise<ClientesEntity> {
    return this.clientesRepository.findOne({ where: { id } });
  }

  async getAllClientes(): Promise<ClientesEntity[]> {
    return this.clientesRepository.find();
  }

  async updateCliente(
    id: number,
    updateClienteDto: Partial<ClientesDto>,
  ): Promise<ClientesEntity> {
    await this.clientesRepository.update(id, updateClienteDto);
    return this.getClienteById(id);
  }

  async deleteCliente(id: number): Promise<any> {
    const response = await this.clientesRepository.delete(id);
    return {
      message:
        response.affected === 1
          ? 'Cliente Deletado!'
          : 'Cliente não encontrado!',
    };
  }
}
