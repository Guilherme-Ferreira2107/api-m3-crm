import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ProposalsDto } from '../dtos/proposals.dto';
import { ProposalsService } from '../services/proposals.service';

@Controller('proposals')
export class ProposalsController {
  constructor(private readonly proposalsService: ProposalsService) {}

  @Get()
  getAllProposals() {
    return this.proposalsService.getAllProposals();
  }

  @Get(':id')
  getProposalsById(@Param('id') id: number) {
    return this.proposalsService.getProposalsById(id);
  }

  @Post()
  createProposals(@Body() params: ProposalsDto) {
    return this.proposalsService.createProposals(params);
  }

  @Put(':id')
  updateProposals(@Param('id') id: number, @Body() params: ProposalsDto) {
    return this.proposalsService.updateProposals(id, params);
  }

  @Delete(':id')
  deleteProposals(@Param('id') id: number) {
    return this.proposalsService.deleteProposals(id);
  }
}
