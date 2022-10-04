import { IsNotEmpty } from 'class-validator';
import { BeforeInsert, Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { CalendarEvent, LabourDocument, LabourImprovement, LabourPayroll, JobExpectation, LabourRelation } from '..';
import { User } from '../auth/User';
import { Base } from '../Base';

@Entity('carer_carers')
export class Carer extends Base {
  @Column({ type: 'varchar', nullable: true })
  whatsapp_phone: string;

  @Column({ type: 'varchar' })
  cv_file: string;

  @Column({ type: 'boolean' })
  driving_license: boolean;

  @OneToOne(() => User, (user) => user.carer, { eager: true, nullable: false })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToOne(() => JobExpectation, (job_expectation) => job_expectation.carer)
  job_expectation: JobExpectation;

  @OneToMany(() => LabourDocument, (document) => document.carer)
  documents: LabourDocument;

  @OneToMany(() => LabourImprovement, (improvement) => improvement.carer)
  labour_improvements: LabourImprovement;

  @OneToMany(() => LabourPayroll, (payrolls) => payrolls.labour_payrolls)
  carer: LabourPayroll;

  @OneToMany(() => CalendarEvent, (calendarEvent) => calendarEvent.carer)
  calendarEvents: CalendarEvent[];

  @OneToMany(() => LabourRelation, (labourRelation) => labourRelation.carer)
  labourRelation: LabourRelation[];
}
