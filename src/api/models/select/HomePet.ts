import { Column, Entity, OneToMany } from 'typeorm';
import { HomePetOwning } from '..';
import { Base } from '../Base';

@Entity('select_home_pets')
export class HomePet extends Base {
  @Column({ type: 'varchar' })
  animal_type: string;

  @OneToMany(() => HomePetOwning, (homePetOwning) => homePetOwning.homePet)
  homePetOwnings: HomePetOwning[];
}
