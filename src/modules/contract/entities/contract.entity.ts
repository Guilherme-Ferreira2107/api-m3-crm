import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { BillingEntity } from '../../billing/entities/billing.entity';
import { ClientEntity } from '../../client/entities/client.entity';
import { EquipmentsEntity } from '../../equipments/entities/equipments.entity';
import { PaymentsEntity } from '../../payments/entities/payments.entity';
import { SupportEntity } from '../../support/entities/support.entity';

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

  @ManyToOne(() => ClientEntity, (item) => item.contract)
  @JoinColumn({ name: 'client_id' })
  client: ClientEntity;

  @ManyToOne(() => EquipmentsEntity, (item) => item.contract)
  @JoinColumn({ name: 'equipments_id' })
  equipment: EquipmentsEntity;

  @ManyToOne(() => BillingEntity, (item) => item.contract)
  billing: BillingEntity;

  @ManyToOne(() => PaymentsEntity, (item) => item.contract)
  payments: PaymentsEntity;

  @ManyToOne(() => SupportEntity, (item) => item.contract)
  support: SupportEntity;
}
