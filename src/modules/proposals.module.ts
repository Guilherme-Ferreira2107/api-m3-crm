import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProposalsEntity } from '../entities/proposals.entity';
import { ProposalsController } from '../controllers/proposals.controller';
import { ProposalsService } from '../services/proposals.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProposalsEntity])],
  controllers: [ProposalsController],
  providers: [ProposalsService],
})
export class ProposalsModule {}
