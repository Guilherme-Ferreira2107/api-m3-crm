import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ContractEntity } from '../entities/contract.entity';

@Entity('payments')
export class PaymentsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  contractId: number;

  @Column({ type: 'date' })
  datePayments: Date;

  @Column()
  paymentsValue: number;

  @ManyToOne(() => ContractEntity, (contract) => contract.payments)
  @JoinColumn({ name: 'contract_id' })
  contract: ContractEntity;
}
