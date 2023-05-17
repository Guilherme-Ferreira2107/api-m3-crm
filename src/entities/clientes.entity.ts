import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { ContratosEntity } from './contratos.entity';
import { CotacoesEntity } from './cotacoes.entity';

@Entity('clientes')
export class ClientesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  nome: string;

  @Column({ nullable: true })
  email: string;

  @Column({ nullable: false })
  telefone: string;

  // Relacionamento com ContratosEntity (One-to-Many)
  @OneToMany(() => ContratosEntity, (contrato) => contrato.cliente)
  contratos: ContratosEntity[];

  @OneToMany(() => CotacoesEntity, (cotacao) => cotacao.cliente)
  cotacoes: CotacoesEntity[];

  // Outros campos da entidade...

  // Outros relacionamentos com outras entidades...
}
