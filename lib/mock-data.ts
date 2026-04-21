import { Service, Staff, Testimonial, GalleryImage, LoyaltyAccount } from "@/types";

export const services: Service[] = [
  {
    id: "1",
    name: "Signature Haircut",
    category: "hair-styling",
    duration: 60,
    price: 1500,
    description: "A bespoke cut tailored to your face shape and lifestyle. Includes consultation, shampoo, cut, and styling.",
  },
  {
    id: "2",
    name: "Balayage Colour",
    category: "colouring",
    duration: 180,
    price: 6500,
    description: "Hand-painted highlights for a natural sun-kissed finish. Perfect for adding dimension and depth.",
  },
  {
    id: "3",
    name: "Keratin Treatment",
    category: "hair-styling",
    duration: 120,
    price: 4500,
    description: "Smoothing treatment for frizz-free, glossy hair for up to 3 months. Eliminates up to 95% of frizz.",
  },
  {
    id: "4",
    name: "Hydrafacial",
    category: "skin",
    duration: 75,
    price: 3500,
    description: "Deep cleansing, exfoliation and hydration for radiant skin. Suitable for all skin types.",
  },
  {
    id: "5",
    name: "Gel Nail Art",
    category: "nails",
    duration: 90,
    price: 1800,
    description: "Intricate nail art with long-lasting gel formula. Includes cuticle care and hand massage.",
  },
  {
    id: "6",
    name: "Bridal Package",
    category: "bridal",
    duration: 300,
    price: 18000,
    description: "Complete hair and makeup for your most important day. Includes trial session and touch-ups.",
  },
  {
    id: "7",
    name: "Global Colour",
    category: "colouring",
    duration: 150,
    price: 5500,
    description: "Full head colour application for rich, even coverage. Includes deep conditioning treatment.",
  },
  {
    id: "8",
    name: "Anti-Ageing Facial",
    category: "skin",
    duration: 90,
    price: 4200,
    description: "Advanced treatment targeting fine lines and wrinkles. Includes LED therapy and collagen boost.",
  },
];

export const staff: Staff[] = [
  {
    id: "1",
    name: "Aisha Sharma",
    role: "Senior Hair Stylist & Colourist",
    experience: 9,
    specialisations: ["Balayage", "Hair Colour", "Bridal Hair"],
    bio: "With nine years of experience across Mumbai and Dubai, Aisha specialises in lived-in colour and transformative cuts that enhance your natural beauty.",
    photo: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=400&h=400&fit=crop",
  },
  {
    id: "2",
    name: "Rohan Mehta",
    role: "Creative Director & Stylist",
    experience: 12,
    specialisations: ["Editorial Cuts", "Hair Texture", "Men's Grooming"],
    bio: "Rohan brings a decade of London fashion-week experience to every chair, with a philosophy that great hair starts with great structure.",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
  },
  {
    id: "3",
    name: "Priya Nair",
    role: "Skin & Beauty Specialist",
    experience: 7,
    specialisations: ["Hydrafacial", "Anti-Ageing", "Nail Art"],
    bio: "A certified aesthetician and nail artist, Priya believes that radiant skin is the ultimate accessory. Her gentle touch keeps clients coming back.",
    photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
  },
  {
    id: "4",
    name: "Zara Khan",
    role: "Bridal Specialist",
    experience: 10,
    specialisations: ["Bridal Makeup", "Traditional Styles", "Saree Draping"],
    bio: "Zara has been part of over 500 weddings, creating timeless looks that photograph beautifully and last all day.",
    photo: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Meera Kapoor",
    rating: 5,
    text: "Salon Latre is the only place I trust with my hair. Aisha transformed my look completely — I walked out feeling like a different person.",
  },
  {
    id: "2",
    name: "Ananya Bose",
    rating: 5,
    text: "The atmosphere alone is worth the visit. The team is incredibly skilled and genuinely listens to what you want. My bridal experience was flawless.",
  },
  {
    id: "3",
    name: "Kavya Reddy",
    rating: 5,
    text: "I have been coming here for two years. The loyalty programme is a great touch, and the results always exceed expectations.",
  },
  {
    id: "4",
    name: "Sonia Patel",
    rating: 5,
    text: "From the moment you walk in, you feel pampered. The attention to detail is remarkable. Best facial I've ever had.",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&h=800&fit=crop",
    category: "Hair Colour",
    alt: "Balayage hair colour result",
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1560066984-138daaa0a5b2?w=600&h=600&fit=crop",
    category: "Hair Cut",
    alt: "Precision hair cut",
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1519735777090-ec97162dc266?w=600&h=900&fit=crop",
    category: "Bridal",
    alt: "Bridal hair styling",
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=600&h=600&fit=crop",
    category: "Nails",
    alt: "Luxury nail art",
  },
  {
    id: "5",
    url: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&h=800&fit=crop",
    category: "Skin",
    alt: "Facial treatment",
  },
  {
    id: "6",
    url: "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=600&h=600&fit=crop",
    category: "Hair Colour",
    alt: "Highlights and toning",
  },
  {
    id: "7",
    url: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=600&h=750&fit=crop",
    category: "Hair Cut",
    alt: "Modern hair styling",
  },
  {
    id: "8",
    url: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=600&fit=crop",
    category: "Skin",
    alt: "Skincare treatment",
  },
];

export const mockLoyaltyAccount: LoyaltyAccount = {
  clientName: "Priya Sharma",
  points: 340,
  tier: "Silver",
  pointsToNextTier: 160,
  totalSpend: 34000,
  recentTransactions: [
    { date: "2024-03-15", description: "Balayage Colour", points: 65 },
    { date: "2024-02-28", description: "Signature Haircut", points: 15 },
    { date: "2024-02-01", description: "Reward Redeemed", points: -100 },
    { date: "2024-01-15", description: "Keratin Treatment", points: 45 },
    { date: "2023-12-20", description: "Hydrafacial", points: 35 },
  ],
};

export const salonInfo = {
  name: "Salon Latre",
  address: "42, Linking Road, Bandra West, Mumbai 400050",
  phone: "+91 22 4567 8900",
  email: "hello@salonlatre.com",
  hours: {
    monday: "10:00 AM - 8:00 PM",
    tuesday: "10:00 AM - 8:00 PM",
    wednesday: "10:00 AM - 8:00 PM",
    thursday: "10:00 AM - 8:00 PM",
    friday: "10:00 AM - 8:00 PM",
    saturday: "9:00 AM - 9:00 PM",
    sunday: "9:00 AM - 6:00 PM",
  },
  social: {
    instagram: "@salonlatre",
    facebook: "salonlatre",
    pinterest: "salonlatre",
  },
};
