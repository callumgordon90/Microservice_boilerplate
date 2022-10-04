import { IsAlpha, IsNotEmpty, IsString } from 'class-validator';
import { Column, Entity, OneToMany } from 'typeorm';
import { Address, Community, User } from '..';
import { Base } from '../Base';
import { Formation } from './Formation';

@Entity('admin_countries')
export class Country extends Base {
  @IsString()
  @IsNotEmpty()
  @IsAlpha()
  @Column({ type: 'varchar' })
  name: string;

  @OneToMany(() => Community, (community) => community.country, { cascade: ['insert', 'update'] })
  communities: Community[];

  @OneToMany(() => Address, (address) => address.country, { cascade: ['insert', 'update'] })
  addresses: Address[];

  @OneToMany(() => Formation, (formation) => formation.country)
  formations: Formation[];

  @OneToMany(() => User, (user) => user.nationality)
  users: User[];
}
