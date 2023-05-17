import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ClientesEntity } from './clientes.entity';

@Entity('contratos')
export class ContratosEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  descricao: string;

  @Column({ type: 'date' })
  dataInicio: Date;

  @Column({ type: 'date' })
  dataFim: Date;

  // Relacionamento com ClientesEntity (Many-to-One)
  @ManyToOne(() => ClientesEntity, (cliente) => cliente.contratos)
  cliente: ClientesEntity;

  // Outros campos da entidade...

  // Outros relacionamentos com outras entidades...
}
