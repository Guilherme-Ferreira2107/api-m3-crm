import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ContractEntity } from './contract.entity';
import { QuotationEntity } from './quotation.entity';

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
  @OneToMany(() => ContractEntity, (contrato) => contrato.client)
  contract: ContractEntity[];

  @OneToMany(() => QuotationEntity, (cotacao) => cotacao.client)
  quotation: QuotationEntity[];

  // Outros campos da entidade...

  // Outros relacionamentos com outras entidades...
}
