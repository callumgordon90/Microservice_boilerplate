import { IsOptional } from 'class-validator';
import _ from 'lodash';
import {
  AfterLoad,
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  In,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm';
import {
  Family,
  FamilyRelation,
  LabourRelation,
  PaymentMethod,
  PersonalityTestAnswer,
  Service,
  User,
  WarmTalkAnswer,
  Pathology,
  MedicalAlergy,
  ServiceUserHealthAnswer,
  HealthClassif,
} from '..';
import db from '../../database/db';
import { Base } from '../Base';
import { ServiceBeneficiaries } from '../service/pivot/ServiceBeneficiaries';
import { FamilyMemberPathology } from './pivot/FamilyMemberPathology';

@Entity('family_members')
export class FamilyMember extends Base {
  @Column({ type: 'tinyint' })
  user_type: number;

  @Column({ type: 'varchar', nullable: true })
  mother_name: string;

  @Column({ type: 'varchar', nullable: true })
  father_name: string;

  @Column({ type: 'varchar', nullable: true })
  file: string;

  @Column({ type: 'double', nullable: true })
  weight: string;

  @Column({ type: 'varchar', nullable: true })
  dream_quality: string;

  @Column({ type: 'varchar', nullable: true })
  dependency_grade: string;

  @Column({ type: 'varchar', nullable: true })
  disability_grade: string;

  @OneToOne(() => User, (user) => user.familyMember)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => FamilyMember, (familyMember) => familyMember.membersRelated)
  @JoinColumn({ name: 'user_related' })
  userRelated: FamilyMember;

  @ManyToOne(() => FamilyRelation, (familyRelation) => familyRelation.familyMembers)
  @JoinColumn({ name: 'family_relation_id' })
  relation: FamilyRelation;

  @OneToMany(() => FamilyMember, (familyMember) => familyMember.userRelated)
  membersRelated: FamilyMember[];

  @OneToMany(() => FamilyMemberPathology, (familyMemberPathology) => familyMemberPathology.familyMember)
  familyMemberPathology: FamilyMemberPathology[];

  @OneToMany(() => PaymentMethod, (paymentMethod) => paymentMethod.familyMembers)
  paymentMethods: PaymentMethod[];

  @OneToMany(() => Service, (service) => service.employer)
  employerServices: Service[];

  @OneToMany(() => WarmTalkAnswer, (warmTalkAnswer) => warmTalkAnswer.beneficiary)
  warmTalkAnswers: WarmTalkAnswer[];

  @OneToMany(() => PersonalityTestAnswer, (personalityTestAnswer) => personalityTestAnswer.beneficiary)
  personalityTestAnswers: PersonalityTestAnswer[];

  @OneToMany(() => ServiceBeneficiaries, (serviceBeneficiaries) => serviceBeneficiaries.beneficiary)
  serviceBeneficiaries: ServiceBeneficiaries[];

  @ManyToMany(() => Family, (family) => family.members)
  families: Family[];

  @OneToMany(() => LabourRelation, (relation) => relation.employer)
  labourRelations: LabourRelation[];

  @OneToMany(() => ServiceUserHealthAnswer, (healthAnswer) => healthAnswer.beneficiary)
  healthAnswers: ServiceUserHealthAnswer[];

  @IsOptional()
  main_pathology: Pathology;

  // @IsOptional()
  // pathologies: Pathology[];

  @IsOptional()
  medical_alergies: MedicalAlergy[];

  @BeforeInsert()
  @BeforeUpdate()
  async setfamily(familyIds: number[]) {
    const families = await db.getRepository(Family).find({ where: { id: In(familyIds) } });
    this.families = families;
    await db.getRepository(Family).save(this);
  }

  @AfterLoad()
  async loadMainPathology() {
    const t = await db
      .getRepository(FamilyMemberPathology)
      .createQueryBuilder('fm')
      .leftJoinAndSelect('fm.pathology', 'pathology')
      .where('fm.familyMember.id = :id', { id: this.id })
      .where('fm.is_main_pathology = 1')
      .getOne();

    this.main_pathology = t.pathology;
  }

  //TODO Dejar la logica de Laravel y sacar esto como necesita en Node
  public getHealthNotes(service_id: number) {
    if (!this.serviceBeneficiaries) return null;

    return this.serviceBeneficiaries
      .find((sb) => sb.service.id == service_id)
      .service.health.serviceUserHealthAnswers.flatMap((h) => h.serviceHealthState)
      .filter((hs) => hs.value == 1)
      .map((hs) => hs.question)
      .map((q) => q.classification)
      .filter((classif, index, array) => array.indexOf(classif) == index)
      .map((classif) => classif.default_text);
  }
}
