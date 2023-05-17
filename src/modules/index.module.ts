import { Module } from '@nestjs/common';
import { ClientModule } from './client.module';
import { ContratosModule } from './contract.module';
import { QuotationModule } from './quotation.module';
import { EquipmentsModule } from './equipments.module';

@Module({
  imports: [ClientModule, ContratosModule, QuotationModule, EquipmentsModule],
})
export class CoreModule {}
