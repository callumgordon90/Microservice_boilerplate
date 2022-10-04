import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { ContractType, Employee } from '..';
import { Base } from '../Base';

@Entity('emp_contracts')
export class Contract extends Base {
  @Column({ type: 'varchar', nullable: true })
  unique_id: string;

  @Column({ type: 'varchar', nullable: true })
  file: string;

  @Column({ type: 'varchar', nullable: true })
  working_hour: string;

  @Column({ type: 'date' })
  start_date: Date;

  @Column({ type: 'date', nullable: true })
  end_date: Date;

  @ManyToOne(() => ContractType, (contractType) => contractType.contracts)
  @JoinColumn({ name: 'type' })
  contractType: ContractType;

  @ManyToOne(() => Employee, employee => employee.contracts)
  @JoinColumn({name: 'employee'})
  employee: Employee[];
}
