import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Address, HomeAdaptationsAnswer, HomePetOwning } from '..';
import { Base } from '../Base';

@Entity('select_home_informations')
export class HomeInformation extends Base {
  @Column({ type: 'integer' })
  inhabitants: number;

  @Column({ type: 'text' })
  aditional_information: string;

  @Column({ type: 'tinyint' })
  pet_owning: number;

  @OneToOne(() => Address, (address) => address.homeInformation)
  @JoinColumn({ name: 'address_id' })
  address: Address;

  @OneToMany(() => HomePetOwning, (homePetOwning) => homePetOwning)
  homePetOwning: HomePetOwning[];

  @OneToMany(() => HomeAdaptationsAnswer, (homeAdaptationsAnswer) => homeAdaptationsAnswer.homeInformation)
  homeAdaptationsAnswers: HomeAdaptationsAnswer[];
}
