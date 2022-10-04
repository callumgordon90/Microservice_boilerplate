import { Entity, JoinColumn, OneToOne } from 'typeorm';
import { Base } from '../Base';
import { Carer } from './Carer';

@Entity('carer_job_expectations')
export class JobExpectation extends Base {
  @OneToOne(() => Carer, (carer) => carer.job_expectation)
  @JoinColumn({ name: 'carer_id' })
  carer: Carer;
}
