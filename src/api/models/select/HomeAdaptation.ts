import { Column, Entity, OneToMany } from 'typeorm';
import { HomeAdaptationsAnswer } from '..';
import { Base } from '../Base';

@Entity('select_home_adaptations')
export class HomeAdaptation extends Base {
  @Column({ type: 'varchar' })
  name: string;

  @OneToMany(() => HomeAdaptationsAnswer, (homeAdaptationAnswer) => homeAdaptationAnswer.homeAdaptation)
  homeAdaptationAnswers: HomeAdaptationsAnswer[];
}
