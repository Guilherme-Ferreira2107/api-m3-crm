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
  getAllContracts() {
    return this.contractService.getAllContracts();
  }

  @Get(':id')
  getContractById(@Param('id') id: number) {
    return this.contractService.getContractById(id);
  }

  @Post()
  createContract(@Body() params: ContractDto) {
    return this.contractService.createContract(params);
  }

  @Put(':id')
  updateContract(@Param('id') id: number, @Body() params: ContractDto) {
    return this.contractService.updateContract(id, params);
  }

  @Delete(':id')
  deleteContract(@Param('id') id: number) {
    return this.contractService.deleteContract(id);
  }
}
