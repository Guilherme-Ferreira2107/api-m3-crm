import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ClientesService } from '../services/clientes.service';
import { ClientesDto } from '../dtos/clientes.dto';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Get()
  async getAllClientes() {
    return await this.clientesService.getAllClientes();
  }

  @Get(':id')
  async getClienteById(@Param('id') id: number) {
    return await this.clientesService.getClienteById(id);
  }

  @Post()
  async createCliente(@Body() clienteDto: ClientesDto) {
    return await this.clientesService.createCliente(clienteDto);
  }

  @Put(':id')
  async updateCliente(
    @Param('id') id: number,
    @Body() clienteDto: ClientesDto,
  ) {
    return await this.clientesService.updateCliente(id, clienteDto);
  }

  @Delete(':id')
  async deleteCliente(@Param('id') id: number) {
    return await this.clientesService.deleteCliente(id);
  }
}
