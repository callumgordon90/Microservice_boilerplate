import { Entity, JoinColumn, ManyToOne } from "typeorm"
import { Base } from "../Base";
import { FamilyMember } from "../family/FamilyMember";

@Entity('adm_warm_talk_answers')
export class WarmTalkAnswer extends Base {

    @ManyToOne(type => FamilyMember, familyMember => familyMember.warmTalkAnswers)
    @JoinColumn({name: 'beneficiary_id'})
    beneficiary: FamilyMember;

}
