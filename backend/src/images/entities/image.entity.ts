import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Property } from '../../properties/entities/property.entity';

@Entity('images')
export class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  url: string;

  @Column({ nullable: true })
  altText: string;

  @ManyToOne(() => Property, (property) => property.images, { onDelete: 'CASCADE' })
  property: Property;
}
