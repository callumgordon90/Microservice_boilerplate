import { Entity, JoinColumn, ManyToOne } from "typeorm"
import { Base } from "../Base";
import { Service } from "../service/Service";

@Entity("select_service_warm_talks")
export class ServiceWarmTalk extends Base {

    @ManyToOne(type => Service, service => service.warmTalks)
    @JoinColumn({name: 'service_id'})
    service: Service;

}


