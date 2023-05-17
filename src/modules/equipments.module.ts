import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquipmentsEntity } from '../entities/equipments.entity';
import { EquipmentsController } from '../controllers/equipments.controller';
import { EquipmentsService } from '../services/equipments.service';

@Module({
  imports: [TypeOrmModule.forFeature([EquipmentsEntity])],
  controllers: [EquipmentsController],
  providers: [EquipmentsService],
})
export class EquipmentsModule {}
