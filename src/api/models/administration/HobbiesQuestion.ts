import { Column, Entity, OneToMany } from "typeorm"
import { Base } from "../Base";
import { HobbiesOption } from "./HobbiesOption";

@Entity('adm_hobbies_questions')
export class HobbiesQuestion extends Base {

    @Column({type: 'varchar'})
    question_text: string;

    @OneToMany(type => HobbiesOption, hobbiesOption => hobbiesOption.question)
    options: HobbiesOption[];

}
