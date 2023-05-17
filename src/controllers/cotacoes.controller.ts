import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CotacoesService } from '../services/cotacoes.service';
import { CotacoesDto } from '../dtos/cotacoes.dto';

@Controller('cotacoes')
export class CotacoesController {
  constructor(private readonly cotacoesService: CotacoesService) {}

  @Get()
  getAllCotacoes() {
    return this.cotacoesService.getAllCotacoes();
  }

  @Get(':id')
  getCotacoesById(@Param('id') id: number) {
    return this.cotacoesService.getCotacoesById(id);
  }

  @Post()
  createCotacoes(@Body() cotacoesDto: CotacoesDto) {
    return this.cotacoesService.createCotacoes(cotacoesDto);
  }

  @Put(':id')
  updateCotacoes(@Param('id') id: number, @Body() cotacoesDto: CotacoesDto) {
    return this.cotacoesService.updateCotacoes(id, cotacoesDto);
  }

  @Delete(':id')
  deleteCotacoes(@Param('id') id: number) {
    return this.cotacoesService.deleteCotacoes(id);
  }
}
