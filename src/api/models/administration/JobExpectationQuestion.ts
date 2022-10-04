import { Column, Entity, OneToMany } from "typeorm"
import { Base } from "../Base";
import { JobExpectationOption } from "./JobExpectationOption";

@Entity('admin_job_expectation_questions')
export class JobExpectationQuestion extends Base {

    @Column({type: 'varchar'})
    question_text: string;

    @Column({type: 'tinyint'})
    type: number;

    @Column({type: 'varchar', nullable: true})
    answer_text: string;

    @Column({type: 'tinyint'})
    is_active: number;

    @OneToMany(type => JobExpectationOption, jobExpectationOption => jobExpectationOption.question)
    options: JobExpectationOption[];

}
