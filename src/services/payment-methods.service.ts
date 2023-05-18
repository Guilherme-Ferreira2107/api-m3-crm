import { Injectable } from '@nestjs/common';

@Injectable()
export class PaymentMethodsService {
  //   private junoApi: JunoApi;

  constructor() {
    // this.junoApi = new JunoApi({
    //   privateToken: process.env.JUNO_PRIVATE_TOKEN,
    //   publicToken: process.env.JUNO_PUBLIC_TOKEN,
    //   environment: 'development', // Altere para 'production' em ambiente de produção
    // });
  }

  async createCharge(value: number, describe: string): Promise<string> {
    // const cobranca = await this.junoApi.cobrancas.create({
    //   charge: {
    //     description: descricao,
    //     amount: valor,
    //   },
    // });

    // console.log('cobranca: ', cobranca);
    // return cobranca.id;
    return '';
  }

  async getPaymentLink(chargeId: string): Promise<string> {
    // const cobranca = await this.junoApi.cobrancas.get(cobrancaId);

    // console.log('cobranca: ', cobranca)
    // return cobranca._links.checkout.href;
    return '';
  }
}
