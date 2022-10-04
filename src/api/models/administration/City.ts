import { IsAlpha, IsNotEmpty, IsString } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Address, Province } from '..';
import { Base } from '../Base';

@Entity('admin_cities')
export class City extends Base {
  @IsString()
  @IsAlpha()
  @IsNotEmpty()
  @Column({ type: 'varchar' })
  name: string;

  @Column('float')
  latitude: number;

  @Column('float')
  longitude: number;

  @ManyToOne(() => Province, (province) => province.cities, {
    eager: true,
    createForeignKeyConstraints: true,
    nullable: false,
  })
  @JoinColumn({ name: 'province_id' })
  province: Province;

  @OneToMany(() => Address, (address) => address.city)
  addresses: Address[];
}
