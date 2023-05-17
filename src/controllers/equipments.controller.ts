import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { EquipmentsDto } from '../dtos/equipments.dto';
import { EquipmentsService } from '../services/equipments.service';

@Controller('equipments')
export class EquipmentsController {
  constructor(private readonly equipmentsService: EquipmentsService) {}

  @Get()
  async getAllEquipments() {
    return await this.equipmentsService.getAllEquipments();
  }

  @Get(':id')
  async getEquipmentsById(@Param('id') id: number) {
    return await this.equipmentsService.getEquipmentsById(id);
  }

  @Post()
  async createEquipments(@Body() equipments: EquipmentsDto) {
    return await this.equipmentsService.createEquipments(equipments);
  }

  @Put(':id')
  async updateEquipments(
    @Param('id') id: number,
    @Body() equipments: EquipmentsDto,
  ) {
    return await this.equipmentsService.updateEquipments(id, equipments);
  }

  @Delete(':id')
  async deleteEquipments(@Param('id') id: number) {
    return await this.equipmentsService.deleteEquipments(id);
  }
}
