import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ClientEntity } from '../entities/client.entity';

@Entity('quotation')
export class QuotationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  clientId: number;

  @Column()
  dateQuotation: Date;

  @Column()
  itens: string;

  @ManyToOne(() => ClientEntity, (client) => client.quotation)
  @JoinColumn({ name: 'cliente_id' })
  client: ClientEntity;
}
