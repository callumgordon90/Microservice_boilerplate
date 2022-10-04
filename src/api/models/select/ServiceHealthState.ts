import { Column, Entity, JoinColumn, ManyToOne } from "typeorm"
import { HealthStateQuestion } from "../administration/HealthStateQuestion";
import { Base } from "../Base";
import { ServiceUserHealthAnswer } from "./ServiceUserHealthAnswer";

@Entity("select_service_health_states")
export class ServiceHealthState extends Base {

    @Column({ type: "tinyint", nullable: true, default: 0 })
    value: number;

    @ManyToOne(() => ServiceUserHealthAnswer, (serviceUserHealthAnswer) => serviceUserHealthAnswer.serviceHealthState)
    @JoinColumn({ name: 'answer_id' })
    serviceUserHealthAnswer: ServiceUserHealthAnswer

    @ManyToOne(() => HealthStateQuestion, question => question.healthStates)
    @JoinColumn({ name: 'question_id' })
    question: HealthStateQuestion;

}
