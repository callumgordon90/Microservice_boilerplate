import { Column, Entity, JoinColumn, ManyToOne } from "typeorm";
import { Base } from "../Base";
import { FamilyMember } from "../family/FamilyMember";
import { ServicePersonalityTest } from "./ServicePersonalityTest";

@Entity("select_service_personality_test_answers")
export class PersonalityTestAnswer extends Base {
  @Column({ type: "tinyint", nullable: true })
  value: number;

  @ManyToOne(
    () => ServicePersonalityTest,
    (personalityTest) => personalityTest.personalityTestAnswers
  )
  @JoinColumn({ name: "test_id" })
  personalityTest: ServicePersonalityTest;

  @ManyToOne(() => FamilyMember, familyMember => familyMember.personalityTestAnswers)
  @JoinColumn({name: 'beneficiary_id'})
  beneficiary: FamilyMember;

}
