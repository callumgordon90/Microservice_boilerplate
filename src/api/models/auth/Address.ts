import { BeforeInsert, Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne } from 'typeorm';
import {
  AddressAnswer,
  CarerJob,
  CarerJobRequest,
  City,
  Community,
  Country,
  HomeInformation,
  Province,
  ServiceAddress,
  User,
} from '..';
import { Base } from '../Base';

@Entity('auth_addresses')
export class Address extends Base {
  @ManyToOne(() => Country, (country) => country.addresses, {
    nullable: true,
    eager: true,
    createForeignKeyConstraints: true,
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'country_id' })
  country: Country;

  @ManyToOne(() => Community, (community) => community.addresses, {
    nullable: true,
    eager: true,
    createForeignKeyConstraints: true,
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'community_id' })
  community: Community;

  @ManyToOne(() => Province, (province) => province.addresses, {
    nullable: true,
    eager: true,
    createForeignKeyConstraints: true,
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'province_id' })
  province: Province;

  @ManyToOne(() => City, (city) => city.addresses, {
    nullable: true,
    eager: true,
    createForeignKeyConstraints: true,
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'city_id' })
  city: City;

  @OneToMany(() => CarerJob, (carer_jobs) => carer_jobs.address)
  carer_jobs: CarerJob;

  @Column({ type: 'varchar', nullable: true })
  street_name: string;

  @Column({ type: 'varchar', nullable: true })
  street_number: string;

  @Column({ type: 'integer', nullable: true })
  floor: number;

  @Column({ type: 'varchar', nullable: true })
  door: string;

  @Column({ type: 'varchar', nullable: true })
  zip_code: string;

  @Column({ type: 'tinyint', default: 1 })
  is_active: number;

  @OneToOne(() => HomeInformation, (homeInformation) => homeInformation.address)
  homeInformation: HomeInformation;

  @ManyToOne(() => User, (user) => user.addresses, {
    nullable: true,
    eager: false,
    createForeignKeyConstraints: true,
    cascade: ['insert', 'update'],
  })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => CarerJobRequest, (job_request) => job_request.address)
  job_location: CarerJobRequest;

  @OneToMany(() => ServiceAddress, (serviceAddress) => serviceAddress.address)
  services: ServiceAddress[];

  @OneToMany(() => AddressAnswer, (addressAnswer) => addressAnswer.address)
  addressAnswers: AddressAnswer[];

  @BeforeInsert()
  setIsActive() {
    this.is_active = 1;
  }
}
