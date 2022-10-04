import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { IdentificationType, User } from '..';
import { Base } from '../Base';

@Entity('emp_identifications')
export class Identification extends Base {
  //TODO make upload of files
  @Column({ type: 'varchar', nullable: true })
  file: string;

  @Column({ type: 'varchar', nullable: false })
  identity_doc: string;

  @Column({ type: 'date', nullable: false })
  expiration_date: Date;

  @Column({ type: 'tinyint' })
  mandatory_to_work: number;

  @Column({ type: 'date' })
  posted_date: Date;

  @ManyToOne(() => IdentificationType, (identityType) => identityType.identifications, { eager: true })
  @JoinColumn({ name: 'type' })
  identityType: IdentificationType;

  @ManyToOne(() => User, (user) => user.identifications, { createForeignKeyConstraints: true })
  @JoinColumn({ name: 'user_id' })
  user: User;
}
