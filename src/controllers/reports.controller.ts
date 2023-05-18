import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { ReportsDto } from '../dtos/reports.dto';
import { ReportsService } from '../services/reports.service';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

  @Get()
  getAllReports() {
    return this.reportsService.getAllReports();
  }

  @Get(':id')
  getReportsById(@Param('id') id: number) {
    return this.reportsService.getReportsById(id);
  }

  @Post()
  createReports(@Body() params: ReportsDto) {
    return this.reportsService.createReports(params);
  }

  @Put(':id')
  updateReports(@Param('id') id: number, @Body() params: ReportsDto) {
    return this.reportsService.updateReports(id, params);
  }

  @Delete(':id')
  deleteReports(@Param('id') id: number) {
    return this.reportsService.deleteReports(id);
  }
}
