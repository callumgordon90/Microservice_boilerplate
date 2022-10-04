import { Column, Entity, JoinColumn, ManyToOne } from "typeorm"
import { Base } from "../Base";
import { ServiceHealthAlergy } from "../select/ServiceHealthAlergie";

@Entity('adm_medical_alergies')
export class MedicalAlergy extends Base {

    @Column({type: 'varchar'})
    name: string;

    @ManyToOne(() => ServiceHealthAlergy, container => container.alergies)
    @JoinColumn({ name: 'healh_alergy_id' })
    container: ServiceHealthAlergy;

}
