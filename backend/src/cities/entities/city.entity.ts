import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Property } from '../../properties/entities/property.entity';

@Entity('cities')
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  country: string;

  @Column({ nullable: true })
  imageUrl: string;

  @OneToMany(() => Property, (property) => property.city)
  properties: Property[];
}
