import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { ClientEntity } from './client.entity';
import { EquipmentsEntity } from './equipments.entity';

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

  @ManyToOne(() => ClientEntity, (client) => client.contract)
  client: ClientEntity;

  @ManyToOne(() => EquipmentsEntity, (equipment) => equipment.contract)
  equipment: EquipmentsEntity;
}
