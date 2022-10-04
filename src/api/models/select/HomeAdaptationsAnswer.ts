import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { HomeAdaptation, HomeInformation } from '..';
import { Base } from '../Base';

@Entity('select_home_adaptations_answers')
export class HomeAdaptationsAnswer extends Base {
  @Column({ type: 'tinyint' })
  answer: number;

  @ManyToOne(() => HomeAdaptation, (homeAdaptation) => homeAdaptation.homeAdaptationAnswers)
  @JoinColumn({ name: 'home_adaptation_id' })
  homeAdaptation: HomeAdaptation;

  @ManyToOne(() => HomeInformation, (homeInformation) => homeInformation.homeAdaptationsAnswers)
  @JoinColumn({ name: 'home_information_id' })
  homeInformation: HomeInformation;
}
