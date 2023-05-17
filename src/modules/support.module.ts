import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupportEntity } from '../entities/support.entity';
import { SupportController } from '../controllers/support.controller';
import { SupportService } from '../services/support.service';

@Module({
  imports: [TypeOrmModule.forFeature([SupportEntity])],
  controllers: [SupportController],
  providers: [SupportService],
})
export class SupportModule {}
