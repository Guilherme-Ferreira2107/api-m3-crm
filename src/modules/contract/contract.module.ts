import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContractEntity } from './entities/contract.entity';
import { ContractController } from './contract.controller';
import { ContractService } from './contract.service';
import { ClientModule } from '../client/client.module';

@Module({
  imports: [TypeOrmModule.forFeature([ContractEntity]), ClientModule],
  controllers: [ContractController],
  providers: [ContractService],
})
export class ContratosModule {}
