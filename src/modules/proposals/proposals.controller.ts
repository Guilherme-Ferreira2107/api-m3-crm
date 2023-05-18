import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ProposalsDto } from './dtos/proposals.dto';
import { ProposalsService } from './proposals.service';

@Controller('proposals')
export class ProposalsController {
  constructor(private readonly proposalsService: ProposalsService) {}

  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  getAllProposals() {
    return this.proposalsService.getAllProposals();
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  getProposalsById(@Param('id') id: number) {
    return this.proposalsService.getProposalsById(id);
  }

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  createProposals(@Body() params: ProposalsDto) {
    return this.proposalsService.createProposals(params);
  }

  @Put(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  updateProposals(@Param('id') id: number, @Body() params: ProposalsDto) {
    return this.proposalsService.updateProposals(id, params);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  deleteProposals(@Param('id') id: number) {
    return this.proposalsService.deleteProposals(id);
  }
}
