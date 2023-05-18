import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ClientEntity } from '../../client/entities/client.entity';
import { ProposalsEntity } from '../../proposals/entities/proposals.entity';

@Entity('quotation')
export class QuotationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  clientId: number;

  @Column({ type: 'date' })
  dateQuotation: Date;

  @Column()
  itens: string;

  @ManyToOne(() => ClientEntity, (item) => item.quotation)
  @JoinColumn({ name: 'client_id' })
  client: ClientEntity;

  @ManyToOne(() => ProposalsEntity, (item) => item.quotation)
  proposal: ProposalsEntity;
}
