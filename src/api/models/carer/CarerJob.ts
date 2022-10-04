import { IsOptional } from 'class-validator';
import { isEmpty } from 'lodash';
import { AfterLoad, Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Address, CarerJobRequest, Community, Province, Service, ServiceSchedule } from '..';
import { Base } from '../Base';

type Hours = {
  monday: any;
  tuesday: any;
  wednesday: any;
  thursday: any;
  friday: any;
  saturday: any;
  sunday: any;
};

@Entity('carer_jobs')
export class CarerJob extends Base {
  @OneToOne(() => Address, (address) => address.carer_jobs, { nullable: true, eager: true })
  @JoinColumn({ name: 'address_id' })
  address: Address;

  @OneToOne(() => Service, (service) => service.carerJob, { nullable: true })
  @JoinColumn({ name: 'service_id' })
  service: Service;

  @OneToOne(() => Province, (province) => province.carerJob, { nullable: true, eager: true })
  @JoinColumn({ name: 'province_id' })
  province: Province;

  @OneToOne(() => Community, (community) => community.carer_job, { nullable: true, eager: true })
  @JoinColumn({ name: 'community_id' })
  community: Community;

  @Column({ type: 'varchar', nullable: true })
  salary: string;

  @Column({ type: 'varchar', nullable: true })
  week_hours: string;

  @OneToMany(() => CarerJobRequest, (carer_job_request) => carer_job_request.carerJob, { eager: true })
  carerJobRequests: CarerJobRequest[];

  @IsOptional()
  get is_weekend_job(): boolean {
    if (!this?.service && !this?.service?.schedule) {
      return false;
    }
    const hours: Hours = JSON.parse(this.service.schedule.hours);

    return !!hours.saturday && !isEmpty(hours.saturday) && !!hours.sunday && !isEmpty(hours.sunday);
  }

}
