import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { HomeInformation, HomePet } from '..';
import { Base } from '../Base';

@Entity('select_home_pet_ownings')
export class HomePetOwning extends Base {
  @Column({ type: 'integer' })
  quantity: number;

  @ManyToOne(() => HomePet, (homePet) => homePet.homePetOwnings)
  @JoinColumn({ name: 'animal_type_id' })
  homePet: HomePet;

  @ManyToOne(() => HomeInformation, (homeInformation) => homeInformation.homePetOwning)
  @JoinColumn({ name: 'home_information_id' })
  homeInformation: HomeInformation;
}
