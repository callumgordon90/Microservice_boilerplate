import { Column, Entity, OneToMany } from "typeorm"
import { Base } from "../Base";
import { ProfilePreferencesTodoTasks } from "../service/pivot/ProfilePreferencesTodoTasks";

@Entity('adm_todo_tasks')
export class TodoTask extends Base {

    @Column({type: 'varchar'})
    name: string;

    @Column({type: 'double', nullable: true})
    cost: number;

    @OneToMany(() => ProfilePreferencesTodoTasks, profileTasks => profileTasks.todoTask)
    preferenceTasks: ProfilePreferencesTodoTasks[];

}
