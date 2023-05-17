import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ClientEntity } from './client.entity';

@Entity('contract')
export class ContractEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  describe: string;

  @Column({ type: 'date' })
  dateStart: Date;

  @Column({ type: 'date' })
  dateFinal: Date;

  // Relacionamento com ClientesEntity (Many-to-One)
  @ManyToOne(() => ClientEntity, (client) => client.contract)
  client: ClientEntity;

  // Outros campos da entidade...

  // Outros relacionamentos com outras entidades...
}
