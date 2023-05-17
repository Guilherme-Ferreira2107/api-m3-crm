import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuotationEntity } from '../entities/quotation.entity';
import { QuotationController } from '../controllers/quotation.controller';
import { QuotationService } from '../services/quotation.service';

@Module({
  imports: [TypeOrmModule.forFeature([QuotationEntity])],
  controllers: [QuotationController],
  providers: [QuotationService],
})
export class QuotationModule {}
