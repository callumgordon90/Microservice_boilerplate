import { IsNotEmpty, IsString } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { JobArea, User } from '..';
import { Base } from '../Base';

@Entity('auth_positions')
export class Position extends Base {
  @IsNotEmpty()
  @IsString()
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'tinyint' })
  is_active: number;

  @ManyToOne(() => JobArea, (jobArea) => jobArea.positions, {
    createForeignKeyConstraints: true,
  })
  @JoinColumn({ name: 'job_area' })
  job_area: JobArea;

  @OneToMany(() => User, (user) => user.position, {
    createForeignKeyConstraints: true,
  })
  users: User[];
}
