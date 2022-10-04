import { Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Base } from '../Base';
import { Service } from '../service/Service';
import { PersonalityTestAnswer } from './PersonalityTestAnswer';

@Entity('select_service_personality_tests')
export class ServicePersonalityTest extends Base {
  @OneToMany(() => PersonalityTestAnswer, (personalityTestAnswer) => personalityTestAnswer.personalityTest)
  personalityTestAnswers: PersonalityTestAnswer[];

  @ManyToOne(() => Service, (service) => service.personalityTests)
  @JoinColumn({ name: 'service_id' })
  service: Service;
}
