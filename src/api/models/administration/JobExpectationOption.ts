import { Column, Entity, JoinColumn, ManyToOne } from "typeorm"
import { Base } from "../Base";
import { JobExpectationQuestion } from "./JobExpectationQuestion";

@Entity('admin_job_expectation_options')
export class JobExpectationOption extends Base {

    @Column({type: 'varchar'})
    answer_text: string;

    @ManyToOne(type => JobExpectationQuestion, jobExpectationQuestion => jobExpectationQuestion.options)
    @JoinColumn({name: 'question_id'})
    question: JobExpectationQuestion;

}
