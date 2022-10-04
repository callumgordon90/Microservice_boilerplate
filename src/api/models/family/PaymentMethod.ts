import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { FamilyMember } from '..';
import { Base } from '../Base';

@Entity('family_payment_methods')
export class PaymentMethod extends Base {
  @Column({ type: 'varchar' })
  iban: string;

  @Column({ type: 'varchar', nullable: true })
  holder_name: string;

  @Column({ type: 'varchar', nullable: true })
  holder_last_name: string;

  @Column({ type: 'varchar', nullable: true })
  holder_doc_name: string;

  @ManyToOne(() => FamilyMember, (familyMember) => familyMember.paymentMethods)
  @JoinColumn({ name: 'family_member_id' })
  familyMembers: FamilyMember[];
}
