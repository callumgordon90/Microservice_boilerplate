import { Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { ServiceUserHealthAnswer } from './ServiceUserHealthAnswer';
import { Base } from '../Base';
import { Service } from '../service/Service';

@Entity('select_service_user_healths')
export class SelectServiceUserHealth extends Base {
  @OneToMany(() => ServiceUserHealthAnswer, (serviceUserHealthAnswer) => serviceUserHealthAnswer.serviceUserHealth)
  serviceUserHealthAnswers: ServiceUserHealthAnswer[];

  @OneToOne(() => Service, service => service.health)
  @JoinColumn({ name: 'service_id' })
  service: Service;
}
