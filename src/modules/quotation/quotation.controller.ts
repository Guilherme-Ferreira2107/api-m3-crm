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
import { QuotationDto } from './dtos/quotation.dto';
import { QuotationService } from './quotation.service';

@Controller('quotation')
export class QuotationController {
  constructor(private readonly quotationService: QuotationService) {}

  @Get()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  getAllQuotation() {
    return this.quotationService.getAllQuotation();
  }

  @Get(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  getQuotationById(@Param('id') id: number) {
    return this.quotationService.getQuotationById(id);
  }

  @Post()
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  createQuotation(@Body() params: QuotationDto) {
    return this.quotationService.createQuotation(params);
  }

  @Put(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  updateQuotation(@Param('id') id: number, @Body() params: QuotationDto) {
    return this.quotationService.updateQuotation(id, params);
  }

  @Delete(':id')
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  deleteQuotation(@Param('id') id: number) {
    return this.quotationService.deleteQuotation(id);
  }
}
