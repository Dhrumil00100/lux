export interface Service {
  id: string;
  name: string;
  category: 'hair-styling' | 'colouring' | 'skin' | 'nails' | 'bridal';
  duration: number;
  price: number;
  description: string;
}

export interface Staff {
  id: string;
  name: string;
  role: string;
  experience: number;
  specialisations: string[];
  bio: string;
  photo: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  category: string;
  alt: string;
}

export interface LoyaltyTransaction {
  date: string;
  description: string;
  points: number;
}

export interface LoyaltyAccount {
  clientName: string;
  points: number;
  tier: 'Bronze' | 'Silver' | 'Gold';
  pointsToNextTier: number;
  totalSpend: number;
  recentTransactions: LoyaltyTransaction[];
}

export type BookingStep = 'service' | 'staff' | 'datetime' | 'details' | 'confirm';

export interface BookingFormData {
  serviceId: string;
  staffId: string;
  date: string;
  time: string;
  name: string;
  email: string;
  phone: string;
  notes: string;
}
