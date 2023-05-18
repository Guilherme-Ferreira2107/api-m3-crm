import { Module } from '@nestjs/common';
import { ClientModule } from './client.module';
import { ContratosModule } from './contract.module';
import { QuotationModule } from './quotation.module';
import { EquipmentsModule } from './equipments.module';
import { StockMovementsModule } from './stock-movements.module';
import { BillingModule } from './billing.module';
import { PaymentsModule } from './payments.module';
import { SupportModule } from './support.module';
import { ProposalsModule } from './proposals.module';
import { ReportsModule } from './reports.module';
import { MailsModule } from './mail.module';

@Module({
  imports: [
    ClientModule,
    ContratosModule,
    QuotationModule,
    EquipmentsModule,
    StockMovementsModule,
    BillingModule,
    PaymentsModule,
    SupportModule,
    ProposalsModule,
    ReportsModule,
    MailsModule,
  ],
})
export class CoreModule {}
