import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { QuotationService } from '../services/quotation.service';
import { QuotationDto } from '../dtos/quotation.dto';

@Controller('quotation')
export class QuotationController {
  constructor(private readonly quotationService: QuotationService) {}

  @Get()
  getAllQuotation() {
    return this.quotationService.getAllQuotation();
  }

  @Get(':id')
  getQuotationById(@Param('id') id: number) {
    return this.quotationService.getQuotationById(id);
  }

  @Post()
  createQuotation(@Body() QuotationDto: QuotationDto) {
    return this.quotationService.createQuotation(QuotationDto);
  }

  @Put(':id')
  updateQuotation(@Param('id') id: number, @Body() QuotationDto: QuotationDto) {
    return this.quotationService.updateQuotation(id, QuotationDto);
  }

  @Delete(':id')
  deleteQuotation(@Param('id') id: number) {
    return this.quotationService.deleteQuotation(id);
  }
}
