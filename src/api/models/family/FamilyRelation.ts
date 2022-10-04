import { Column, Entity, OneToMany } from 'typeorm';
import { FamilyMember } from '..';
import { Base } from '../Base';

@Entity('family_relations')
export class FamilyRelation extends Base {
  @Column({ type: 'varchar' })
  user_relationship: string;

  @OneToMany(() => FamilyMember, (familyMember) => familyMember.relation)
  familyMembers: FamilyMember[];
}
