import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Property } from '../../properties/entities/property.entity';

@Entity('reviews')
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'int' })
  rating: number; // 1-5

  @Column({ type: 'text', nullable: true })
  comment: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.reviews, { eager: true })
  author: User;

  @ManyToOne(() => Property, (property) => property.reviews, { onDelete: 'CASCADE' })
  property: Property;
}
