import { Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm"
import { Address } from "../auth/Address";
import { Base } from "../Base";
import { Service } from "../service/Service";
import { AddressAnswer } from "./AddressAnswer";

@Entity('select_service_addresses')
export class ServiceAddress extends Base {

    @ManyToOne(type => Service, service => service.addresses, { eager: true })
    @JoinColumn({ name: 'service_id' })
    service: Service;

    @ManyToOne(type => Address, address => address.services, { eager: true })
    @JoinColumn({ name: 'address_id' })
    address: Address;

    @OneToMany(type => AddressAnswer, addressAnswer => addressAnswer.serviceAddress)
    addressAnswers: AddressAnswer[];

}
