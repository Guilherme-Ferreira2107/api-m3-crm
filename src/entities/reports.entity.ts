import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('reports')
export class ReportsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  reportType: string;

  @Column({ type: 'date' })
  creationDate: Date;

  @Column()
  appliedFilters: string;

  @Column()
  reportResults: string;
}
