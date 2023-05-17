import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { ClientService } from '../services/client.service';
import { ClientDto } from '../dtos/client.dto';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  async getAllClient() {
    return await this.clientService.getAllClient();
  }

  @Get(':id')
  async getClientById(@Param('id') id: number) {
    return await this.clientService.getClientById(id);
  }

  @Post()
  async createClient(@Body() clientDto: ClientDto) {
    return await this.clientService.createClient(clientDto);
  }

  @Put(':id')
  async updateClient(@Param('id') id: number, @Body() clientDto: ClientDto) {
    return await this.clientService.updateClient(id, clientDto);
  }

  @Delete(':id')
  async deleteClient(@Param('id') id: number) {
    return await this.clientService.deleteClient(id);
  }
}
