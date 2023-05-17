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
  createBilling(@Body() billing: BillingDto) {
    return this.billingService.createBilling(billing);
  }

  @Put(':id')
  updateBilling(@Param('id') id: number, @Body() billing: BillingDto) {
    return this.billingService.updateBilling(id, billing);
  }

  @Delete(':id')
  deleteBilling(@Param('id') id: number) {
    return this.billingService.deleteBilling(id);
  }
}
