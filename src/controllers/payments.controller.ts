import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { PaymentsDto } from '../dtos/payments.dto';
import { PaymentsService } from '../services/payments.service';

@Controller('payments')
export class PaymentsController {
  constructor(private readonly paymentsService: PaymentsService) {}

  @Get()
  getAllPayments() {
    return this.paymentsService.getAllPayments();
  }

  @Get(':id')
  getPaymentsById(@Param('id') id: number) {
    return this.paymentsService.getPaymentsById(id);
  }

  @Post()
  createPayments(@Body() params: PaymentsDto) {
    return this.paymentsService.createPayments(params);
  }

  @Put(':id')
  updatePayments(@Param('id') id: number, @Body() params: PaymentsDto) {
    return this.paymentsService.updatePayments(id, params);
  }

  @Delete(':id')
  deletePayments(@Param('id') id: number) {
    return this.paymentsService.deletePayments(id);
  }
}
