import Image from 'next/image';
import Link from 'next/link';
import { Property } from '@/types';

interface Props {
  property: Property;
}

export default function PropertyCard({ property }: Props) {
  const mainImage = property.images?.[0]?.url || '/placeholder.jpg';

  return (
    <Link href={`/properties/${property.id}`} className="group block">
      <div className="overflow-hidden rounded-xl aspect-square relative">
        <Image
          src={mainImage}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {!property.isAvailable && (
          <span className="absolute top-3 left-3 bg-gray-800 text-white text-xs px-2 py-1 rounded-full">
            Ocupado
          </span>
        )}
      </div>
      <div className="mt-2">
        <div className="flex justify-between items-start">
          <p className="font-semibold text-gray-900 truncate">{property.title}</p>
          <span className="text-gray-500 text-sm ml-2">{property.city?.name}</span>
        </div>
        <p className="text-gray-500 text-sm truncate">{property.address}</p>
        <p className="mt-1">
          <span className="font-semibold">${Number(property.pricePerNight).toLocaleString()}</span>
          <span className="text-gray-500 text-sm"> / noche</span>
        </p>
      </div>
    </Link>
  );
}
