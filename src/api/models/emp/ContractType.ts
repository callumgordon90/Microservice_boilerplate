import { Column, Entity, OneToMany } from 'typeorm';
import { Contract, Service } from '..';
import { Base } from '../Base';

@Entity('emp_contract_types')
export class ContractType extends Base {
  @Column({ type: 'varchar' })
  name: string;

  @OneToMany(() => Service, (service) => service.contractType)
  services: Service[];

  @OneToMany(() => Contract, (contract) => contract.contractType)
  contracts: Contract[];
}
