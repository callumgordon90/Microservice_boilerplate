import { Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Address, ServiceAddress } from '..';
import { Base } from '../Base';

@Entity('select_address_answers')
export class AddressAnswer extends Base {
  @ManyToOne(() => ServiceAddress, (serviceAddress) => serviceAddress.addressAnswers)
  @JoinColumn({ name: 'service_address_id' })
  serviceAddress: ServiceAddress;

  @ManyToOne(() => Address, (address) => address.addressAnswers, { nullable: true })
  @JoinColumn({ name: 'address_id' })
  address: Address;
}
