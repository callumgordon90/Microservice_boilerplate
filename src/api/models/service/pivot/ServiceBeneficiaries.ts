import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Timestamp,
  UpdateDateColumn,
} from 'typeorm';
import { FamilyMember } from '../../family/FamilyMember';
import { Service } from '../Service';

@Entity('services_beneficiaries')
export class ServiceBeneficiaries {
  @PrimaryGeneratedColumn({ unsigned: true, type: 'bigint' })
  id: number;

  @CreateDateColumn()
  created_at: Timestamp;

  @UpdateDateColumn()
  updated_at: Timestamp;

  @ManyToOne(() => Service, (service) => service.serviceBeneficiaries)
  @JoinColumn({ name: 'service_id' })
  service: Service;

  @ManyToOne(() => FamilyMember, (familyMember) => familyMember.serviceBeneficiaries)
  @JoinColumn({ name: 'beneficiarie_id' })
  beneficiary: FamilyMember;
}
