import { Column, Entity, OneToMany } from "typeorm"
import { Base } from "../Base";
import { PersonalityTestQuestion } from "./PersonalityTestQuestion";

@Entity('adm_personality_test_question_groups')
export class PersonalityTestQuestionGroup extends Base {

    @Column({type: 'varchar'})
    name: string;

    @OneToMany(type => PersonalityTestQuestion, personalityTestQuestion => personalityTestQuestion.questionGroup)
    questions: PersonalityTestQuestion[];

}
