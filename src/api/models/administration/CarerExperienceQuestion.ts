import { Column, Entity, JoinColumn, ManyToOne } from "typeorm"
import { Base } from "../Base";
import { Pathology } from "./Pathology";

@Entity('adm_carer_experience_questions')
export class CarerExperienceQuestion extends Base {

    @Column({type: 'tinyint'})
    is_active: number;

    @Column({type: 'varchar'})
    question_text: string;

    @Column({type: 'tinyint'})
    type: number;

    @Column({type: 'text'})
    default_description: string;

    @ManyToOne(type => Pathology, pathology => pathology.carerExperienceQuestions)
    @JoinColumn({name: 'pathology_id'})
    pathology: Pathology;

}
