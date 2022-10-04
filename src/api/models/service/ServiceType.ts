import {Column, Entity, OneToMany} from "typeorm"
import {Base} from "../Base";
import {Service} from "../";

@Entity('select_service_types')
export class ServiceType extends Base{

    private _name: string

    @Column( { type: "varchar" })
    get name(): string {
        return this._name.toUpperCase();
    }

    set name(value: string) {
        this._name = value.toLowerCase();
    }

    @OneToMany( () => Service, service_type => service_type.serviceType )
    services: Service

}
