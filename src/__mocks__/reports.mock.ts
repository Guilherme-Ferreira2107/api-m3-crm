import { ReportsDto } from '../modules/reports/dtos/reports.dto';

export const ReportsMock: ReportsDto = {
  reportType: 'Relatório de Vendas',
  creationDate: new Date('2023-05-19'),
  appliedFilters: 'Filtros de região: Brasil, Período: Maio 2023',
  reportResults: 'Resultados do relatório de vendas',
};
