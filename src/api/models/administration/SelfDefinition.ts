import { Column, Entity } from "typeorm"
import { Base } from "../Base";

@Entity('adm_self_definitions')
export class SelfDefinition extends Base {

    @Column({type: 'varchar'})
    name: string;

}
