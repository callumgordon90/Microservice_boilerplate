import { Column, Entity, OneToMany } from "typeorm"
import { Base } from "../Base";
import { LabourRelation } from "../labour/LabourRelation";
import { Service } from "../service/Service";

@Entity("select_service_types")
export class ServiceType extends Base {
    @Column({ type: "varchar"})
    name: string;

    @OneToMany(() => Service, service => service.serviceType)
    services: Service[];

    @OneToMany(() => LabourRelation, labourRelation => labourRelation.serviceType)
    labourRelations: LabourRelation[];
}


