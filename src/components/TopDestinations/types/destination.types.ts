export type VisaType = 'E-visa' | 'Sticker visa';

export interface Destination {
  id: string;
  country: string;
  image: string;
  visaType: VisaType;
  price: number;
  currency: string;
  processingTime: number;
  processingTimeUnit: 'days' | 'weeks';
}

export interface DestinationCardProps {
  destination: Destination;
  className?: string;
}

export interface TopDestinationsProps {
  destinations: Destination[];
  title?: string;
  showViewAll?: boolean;
  className?: string;
}

