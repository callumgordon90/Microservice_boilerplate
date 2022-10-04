import { Column, Entity, JoinColumn, ManyToOne } from "typeorm"
import { Base } from "../Base";
import { Carer } from "./Carer";

@Entity('carer_experience_answers')
export class ContactExperienceAnswer extends Base {

    @Column({type: 'date'})
    start_date: Date;

    @Column({type: 'date'})
    end_date: Date;

    @Column({type: 'text', nullable: true})
    comments: string;

    @Column({type: 'tinyint', nullable: true})
    is_most_important: number;

    @Column({type: 'text', nullable: true})
    most_important_comments: string;

    // @ManyToOne(() => Carer, carer => carer.experienceAnswers)
    // @JoinColumn({name: 'carer_id'})
    // carer

}
