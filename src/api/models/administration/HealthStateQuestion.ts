import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm"
import { Base } from "../Base";
import { ServiceHealthState } from "../select/ServiceHealthState";
import { HealthClassif } from "./HealthClassif";
import { MedicalOtherAnswer } from "./MedicalOtherAnswer";

@Entity('adm_health_state_questions')
export class HealthStateQuestion extends Base {

    @Column({type: 'tinyint'})
    type: number;

    @Column({type: 'varchar'})
    text: string;

    @ManyToOne(() => HealthClassif, healthclassif => healthclassif.questions)
    @JoinColumn({name: 'classif_id'})
    classification: HealthClassif;

    @OneToMany(() => MedicalOtherAnswer, medicalOtherAnswer => medicalOtherAnswer.question)
    otherAnswers: MedicalOtherAnswer[];

    @OneToMany(() => ServiceHealthState, healthState => healthState.question)
    healthStates: ServiceHealthState[];

}
