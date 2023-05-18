import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ContractEntity } from '../../contract/entities/contract.entity';
import { QuotationEntity } from '../../quotation/entities/quotation.entity';

@Entity('client')
export class ClientEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: false })
  phone: string;

  // Relacionamento com ContractEntity (One-to-Many)
  @OneToMany(() => ContractEntity, (contract) => contract.client)
  contract: ContractEntity[];

  @OneToMany(() => QuotationEntity, (quotation) => quotation.client)
  quotation: QuotationEntity[];
}
