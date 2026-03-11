import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Property } from '../../properties/entities/property.entity';
import { Booking } from '../../bookings/entities/booking.entity';
import { Review } from '../../reviews/entities/review.entity';

export enum UserRole {
  GUEST = 'guest',
  HOST = 'host',
  ADMIN = 'admin',
}

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  phone: string;

  @Column({ nullable: true })
  avatarUrl: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.GUEST })
  role: UserRole;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Property, (property) => property.host)
  properties: Property[];

  @OneToMany(() => Booking, (booking) => booking.guest)
  bookings: Booking[];

  @OneToMany(() => Review, (review) => review.author)
  reviews: Review[];
}
