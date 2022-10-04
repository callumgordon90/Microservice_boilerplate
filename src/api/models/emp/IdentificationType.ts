import { Column, Entity, OneToMany } from 'typeorm';
import { Identification } from '..';
import { Base } from '../Base';

@Entity('emp_identification_types')
export class IdentificationType extends Base {
  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'boolean' })
  mandatory_to_work: boolean;

  @OneToMany(() => Identification, (identification) => identification.identityType, {
    createForeignKeyConstraints: true,
    nullable: false,
  })
  identifications: Identification;
}
