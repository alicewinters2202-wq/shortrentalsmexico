import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { City } from '../../cities/entities/city.entity';
import { Booking } from '../../bookings/entities/booking.entity';
import { Review } from '../../reviews/entities/review.entity';
import { Image } from '../../images/entities/image.entity';

@Entity('properties')
export class Property {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  pricePerNight: number;

  @Column({ default: true })
  isAvailable: boolean;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  maxGuests: number;

  @Column({ nullable: true })
  bedrooms: number;

  @Column({ nullable: true })
  bathrooms: number;

  @Column({ nullable: true })
  contactPhone: string;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(() => User, (user) => user.properties, { eager: true })
  host: User;

  @ManyToOne(() => City, (city) => city.properties, { eager: true })
  city: City;

  @OneToMany(() => Booking, (booking) => booking.property)
  bookings: Booking[];

  @OneToMany(() => Review, (review) => review.property)
  reviews: Review[];

  @OneToMany(() => Image, (image) => image.property, { eager: true })
  images: Image[];
}
