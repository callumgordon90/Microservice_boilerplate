import {
  IsDate,
  IsEmail,
  IsIn,
  IsMobilePhone,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
  Matches,
} from 'class-validator'
import {
  AfterLoad,
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  In,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
} from 'typeorm'
import {
  Address,
  Carer,
  Country,
  Employee,
  FamilyMember,
  Group,
  Identification,
  JobArea,
  LabourProcessMessage,
  Language,
  Permission,
  Position,
  Service,
} from '..'
import db from '../../database/db'
import { Note } from '../administration/Note'
import { Base } from '../Base'
import { Configuration } from './Configuration'

@Entity('auth_users')
export class User extends Base {
  @IsString()
  @IsNotEmpty()
  @Column({ type: 'varchar' })
  name: string

  @IsString()
  @IsNotEmpty()
  @Column({ type: 'varchar' })
  last_name: string

  @IsString()
  @IsOptional()
  @Column({ type: 'varchar', nullable: true })
  username: string

  @IsEmail()
  @IsNotEmpty()
  @Column({ type: 'varchar', unique: true, nullable: true })
  email: string

  @IsEmail()
  @IsOptional()
  @Column({ type: 'varchar', unique: true, nullable: true })
  personal_email: string

  @IsString()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/)
  @Column({ type: 'varchar', select: false, nullable: true })
  password: string

  @Column({ type: 'varchar', nullable: true, select: false })
  password_token: string

  // @Column({ type: 'varchar', nullable: true })
  // remember_token: string;

  @Column({ type: 'date', nullable: true })
  birth_date: Date

  @IsOptional()
  @Column({
    type: 'integer',
    nullable: true,
  })
  gender: number

  @Column({ type: 'varchar', nullable: true })
  mobile_phone: string

  @IsNumberString()
  @IsOptional()
  @Column({ type: 'varchar', nullable: true })
  home_phone: string

  @Column({ type: 'varchar', nullable: true })
  user_image: string

  @IsOptional()
  @Column({ type: 'varchar', nullable: true })
  bio: string

  @Column({ type: 'tinyint', default: 1 })
  is_active: number

  @Column({ type: 'tinyint', default: 0 })
  is_online: number

  // @Column({type: 'timestamp', nullable: true})
  // email_verifies_at: Timestamp;

  @OneToOne(() => Carer, (carer) => carer.user)
  carer: Carer

  @OneToOne(() => FamilyMember, (familyMember) => familyMember.user, { createForeignKeyConstraints: true })
  familyMember: FamilyMember

  @OneToOne(() => Employee, (employee) => employee.user)
  employee: Employee

  @OneToOne(() => Configuration, (configuration) => configuration.user)
  configuration: Configuration

  @ManyToOne(() => JobArea, (jobArea) => jobArea.users, {
    createForeignKeyConstraints: true,
  })
  @JoinColumn({ name: 'job_area' })
  jobArea: JobArea

  @ManyToOne(() => Country, (country) => country.users)
  @JoinColumn({ name: 'nationality_id' })
  nationality: Country

  @OneToMany(() => Identification, (identifications) => identifications.user, {
    createForeignKeyConstraints: true,
    eager: true,
  })
  identifications: Identification[]

  @OneToMany(() => Service, (service) => service.createdBy)
  createdServices: Service[]
  @ManyToOne(() => Position, (position) => position.users, {
    createForeignKeyConstraints: true,
    eager: true,
  })
  @JoinColumn({ name: 'position' })
  position: Position

  @ManyToOne(() => Position, (position) => position.users, {
    createForeignKeyConstraints: true,
  })
  @OneToMany(() => Address, (address) => address.user)
  addresses: Address[]

  @OneToMany(() => Note, (note) => note.user)
  notes: Note[]
  @ManyToMany(() => Group, (group) => group.users, { eager: true })
  @JoinTable({
    name: 'user_group',
    joinColumn: { name: 'user_id' },
    inverseJoinColumn: { name: 'group_id' },
  })
  groups: Group[]

  @ManyToMany(() => Permission, (permission) => permission.users)
  @JoinTable({
    name: 'user_permissions',
    joinColumn: { name: 'user_id' },
    inverseJoinColumn: { name: 'permission_id' },
  })
  permission: Permission[]

  @ManyToMany(() => Language, (language) => language.users, {
    createForeignKeyConstraints: true,
  })
  @JoinTable({
    name: 'user_languages',
    joinColumn: { name: 'user_id' },
    inverseJoinColumn: { name: 'language_id' },
  })
  languages: Language[]

  @OneToMany(() => LabourProcessMessage, (process_message) => process_message.sender)
  process_messages: LabourProcessMessage

  async setgroups(groupIds: number[]) {
    const groups = await db.getRepository(Group).find({ where: { id: In(groupIds) } })
    this.groups = groups
    await db.getRepository(User).save(this)
  }

  @BeforeInsert()
  @BeforeUpdate()
  setUserActive() {
    if (!this.is_active && this.is_active !== 0) {
      this.is_active = 1
      this.is_online = 1
    }
  }

  get fullName() {
    if (this.name && this.last_name) {
      return `${this.name} ${this.last_name}`
    }
  }
}
