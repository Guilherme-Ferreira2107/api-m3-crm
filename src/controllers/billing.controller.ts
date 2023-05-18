import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { BillingDto } from '../dtos/billing.dto';
import { BillingService } from '../services/billing.service';

@Controller('billing')
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @Get()
  getAllBilling() {
    return this.billingService.getAllBilling();
  }

  @Get(':id')
  getBillingById(@Param('id') id: number) {
    return this.billingService.getBillingById(id);
  }

  @Post()
  createBilling(@Body() params: BillingDto) {
    return this.billingService.createBilling(params);
  }

  @Put(':id')
  updateBilling(@Param('id') id: number, @Body() params: BillingDto) {
    return this.billingService.updateBilling(id, params);
  }

  @Delete(':id')
  deleteBilling(@Param('id') id: number) {
    return this.billingService.deleteBilling(id);
  }
}
