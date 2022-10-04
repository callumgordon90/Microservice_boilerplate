import { Column, Entity } from "typeorm"
import { Base } from "../Base";

@Entity('adm_carer_positions')
export class CarerPosition extends Base {

    @Column({type: 'varchar'})
    name: string;

}
