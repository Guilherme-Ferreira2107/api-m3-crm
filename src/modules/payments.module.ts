import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PaymentsEntity } from '../entities/payments.entity';
import { PaymentsController } from '../controllers/payments.controller';
import { PaymentsService } from '../services/payments.service';

@Module({
  imports: [TypeOrmModule.forFeature([PaymentsEntity])],
  controllers: [PaymentsController],
  providers: [PaymentsService],
})
export class PaymentsModule {}
