import { Column, Entity } from "typeorm"
import { Base } from "../Base";

@Entity('adm_specializations')
export class Specialization extends Base {

    @Column({type: 'varchar'})
    name: string;

}
