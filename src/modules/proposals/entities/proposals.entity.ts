import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { QuotationEntity } from '../../quotation/entities/quotation.entity';

@Entity('proposals')
export class ProposalsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  quotationId: number;

  @Column({ type: 'date' })
  dateProposal: Date;

  @Column()
  valueProposal: number;

  @Column()
  status: string;

  @ManyToOne(() => QuotationEntity, (item) => item.proposal)
  @JoinColumn({ name: 'quotation_id' })
  quotation: QuotationEntity;
}
