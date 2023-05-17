import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ClientesEntity } from '../entities/clientes.entity';

@Entity()
export class CotacoesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  clienteId: number;

  @Column()
  dataCotacao: Date;

  @Column()
  valorTotal: number;

  @ManyToOne(() => ClientesEntity, (cliente) => cliente.cotacoes)
  cliente: ClientesEntity;
}
