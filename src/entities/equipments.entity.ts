import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ContractEntity } from './contract.entity';

@Entity('equipments')
export class EquipmentsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  typeEquipment: string;

  @Column({ nullable: true })
  brandEquipment: string;

  @Column({ nullable: false })
  modelEquipment: string;

  @Column({ nullable: false })
  serieNumberEquipment: string;

  @Column({ nullable: false })
  statusEquipment: string;

  @OneToMany(() => ContractEntity, (contrato) => contrato.client)
  contract: ContractEntity[];
}
