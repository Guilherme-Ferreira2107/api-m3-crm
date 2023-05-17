import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CotacoesEntity } from '../entities/cotacoes.entity';
import { CotacoesController } from '../controllers/cotacoes.controller';
import { CotacoesRepository } from '../repositories/cotacoes.repository';
import { CotacoesService } from '../services/cotacoes.service';

@Module({
  imports: [TypeOrmModule.forFeature([CotacoesEntity])],
  controllers: [CotacoesController],
  providers: [CotacoesService, CotacoesRepository],
})
export class CotacoesModule {}
