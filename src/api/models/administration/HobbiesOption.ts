import { Column, Entity, JoinColumn, ManyToOne } from "typeorm"
import { Base } from "../Base";
import { HobbiesQuestion } from "./HobbiesQuestion";

@Entity('adm_hobbies_options')
export class HobbiesOption extends Base {

    @Column({type: 'varchar'})
    text: string;

    @ManyToOne(type => HobbiesQuestion, hobbiesQuestion => hobbiesQuestion.options)
    @JoinColumn({name: 'question_id'})
    question: HobbiesQuestion;

}
