import { Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { Base } from "../Base";
import { ServiceHealthState } from "./ServiceHealthState";
import { ServiceHealthAlergy } from "./ServiceHealthAlergie";
import { SelectServiceUserHealth } from "./ServiceUserHealth";
import { MedicalOtherAnswer } from "../administration/MedicalOtherAnswer";
import { FamilyMember } from "../family/FamilyMember";

@Entity("select_service_user_health_answers")
export class ServiceUserHealthAnswer extends Base {
  
  @OneToMany(() => ServiceHealthState, (serviceHealthState) => serviceHealthState)
  serviceHealthState: ServiceHealthState[];

  @OneToMany(
    () => ServiceHealthAlergy,
    (serviceHealthAlergy) => serviceHealthAlergy.serviceUserHealthAnswer
  )
  serviceHealthAlergy: ServiceHealthAlergy[];

  @ManyToOne(
    () => SelectServiceUserHealth,
    (serviceUserHealth) => serviceUserHealth.serviceUserHealthAnswers
  )
  @JoinColumn({ name: "user_health_id" })
  serviceUserHealth: SelectServiceUserHealth;

  @OneToMany(type => MedicalOtherAnswer, medicalOtherAnswer => medicalOtherAnswer.healthAnswer)
  otherAnswers: MedicalOtherAnswer[];

  @ManyToOne(() => FamilyMember, familyMember => familyMember.healthAnswers)
  @JoinColumn({ name: 'beneficiary_id' })
  beneficiary: FamilyMember;
}
