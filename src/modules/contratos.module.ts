import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContratosEntity } from '../entities/contratos.entity';
import { ContratosController } from '../controllers/contratos.controller';
import { ContratosRepository } from '../repositories/contratos.repository';
import { ContratosService } from '../services/contratos.service';
import { ClientesModule } from './clientes.module';

@Module({
  imports: [TypeOrmModule.forFeature([ContratosEntity]), ClientesModule],
  controllers: [ContratosController],
  providers: [ContratosService, ContratosRepository],
})
export class ContratosModule {}
