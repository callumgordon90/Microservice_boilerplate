import { Column, Entity, JoinColumn, ManyToOne } from "typeorm"
import { User } from "../auth/User";
import { Base } from "../Base";

@Entity('adm_notes')
export class Note extends Base {

    @Column({type: 'text'})
    text: string;

    @Column({type: 'varchar'})
    notable_type: string;

    @Column({type: 'bigint'})
    notable_id: number;

    @ManyToOne(() => User, user => user.notes)
    @JoinColumn({name: 'user_id'})
    user: User;

}
