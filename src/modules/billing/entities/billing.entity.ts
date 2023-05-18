import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ContractEntity } from '../../contract/entities/contract.entity';

@Entity('billing')
export class BillingEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  contractId: number;

  @Column({ type: 'date' })
  dateBilling: Date;

  @Column()
  billingValue: number;

  @ManyToOne(() => ContractEntity, (contract) => contract.billing)
  @JoinColumn({ name: 'contract_id' })
  contract: ContractEntity;
}
