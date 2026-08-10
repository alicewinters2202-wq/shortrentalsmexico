export interface City {
  id: number;
  name: string;
  country: string;
  imageUrl: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  phone?: string;
  avatarUrl?: string;
  role: 'guest' | 'host' | 'admin';
}

export interface Image {
  id: number;
  url: string;
  altText?: string;
}

export interface Property {
  id: number;
  title: string;
  description: string;
  pricePerNight: number;
  isAvailable: boolean;
  address: string;
  maxGuests: number;
  bedrooms: number;
  bathrooms: number;
  contactPhone: string;
  city: City;
  host: User;
  images: Image[];
  reviews: Review[];
  createdAt: string;
}

export interface Booking {
  id: number;
  checkIn: string;
  checkOut: string;
  totalPrice: number;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  guests: number;
  property: Property;
  guest: User;
  createdAt: string;
}

export interface Review {
  id: number;
  rating: number;
  comment?: string;
  author: User;
  createdAt: string;
}
