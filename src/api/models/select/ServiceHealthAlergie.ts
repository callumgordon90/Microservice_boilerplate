import { Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { MedicalAlergy } from '../administration/MedicalAlergy';
import { Base } from '../Base';
import { ServiceUserHealthAnswer } from './ServiceUserHealthAnswer';

@Entity('select_service_health_alergies')
export class ServiceHealthAlergy extends Base {
  @ManyToOne(() => ServiceUserHealthAnswer, (serviceUserHealthAnswer) => serviceUserHealthAnswer.serviceHealthAlergy)
  @JoinColumn({ name: 'health_answer_id' })
  serviceUserHealthAnswer: ServiceUserHealthAnswer;

  @OneToMany(() => MedicalAlergy, (alergy) => alergy.container)
  alergies: MedicalAlergy[];
}
