import { Column, Entity, JoinColumn, ManyToOne } from "typeorm"
import { Base } from "../Base";
import { PersonalityTestQuestionGroup } from "./PersonalityTestQuestionGroup";

@Entity('adm_personality_test_questions')
export class PersonalityTestQuestion extends Base {

    @Column({type: 'varchar'})
    question_text: string;

    @ManyToOne(type => PersonalityTestQuestionGroup, personalityTestQuestionGroup => personalityTestQuestionGroup.questions)
    @JoinColumn({name: 'question_group_id'})
    questionGroup: PersonalityTestQuestionGroup;

}
