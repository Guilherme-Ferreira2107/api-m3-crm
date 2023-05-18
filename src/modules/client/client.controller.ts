import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { ClientDto } from './dtos/client.dto';
import { ClientService } from './client.service';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async getAllClient() {
    return await this.clientService.getAllClient();
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async getClientById(@Param('id') id: number) {
    return await this.clientService.getClientById(id);
  }

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async createClient(@Body() params: ClientDto) {
    return await this.clientService.createClient(params);
  }

  @Put(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async updateClient(@Param('id') id: number, @Body() params: ClientDto) {
    return await this.clientService.updateClient(id, params);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async deleteClient(@Param('id') id: number) {
    return await this.clientService.deleteClient(id);
  }
}
