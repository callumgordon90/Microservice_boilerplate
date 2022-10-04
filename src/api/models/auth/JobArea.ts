import { IsNotEmpty, IsString } from 'class-validator';
import { Column, Entity, OneToMany } from 'typeorm';
import { Base } from '../Base';
import { Position } from './Position';
import { User } from './User';

@Entity('auth_job_areas')
export class JobArea extends Base {
  @IsNotEmpty()
  @IsString()
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'tinyint' })
  is_active: number;

  @OneToMany(() => User, (user) => user.jobArea, { createForeignKeyConstraints: true })
  users: User[];

  @OneToMany(() => Position, (position) => position.job_area, { createForeignKeyConstraints: true })
  positions: Position[];
}
