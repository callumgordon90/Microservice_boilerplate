import { Column, Entity, OneToMany } from "typeorm"
import { Base } from "../Base";
import { WarmTalkOption } from "./WarmTalkOption";

@Entity('adm_warm_talk_questions')
export class WarmTalkQuestion extends Base{

    @Column({type: 'varchar'})
    question_text: number;

    @Column({type: 'varchar', nullable: true})
    section: string;

    @Column({type: 'tinyint'})
    type: number;

    @OneToMany(type => WarmTalkOption, warmTalkOption => warmTalkOption.question)
    options: WarmTalkOption[];

}
