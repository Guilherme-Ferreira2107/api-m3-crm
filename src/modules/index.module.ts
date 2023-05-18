import { Module } from '@nestjs/common';
import { ClientModule } from './client/client.module';
import { ContratosModule } from './contract/contract.module';
import { QuotationModule } from './quotation/quotation.module';
import { EquipmentsModule } from './equipments/equipments.module';
import { StockMovementsModule } from './stock-movements/stock-movements.module';
import { BillingModule } from './billing/billing.module';
import { PaymentsModule } from './payments/payments.module';
import { SupportModule } from './support/support.module';
import { ProposalsModule } from './proposals/proposals.module';
import { ReportsModule } from './reports/reports.module';
import { MailsModule } from './mail/mail.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

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
    UsersModule,
    AuthModule,
  ],
})
export class CoreModule {}
