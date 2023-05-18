import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BillingEntity } from './entities/billing.entity';
import { BillingService } from './billing.service';
import { BillingController } from './billing.controller';

@Module({
  imports: [TypeOrmModule.forFeature([BillingEntity])],
  controllers: [BillingController],
  providers: [BillingService],
})
export class BillingModule {}
