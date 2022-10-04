import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm';
import { CarerJobRequest, Pathology } from '../..';

@Entity('carer_job_request_experiences')
export class CarerJobRequestExperience {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: number;

  @Column({ type: 'text' })
  description: string;

  @CreateDateColumn()
  created_at: Timestamp;

  @UpdateDateColumn()
  updated_at: Timestamp;

  @ManyToOne((type) => CarerJobRequest, (carerJobRequest) => carerJobRequest.jobRequestExperiences)
  @JoinColumn({ name: 'job_request_id' })
  jobRequest: CarerJobRequest;

  @ManyToOne((type) => Pathology, (pathology) => pathology.jobRequestExperiences)
  @JoinColumn({ name: 'pathology_id' })
  pathology: Pathology;
}
