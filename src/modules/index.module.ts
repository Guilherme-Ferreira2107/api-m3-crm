import { Module } from '@nestjs/common';
import { ClientModule } from './client.module';
import { ContratosModule } from './contract.module';
import { QuotationModule } from './quotation.module';

@Module({
  imports: [ClientModule, ContratosModule, QuotationModule],
})
export class CoreModule {}
