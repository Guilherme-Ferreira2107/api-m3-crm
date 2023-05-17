import { Module } from '@nestjs/common';
import { ClientModule } from './client.module';
import { ContratosModule } from './contract.module';
import { QuotationModule } from './quotation.module';
import { EquipmentsModule } from './equipments.module';
import { StockMovementsModule } from './stock-movements.module';

@Module({
  imports: [
    ClientModule,
    ContratosModule,
    QuotationModule,
    EquipmentsModule,
    StockMovementsModule,
  ],
})
export class CoreModule {}
