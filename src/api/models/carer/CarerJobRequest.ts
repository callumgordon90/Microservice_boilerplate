import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import db from '../../database/db';
import { Address } from '../auth/Address';
import { Base } from '../Base';
import { CarerJob, Pathology, Carer } from '..';
import { CarerJobRequestExperience } from './Pivot/CarerJobRequestExperience';

@Entity('carer_job_requests')
export class CarerJobRequest extends Base {
  static _NOT_SENT_STATUS = 0;
  static _UNDER_REVISION_STATUS = 1;
  static _HR_INTERVIEW_STATUS = 2;
  static _PROFILE_SUBMITTED_STATUS = 3;
  static _FAMILY_INTERVIEW_STATUS = 4;
  static _PROCESS_FINISHED_STATUS = 5;
  static _CHAMBER_STATUS = 0;

  static _PROFILE_ACTIVE_STATUS = 1;
  static _PROFILE_APPROVED_STATUS = 5;
  static _PROFILE_REJECTED_STATUS = 4;
  static _PROFILE_CHAMBER = 6;
  static _PROFILE_CHAMBER_REJECTED = 7;
  static _PROCESS_FINISHED = 0;

  static get NOT_SENT_STATUS() {
    return this._NOT_SENT_STATUS;
  }

  static get CHAMBER_STATUS() {
    return this._CHAMBER_STATUS;
  }

  static get PROCESS_FINISHED_STATUS() {
    return this._PROCESS_FINISHED_STATUS;
  }

  static get FAMILY_INTERVIEW_STATUS() {
    return this._FAMILY_INTERVIEW_STATUS;
  }

  static get PROFILE_SUBMITTED_STATUS() {
    return this._PROFILE_SUBMITTED_STATUS;
  }

  static get HR_INTERVIEW_STATUS() {
    return this._HR_INTERVIEW_STATUS;
  }

  static get UNDER_REVISION_STATUS() {
    return this._UNDER_REVISION_STATUS;
  }

  static get PROFILE_ACTIVE_STATUS() {
    return this._PROFILE_ACTIVE_STATUS;
  }

  static get PROFILE_APPROVED_STATUS() {
    return this._PROFILE_APPROVED_STATUS;
  }

  static get PROFILE_REJECTED_STATUS() {
    return this._PROFILE_REJECTED_STATUS;
  }

  static get PROFILE_CHAMBER() {
    return this._PROFILE_CHAMBER;
  }

  static get PROFILE_CHAMBER_REJECTED() {
    return this._PROFILE_CHAMBER_REJECTED;
  }

  static get PROCESS_FINISHED() {
    return this._PROCESS_FINISHED;
  }

  @Column({ type: 'varchar' })
  week_hours: string;

  @Column({ type: 'tinyint', default: 0, nullable: true, name: 'hasPathologyExperience' })
  hasPathologyExperience: number;

  @Column({ type: 'varchar', default: 0, nullable: true, name: 'experience_years' })
  experienceYears: string;

  @Column({ type: 'tinyint', default: 0, nullable: false })
  status: number;

  @Column({ type: 'tinyint', nullable: false, name: 'current_step' })
  currentStep: number;

  @ManyToOne(() => Pathology, pathology => pathology.carerJobRequests, { eager: true })
  @JoinColumn({ name: 'main_pathology' })
  pathology: Pathology;

  @ManyToOne(() => Carer, (carer) => carer.job_expectation, { eager: true })
  @JoinColumn({ name: 'carer_id' })
  carer: Carer;

  @ManyToOne(() => CarerJob, (carerJob) => carerJob.carerJobRequests)
  @JoinColumn({ name: 'job_id' })
  carerJob: CarerJob;

  @ManyToOne(() => Address, (address) => address.job_location)
  @JoinColumn({ name: 'job_location' })
  address: Address;

  @OneToMany(() => CarerJobRequestExperience, (carerJobRequestExperience) => carerJobRequestExperience.jobRequest)
  jobRequestExperiences: CarerJobRequestExperience[];

  get jobLocation() {
    if (!this.address) return null;
    return this.address;
  }
}
