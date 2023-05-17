import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { SupportDto } from '../dtos/support.dto';
import { SupportService } from '../services/support.service';

@Controller('support')
export class SupportController {
  constructor(private readonly supportService: SupportService) {}

  @Get()
  getAllSupport() {
    return this.supportService.getAllSupport();
  }

  @Get(':id')
  getSupportById(@Param('id') id: number) {
    return this.supportService.getSupportById(id);
  }

  @Post()
  createSupport(@Body() params: SupportDto) {
    return this.supportService.createSupport(params);
  }

  @Put(':id')
  updateSupport(@Param('id') id: number, @Body() params: SupportDto) {
    return this.supportService.updateSupport(id, params);
  }

  @Delete(':id')
  deleteSupport(@Param('id') id: number) {
    return this.supportService.deleteSupport(id);
  }
}
