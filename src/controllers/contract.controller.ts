import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ContractService } from '../services/contract.service';
import { ContractDto } from '../dtos/contract.dto';

@Controller('contract')
export class ContractController {
  constructor(private readonly contractService: ContractService) {}

  @Get()
  getAllContratos() {
    return this.contractService.getAllContratos();
  }

  @Get(':id')
  getContratoById(@Param('id') id: number) {
    return this.contractService.getContratoById(id);
  }

  @Post()
  createContrato(@Body() params: ContractDto) {
    return this.contractService.createContrato(params);
  }

  @Put(':id')
  updateContrato(@Param('id') id: number, @Body() params: ContractDto) {
    return this.contractService.updateContrato(id, params);
  }

  @Delete(':id')
  deleteContrato(@Param('id') id: number) {
    return this.contractService.deleteContrato(id);
  }
}
