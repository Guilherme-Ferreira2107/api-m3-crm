import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { BillingEntity } from './billing.entity';
import { ClientEntity } from './client.entity';
import { EquipmentsEntity } from './equipments.entity';

@Entity('contract')
export class ContractEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  clientId: number;

  @Column()
  equipmentId: number;

  @Column()
  describe: string;

  @Column({ type: 'date' })
  dateStart: Date;

  @Column({ type: 'date' })
  dateFinal: Date;

  @ManyToOne(() => ClientEntity, (client) => client.contract)
  @JoinColumn({ name: 'client_id' })
  client: ClientEntity;

  @ManyToOne(() => EquipmentsEntity, (equipment) => equipment.contract)
  @JoinColumn({ name: 'equipments_id' })
  equipment: EquipmentsEntity;

  @ManyToOne(() => BillingEntity, (billing) => billing.contract)
  billing: BillingEntity;
}
