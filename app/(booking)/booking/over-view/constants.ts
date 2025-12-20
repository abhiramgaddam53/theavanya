import { 
  Star, 
  CheckCircle,
  Briefcase,
  Droplets,
  Utensils,
  Dumbbell,
  Wind,
  Trophy
} from 'lucide-react';

export const HERO_SLIDES = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
  }
];

export const ROOMS = [
  {
    id: 1,
    name: "Guest Room",
    image:
      "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop",
    bed: "1 King Bed",
    capacity: "Up to 2 Guests",
    guests: "Up to 2 Guests",
    price: "From ₹35,000 / Night",
    description:
      "Minimal accents and calm palettes set the stage for an easy, uninterrupted stay in the heart of the hotel.",
    cta: "View Guest Room"
  },
  {
    id: 2,
    name: "Executive Lounge",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    bed: "1 King Bed",
    capacity: "Up to 2 Guests",
    guests: "Up to 2 Guests",
    price: "From ₹42,000 / Night",
    description:
      "Lavish lounge seating, dedicated workspaces, and priority service make the Executive Lounge a calm headquarters for business or leisure.",
    cta: "View Executive Lounge"
  },
  {
    id: 3,
    name: "The Canopy Villa",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop",
    bed: "1 King Bed",
    capacity: "Up to 2 Guests",
    guests: "Up to 2 Guests",
    price: "From ₹55,000 / Night",
    description:
      "Suspended just above the treetops, this villa is designed for guests who prefer their peace with a hint of drama.",
    cta: "Explore Villa"
  },
  {
    id: 4,
    name: "Horizon Loft",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=2070&auto=format&fit=crop",
    bed: "1 King Bed + Daybed",
    capacity: "Up to 3 Guests",
    guests: "Up to 3 Guests",
    price: "From ₹62,000 / Night",
    description:
      "Double-height ceilings and curated art pieces keep the Horizon Loft airy and intimate at the same time.",
    cta: "See The Loft"
  },
  {
    id: 5,
    name: "Rainforest Suite",
    image:
      "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2070&auto=format&fit=crop",
    bed: "1 King Bed",
    capacity: "Up to 3 Guests",
    guests: "Up to 3 Guests",
    price: "From ₹68,000 / Night",
    description:
      "Artfully integrated greenery and a private plunge pool make this suite a favorite for those needing a reset.",
    cta: "Discover Suite"
  },
  {
    id: 6,
    name: "Sky Terrace Penthouse",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2070&auto=format&fit=crop",
    bed: "1 King Bed + Living Gallery",
    capacity: "Up to 4 Guests",
    guests: "Up to 4 Guests",
    price: "From ₹75,000 / Night",
    description:
      "Panoramic views and a private dining gallery make the Penthouse a dramatic setting for unforgettable evenings.",
    cta: "View Penthouse"
  }
];

export const OFFERS = [
  {
    id: 1,
    category: "Dining",
    title: "Festive Celebrations",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2000&auto=format&fit=crop",
    desc: "Indulge in the joy of the season with curated cuisine."
  },
  {
    id: 2,
    category: "Members",
    title: "Stay Longer, Save More",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2000&auto=format&fit=crop",
    desc: "Earn up to 4 Free Nights and Silver Elite Status."
  },
  {
    id: 3,
    category: "Wellness",
    title: "Weekend Escape",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2000&auto=format&fit=crop",
    desc: "Rejuvenate with our exclusive spa package."
  },
  {
    id: 4,
    category: "Adventure",
    title: "Explore Hyderabad",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000&auto=format&fit=crop",
    desc: "Discover the best attractions and experiences in the city."
  },
  {
    id: 5,
    category: "Corporate",
    title: "Business Retreat",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop",
    desc: "Perfect venue for team building and corporate events."
  },
  {
    id: 6,
    category: "Romance",
    title: "Honeymoon Bliss",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop",
    desc: "Create unforgettable memories with your special someone."
  }
];

export const AMENITIES = [
  { icon: Droplets, label: "Sustainability" },
  { icon: Utensils, label: "Restaurant On-Site" },
  { icon: Briefcase, label: "Meeting Space" },
  { icon: Droplets, label: "Outdoor Pool" },
  { icon: Dumbbell, label: "Fitness Center" },
  { icon: Wind, label: "Spa Services" },
];

export const WAYS_TO_ENJOY = [
  {
    id: 'spa',
    label: 'Spa',
    title: 'Heavenly Spa by avanya™',
    desc: 'Treat yourself to a full day of spa services for total body wellness at Heavenly Spa by avanya. Choose invigorating a la carte treatments for a peaceful moment away from the hustle and bustle of Hitech City.',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'fitness',
    label: 'Fitness',
    title: 'avanyaWORKOUT® Fitness Studio',
    desc: 'Fuel your day with a workout in our state-of-the-art fitness center, featuring free weights, cardiovascular equipment, and plenty of space to stretch and move.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'swimming',
    label: 'Swimming',
    title: 'Outdoor Pool',
    desc: 'Take a refreshing dip in our sparkling outdoor pool, the perfect place to unwind after a busy day of meetings or sightseeing in Hyderabad.',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2070&auto=format&fit=crop'
  }
];

export const AWARDS = [
  { id: 1, title: "2021 Trip Advisor Travelers Choice Hotel", icon: Trophy },
  { id: 2, title: "Times Food and Nightlife Awards 2023", icon: Star },
  { id: 3, title: "Five Star Award of Excellence - Telangana Tourism", icon: CheckCircle }
];

export const FAQS = [
  { q: "What are the check-in and check-out times?", a: "Check-in is at 3:00 pm and Check-out is at 12:00 pm." },
  { q: "Does The avanya Hyderabad Mindspace allow pets?", a: "Pets are not allowed at our property." },
  { q: "What are the parking options?", a: "We offer complimentary on-site parking and valet parking for all guests." },
  { q: "What property amenities are available?", a: "Guests can enjoy our fitness center, outdoor pool, multiple restaurants, and the Heavenly Spa." },
  { q: "Does the hotel have in-room Wi-Fi?", a: "Yes, complimentary high-speed Wi-Fi is available in all guest rooms and public areas." }
];
