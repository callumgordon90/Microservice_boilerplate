import {
  AfterInsert,
  AfterLoad,
  BeforeInsert,
  Column,
  Entity,
  In,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Group, User } from '..';
import db from '../../database/db';
import { Base } from '../Base';

@Entity('auth_permissions')
export class Permission extends Base {
  @Column({ type: 'varchar', unique: true })
  name: string;

  @ManyToOne(() => Permission, (permission) => permission.children)
  @JoinColumn({ name: 'parent' })
  parent: Permission;

  @OneToMany(() => Permission, (permission) => permission.parent)
  children: Permission[];

  @ManyToMany(() => Group, (group) => group.permission)
  groups: Group[];

  @ManyToMany(() => User, (user) => user.permission)
  users: User[];

  async setgroups(groupIds: number[]) {
    const groups = await db.getRepository(Group).find({ where: { id: In(groupIds) } });
    this.groups = groups;
    await db.getRepository(Permission).save(this);
  }

  async setusers(userIds: number[]) {
    const users = await db.getRepository(User).find({ where: { id: In(userIds) } });
    this.users = users;
    await db.getRepository(Permission).save(this);
  }
}
