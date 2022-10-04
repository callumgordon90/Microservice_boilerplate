import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Address, City, Community } from '..';
import { Base } from '../Base';
import { CarerJob } from '../carer/CarerJob';

@Entity('admin_provinces')
export class Province extends Base {
  @Column({ type: 'varchar' })
  name: string;

  @ManyToOne(() => Community, (community) => community.provinces, {
    eager: true,
    nullable: false,
  })
  @JoinColumn({ name: 'community_id' })
  community: Community;

  @OneToMany(() => City, (city) => city.province)
  cities: City;

  @OneToMany(() => Address, (address) => address.province)
  addresses: Address[];

  @OneToMany(() => CarerJob, (carer_jobs) => carer_jobs.province)
  carerJob: CarerJob[];
}
