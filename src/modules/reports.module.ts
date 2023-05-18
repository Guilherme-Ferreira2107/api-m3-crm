import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportsEntity } from '../entities/reports.entity';
import { ReportsController } from '../controllers/reports.controller';
import { ReportsService } from '../services/reports.service';

@Module({
  imports: [TypeOrmModule.forFeature([ReportsEntity])],
  controllers: [ReportsController],
  providers: [ReportsService],
})
export class ReportsModule {}
