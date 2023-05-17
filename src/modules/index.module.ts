import { Module } from '@nestjs/common';
import { ClientesModule } from './clientes.module';
import { ContratosModule } from './contratos.module';
import { CotacoesModule } from './cotacoes.module';

@Module({
  imports: [ClientesModule, ContratosModule, CotacoesModule],
})
export class CoreModule {}
