import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ClientEntity } from '../entities/client.entity';

@Entity('quotation')
export class QuotationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  clientId: number;

  @Column()
  dataQuotation: Date;

  @Column()
  totalValue: number;

  @ManyToOne(() => ClientEntity, (client) => client.quotation)
  client: ClientEntity;
}
