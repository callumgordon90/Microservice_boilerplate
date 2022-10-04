import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Pathology } from "../../administration/Pathology";
import { FamilyMember } from "../FamilyMember";

@Entity('family_members_pathologies')
export class FamilyMemberPathology {

    @PrimaryGeneratedColumn({ type: 'bigint', unsigned: true })
    id: number;

    @Column('tinyint', { default: 0 })
    is_main_pathology: number;

    @ManyToOne(() => FamilyMember, familyMember => familyMember.familyMemberPathology)
    @JoinColumn({name: 'family_member_id'})
    familyMember: FamilyMember;

    @ManyToOne(() => Pathology, pathology => pathology.familyMemberPathology)
    @JoinColumn({ name: 'pathology_id' })
    pathology: Pathology;

}
