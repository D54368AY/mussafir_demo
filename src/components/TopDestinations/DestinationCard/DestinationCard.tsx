import React from 'react';
import { DestinationCardProps } from '@/components/TopDestinations/types/destination.types';

export const DestinationCard: React.FC<DestinationCardProps> = ({
  destination,
  className = '',
}) => {
  const { country, image, visaType, price, currency, processingTime, processingTimeUnit } =
    destination;

  return (
    <div
      className={`relative rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer aspect-[4/5] ${className}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={image}
          alt={country}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          loading="lazy"
          onError={(e) => {
            // Fallback if image fails to load
            const target = e.target as HTMLImageElement;
            target.src = 'https://via.placeholder.com/400x500?text=' + country;
          }}
        />
        {/* Gradient overlay at bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      {/* Visa Type Badge - Top Left */}
      <span className="absolute top-3 left-3 bg-white px-3 py-1 rounded-full text-xs font-medium text-gray-700 z-10">
        {visaType}
      </span>

      {/* Processing Time Badge - Bottom Right */}
      <span className="absolute bottom-3 right-3 bg-gray-800/80 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-medium text-white z-10">
        in {processingTime} {processingTimeUnit}
      </span>

      {/* Country Name and Price - Bottom Left */}
      <div className="absolute bottom-3 left-3 z-10">
        <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">{country}</h3>
        <p className="text-sm font-medium text-white/90 drop-shadow-md">
          Starts {currency}
          {price.toLocaleString('en-IN')}
        </p>
      </div>
    </div>
  );
};

