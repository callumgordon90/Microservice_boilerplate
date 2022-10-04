import { Column, Entity, OneToMany } from 'typeorm';
import { Base } from '../Base';
import { HealthStateQuestion } from './HealthStateQuestion';
import { MedicalOtherAnswer } from './MedicalOtherAnswer';

@Entity('adm_health_classifs')
export class HealthClassif extends Base {
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'text' })
  default_text: string;

  @OneToMany(() => HealthStateQuestion, (healthStateQuestion) => healthStateQuestion.classification)
  questions: HealthStateQuestion;

  @OneToMany(() => MedicalOtherAnswer, (medicalOtherAnswer) => medicalOtherAnswer.classification)
  otherAnswers: MedicalOtherAnswer[];
}
