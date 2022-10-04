import { Column, Entity, OneToMany } from 'typeorm';
import { Service } from '..';
import { Base } from '../Base';

@Entity('select_process_types')
export class ProcessType extends Base {
  @Column({ type: 'varchar' })
  name: string;

  @OneToMany(() => Service, (service) => service.processType)
  services: Service[];
}
