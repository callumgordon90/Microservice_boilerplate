import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TodoFrequency } from '../../administration/TodoFrequency';
import { TodoTask } from '../../administration/TodoTask';
import { ServiceProfilePreference } from '../../select/ServiceProfilePreference';

@Entity('profile_preferences_todo_tasks')
export class ProfilePreferencesTodoTasks {
  @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
  id: number;

  @ManyToOne(() => ServiceProfilePreference, (preference) => preference.preferenceTasks)
  @JoinColumn({ name: 'profile_preference_id' })
  preference: ServiceProfilePreference;

  @ManyToOne(() => TodoTask, (task) => task.preferenceTasks)
  @JoinColumn({ name: 'todo_task_id' })
  todoTask: TodoTask;

  @ManyToOne(() => TodoFrequency, (frecuency) => frecuency.preferenceTasks)
  @JoinColumn({ name: 'frecuency_id' })
  frecuency: TodoFrequency;
}
