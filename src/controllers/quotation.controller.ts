import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { QuotationDto } from '../dtos/quotation.dto';
import { QuotationService } from '../services/quotation.service';

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
  createQuotation(@Body() quotation: QuotationDto) {
    return this.quotationService.createQuotation(quotation);
  }

  @Put(':id')
  updateQuotation(@Param('id') id: number, @Body() quotation: QuotationDto) {
    return this.quotationService.updateQuotation(id, quotation);
  }

  @Delete(':id')
  deleteQuotation(@Param('id') id: number) {
    return this.quotationService.deleteQuotation(id);
  }
}
