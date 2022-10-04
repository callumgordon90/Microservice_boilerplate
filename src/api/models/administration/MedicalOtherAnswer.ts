import { Column, Entity, JoinColumn, ManyToOne } from "typeorm"
import { Base } from "../Base";
import { ServiceUserHealthAnswer } from "../select/ServiceUserHealthAnswer";
import { HealthClassif } from "./HealthClassif";
import { HealthStateQuestion } from "./HealthStateQuestion";

@Entity('adm_medical_other_answers')
export class MedicalOtherAnswer extends Base {

    @Column({type: 'varchar'})
    field_name: string;

    @Column({type: 'text'})
    answer: string;

    @ManyToOne(type => HealthClassif, healthClassif => healthClassif.otherAnswers)
    @JoinColumn({name: 'classif_id'})
    classification: HealthClassif;

    @ManyToOne(type => HealthStateQuestion, healthStateQuestion => healthStateQuestion.otherAnswers)
    @JoinColumn({name: 'question_id'})
    question: HealthStateQuestion;

    @ManyToOne(type => ServiceUserHealthAnswer, serviceUserHealthAnswer => serviceUserHealthAnswer.otherAnswers)
    @JoinColumn({name: 'answer_id'})
    healthAnswer: ServiceUserHealthAnswer;

}
