import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { User, SelectionProcess, Contract } from '..';
import { Base } from '../Base';

@Entity('emp_employees')
export class Employee extends Base {
  @Column({ type: 'int', nullable: true })
  holiday_used_days: number;

  @OneToOne(() => User, (user) => user.employee)
  @JoinColumn({ name: 'user' })
  user: User;

  @OneToMany(() => SelectionProcess, selectionProcess => selectionProcess.assignee)
  selectionProcesses: SelectionProcess[];

  @OneToMany(() => Contract, contract => contract.employee)
  contracts: Contract[];
}
