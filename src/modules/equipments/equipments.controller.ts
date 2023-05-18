import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseGuards
} from '@nestjs/common';
import { ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { EquipmentsDto } from './dtos/equipments.dto';
import { EquipmentsService } from './equipments.service';

@Controller('equipments')
export class EquipmentsController {
  constructor(private readonly equipmentsService: EquipmentsService) {}

  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async getAllEquipments() {
    return await this.equipmentsService.getAllEquipments();
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async getEquipmentsById(@Param('id') id: number) {
    return await this.equipmentsService.getEquipmentsById(id);
  }

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async createEquipments(@Body() params: EquipmentsDto) {
    return await this.equipmentsService.createEquipments(params);
  }

  @Put(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async updateEquipments(
    @Param('id') id: number,
    @Body() params: EquipmentsDto,
  ) {
    return await this.equipmentsService.updateEquipments(id, params);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  async deleteEquipments(@Param('id') id: number) {
    return await this.equipmentsService.deleteEquipments(id);
  }
}
