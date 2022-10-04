import { IsNotEmpty, IsString } from 'class-validator';
import { AfterLoad, Column, Entity, In, JoinTable, ManyToMany } from 'typeorm';
import { Permission, User } from '..';
import db from '../../database/db';
import { Base } from '../Base';

@Entity('auth_groups')
export class Group extends Base {
  @IsNotEmpty()
  @IsString()
  @Column({ type: 'varchar', unique: true })
  name: string;

  @Column({ type: 'tinyint', default: 1 })
  is_active: number;

  @ManyToMany(() => User, (user) => user.groups)
  users: User[];

  @ManyToMany(() => Permission, (permission) => permission.groups, { eager: true })
  @JoinTable({
    name: 'group_permission',
    joinColumn: { name: 'group_id' },
    inverseJoinColumn: { name: 'permission_id' },
  })
  permission: Permission[];

  async setusers(userIds: number[]) {
    const users = await db.getRepository(User).find({ where: { id: In(userIds) } });
    this.users = users;
    await db.getRepository(Group).save(this);
  }

}
