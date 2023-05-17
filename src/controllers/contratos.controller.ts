import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ContratosService } from '../services/contratos.service';
import { ContratosDto } from '../dtos/contratos.dto';

@Controller('contratos')
export class ContratosController {
  constructor(private readonly contratosService: ContratosService) {}

  @Get()
  getAllContratos() {
    return this.contratosService.getAllContratos();
  }

  @Get(':id')
  getContratoById(@Param('id') id: number) {
    return this.contratosService.getContratoById(id);
  }

  @Post()
  createContrato(@Body() contratosDto: ContratosDto) {
    return this.contratosService.createContrato(contratosDto);
  }

  @Put(':id')
  updateContrato(@Param('id') id: number, @Body() contratosDto: ContratosDto) {
    return this.contratosService.updateContrato(id, contratosDto);
  }

  @Delete(':id')
  deleteContrato(@Param('id') id: number) {
    return this.contratosService.deleteContrato(id);
  }
}
