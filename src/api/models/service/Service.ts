import { IsOptional } from 'class-validator';
import { AfterLoad, Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import {
  CarerJob,
  ContractType,
  FamilyMember,
  LabourContract,
  LabourRelation,
  ProcessType,
  SelectionProcess,
  ServiceAddress,
  ServicePersonalityTest,
  ServiceType,
  ServiceWarmTalk,
  User,
  ServiceProfilePreference,
  Address,
  ServiceSchedule,
  SelectServiceUserHealth,
  Family
} from '..';
import { Base } from '../Base';
import { ServiceBeneficiaries } from './pivot/ServiceBeneficiaries';

@Entity('services')
export class Service extends Base {

  static _NOT_STARTED = 0;
  static _ACTIVE = 1;
  static _INACTIVE = 2;
  static _PENDING_APPROVAL = 3;
  static _CANCELLED = 4;
  static _COMPLETED = 5;
  static _APPROVED = 6;
  static _REJECTED = 7;

  static get NOT_STARTED(): number {
    return this._NOT_STARTED;
  }
  static get ACTIVE(): number {
    return this._ACTIVE;
  }
  static get INACTIVE(): number {
    return this._INACTIVE;
  }
  static get PENDING_APPROVAL(): number {
    return this._PENDING_APPROVAL;
  }
  static get CANCELLED(): number {
    return this._CANCELLED;
  }
  static get COMPLETED(): number {
    return this._COMPLETED;
  }
  static get APPROVED(): number {
    return this._APPROVED;
  }
  static get REJECTED(): number {
    return this._REJECTED;
  }

  @Column({ type: 'tinyint' })
  status: number;

  @Column({ type: 'date', nullable: true })
  deadline: Date;

  @Column({ type: 'int' })
  current_step: number;

  @OneToOne(() => SelectionProcess, (selectionProcess) => selectionProcess.service)
  selectionProcess: SelectionProcess;

  @ManyToOne(() => ProcessType, (processType) => processType.services)
  @JoinColumn({ name: 'process_type' })
  processType: ProcessType;

  @ManyToOne(() => ServiceType, (serviceType) => serviceType.services, { eager: true })
  @JoinColumn({ name: 'service_type' })
  serviceType: ServiceType;

  @ManyToOne(() => FamilyMember, (familyMember) => familyMember.employerServices)
  @JoinColumn({ name: 'employer_id' })
  employer: FamilyMember;

  @ManyToOne(() => User, (user) => user.createdServices)
  @JoinColumn({ name: 'created_by' })
  createdBy: User;

  @Column({ name: "is_sad", type: "tinyint", default: 0 })
  is_sad: string;

  @OneToMany(() => ServiceBeneficiaries, serviceBeneficiaries => serviceBeneficiaries.service)
  serviceBeneficiaries: ServiceBeneficiaries[];

  @ManyToOne(() => ContractType, (contractType) => contractType.services)
  @JoinColumn({ name: 'contract_type' })
  contractType: ContractType;

  @ManyToOne(() => Family, family => family.services)
  @JoinColumn({ name: 'family_id' })
  family: Family;

  @OneToMany(() => LabourRelation, (labourRelation) => labourRelation.service)
  labourRelations: LabourRelation[];

  @OneToMany(() => LabourContract, (labourContract) => labourContract.service)
  labourContracts: LabourContract[];

  @OneToOne(() => CarerJob, (carer_job) => carer_job.service, { createForeignKeyConstraints: true, nullable: false })
  carerJob: CarerJob;

  @OneToMany(() => LabourContract, (contracts) => contracts.service)
  labour_contracts: Service;

  @OneToMany(() => ServiceWarmTalk, (serviceWarmTalk) => serviceWarmTalk.service)
  warmTalks: ServiceWarmTalk[];

  @OneToMany(() => ServiceAddress, (serviceAddress) => serviceAddress.service)
  addresses: ServiceAddress[];

  @OneToMany(() => ServicePersonalityTest, (personalityTest) => personalityTest.service)
  personalityTests: ServicePersonalityTest[];

  @OneToOne(() => ServiceProfilePreference, profilePreference => profilePreference.service)
  profilePreferences: ServiceProfilePreference;

  @OneToOne(() => ServiceSchedule, schedule => schedule.service)
  schedule: ServiceSchedule;

  @OneToOne(() => SelectServiceUserHealth, userHealth => userHealth.service)
  health: SelectServiceUserHealth;
}
