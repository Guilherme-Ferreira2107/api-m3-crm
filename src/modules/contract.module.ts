import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContractEntity } from '../entities/contract.entity';
import { ContractController } from '../controllers/contract.controller';
import { ContractService } from '../services/contract.service';
import { ClientModule } from './client.module';

@Module({
  imports: [TypeOrmModule.forFeature([ContractEntity]), ClientModule],
  controllers: [ContractController],
  providers: [ContractService],
})
export class ContratosModule {}
