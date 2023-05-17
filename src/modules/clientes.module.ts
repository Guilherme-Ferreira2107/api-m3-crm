import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientesEntity } from '../entities/clientes.entity';
import { ClientesController } from '../controllers/clientes.controller';
import { ClientesService } from '../services/clientes.service';

@Module({
  imports: [TypeOrmModule.forFeature([ClientesEntity])],
  controllers: [ClientesController],
  providers: [ClientesService],
})
export class ClientesModule {}
