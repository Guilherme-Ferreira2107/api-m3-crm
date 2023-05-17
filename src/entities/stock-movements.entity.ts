import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { EquipmentsEntity } from '../entities/equipments.entity';

@Entity('stock-movements')
export class StockMovementsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  equipmentId: string;

  @Column({ type: 'date' })
  dateMovement: Date;

  @Column()
  typeMovement: string;

  @Column()
  startLocation: string;

  @Column()
  finalLocation: string;

  @ManyToOne(() => EquipmentsEntity, (equipment) => equipment.movement)
  equipment: EquipmentsEntity;
}
