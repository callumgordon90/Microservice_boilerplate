import { Column, Entity, OneToMany } from "typeorm"
import { Base } from "../Base";
import { ProfilePreferencesTodoTasks } from "../service/pivot/ProfilePreferencesTodoTasks";

@Entity('adm_todo_frequencies')
export class TodoFrequency extends Base {

    @Column({type: 'varchar'})
    frequency: string;

    @OneToMany(() => ProfilePreferencesTodoTasks, profileTasks => profileTasks.frecuency)
    preferenceTasks: ProfilePreferencesTodoTasks[];

}
