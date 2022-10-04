import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm"
import { Base } from "../Base";
import { User } from "./User";

@Entity('auth_configurations')
export class Configuration extends Base {

    @Column({ type: 'tinyint' })
    receive_emails: number;

    @OneToOne(() => User, user => user.configuration)
    @JoinColumn({name: 'user'})
    user: User;

}
