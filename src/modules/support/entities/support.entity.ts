import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { ContractEntity } from '../../contract/entities/contract.entity';

@Entity('support')
export class SupportEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  contractId: number;

  @Column({ type: 'date' })
  dateTicket: Date;

  @Column()
  describe: string;

  @Column()
  status: string;

  @ManyToOne(() => ContractEntity, (item) => item.support)
  @JoinColumn({ name: 'contract_id' })
  contract: ContractEntity;
}
