import { Column, Entity } from "typeorm"
import { Base } from "../Base";

@Entity('adm_lisences')
export class Lisence extends Base {

    @Column({type: 'varchar'})
    name: string;

    @Column({type: 'tinyint'})
    is_active: number;

}
