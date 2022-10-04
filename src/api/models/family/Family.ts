import { BeforeInsert, BeforeUpdate, Column, Entity, In, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { CalendarEvent, FamilyMember, Service } from '..';
import db from '../../database/db';
import { Base } from '../Base';

@Entity('families')
export class Family extends Base {
  @Column({ type: 'varchar' })
  family_name: string;

  @Column({ type: 'varchar' })
  first_name_contact: string;

  @Column({ type: 'varchar' })
  last_name_contact: string;

  @Column({ type: 'varchar' })
  email_contact: string;

  @Column({ type: 'varchar' })
  mobile_phone_contact: string;

  @Column({ type: 'varchar' })
  home_phone_contact: string;

  @Column({ type: 'tinyint', default: 1 })
  is_active: number;

  @OneToMany(() => CalendarEvent, (calendarEvent) => calendarEvent.family)
  calendarEvents: CalendarEvent[];

  @OneToMany(() => Service, service => service.family)
  services: Service[];

  @ManyToMany(() => FamilyMember, (familyMember) => familyMember.families)
  @JoinTable({
    name: 'family_relationships',
    joinColumn: { name: 'family_id' },
    inverseJoinColumn: { name: 'family_member_id' },
  })
  members: FamilyMember[];

  @BeforeInsert()
  @BeforeUpdate()
  async setFamilyMembers(familyMemberIds: number[]) {
    const familyMembers = await db.getRepository(FamilyMember).find({ where: { id: In(familyMemberIds) } });
    this.members = familyMembers;
    await db.getRepository(FamilyMember).save(this);
  }
}
