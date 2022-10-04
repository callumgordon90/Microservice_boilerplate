import { Column, Entity, JoinColumn, ManyToOne } from "typeorm"
import { Base } from "../Base";
import { WarmTalkQuestion } from "./WarmTalkQuestion";

@Entity('adm_warm_talk_options')
export class WarmTalkOption extends Base {

    @Column({type: 'text'})
    text: string;

    @Column({type: 'tinyint', nullable: true})
    binary_value: number;

    @ManyToOne(type => WarmTalkQuestion, warmTalkQuestion => warmTalkQuestion.options)
    @JoinColumn({name: 'question_id'})
    question: WarmTalkQuestion;

}
