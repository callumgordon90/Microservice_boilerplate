import { IsAlpha, IsNotEmpty, IsString } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import { Address, Country, Province } from '..';
import { Base } from '../Base';
import { CarerJob } from '../carer/CarerJob';

@Entity('admin_communities')
export class Community extends Base {
  @IsString()
  @IsNotEmpty()
  @IsAlpha()
  @Column({ type: 'varchar' })
  name: string;

  @ManyToOne(() => Country, (country) => country.communities, {
    eager: true,
    createForeignKeyConstraints: true,
    nullable: false,
  })
  @JoinColumn({ name: 'country_id' })
  country: Country;

  @OneToMany(() => Province, (province) => province.community)
  provinces: Province[];

  @OneToMany(() => Address, (address) => address.community)
  addresses: Address[];

  @OneToOne(() => CarerJob, (carer_job) => carer_job.community)
  carer_job: CarerJob;
}
