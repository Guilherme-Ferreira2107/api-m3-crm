import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BillingEntity } from '../entities/billing.entity';
import { BillingController } from '../controllers/billing.controller';
import { BillingService } from '../services/billing.service';

@Module({
  imports: [TypeOrmModule.forFeature([BillingEntity])],
  controllers: [BillingController],
  providers: [BillingService],
})
export class BillingModule {}
