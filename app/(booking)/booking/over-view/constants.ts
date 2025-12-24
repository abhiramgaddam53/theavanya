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
    category: "Wellness",
    title: "Forest Immersion Retreat",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2000&auto=format&fit=crop",
    desc: "A guided journey into stillness combining forest bathing, breathwork, and Ayurvedic restoration crafted for deep mental reset.",
    cta: "View Retreat →"
  },
  {
    id: 2,
    category: "Culinary",
    title: "The No-Menu Dining Experience",
    image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2000&auto=format&fit=crop",
    desc: "Every meal is a conversation. Our chef designs bespoke dishes daily based on your preferences, the harvest, and intuition.",
    cta: "Learn More →"
  },
  {
    id: 3,
    category: "Privacy",
    title: "Complete Digital Detox",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop",
    desc: "Activate the in-villa Digital Detox Switch and disconnect entirely; Wi-Fi, EMF signals, and distractions fade into silence.",
    cta: "Experience Silence →"
  },
  {
    id: 4,
    category: "Wellness",
    title: "Ayurvedic Bio-Hacking",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop",
    desc: "Precision wellness rituals combining ancient Ayurvedic wisdom with modern diagnostics tailored to your body’s rhythms.",
    cta: "Explore Treatments →"
  },
  {
    id: 5,
    category: "Nature",
    title: "Guided Forest Expeditions",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000&auto=format&fit=crop",
    desc: "Walk ancient trails with naturalists who understand the forest as a living archive—not an attraction.",
    cta: "View Trails →"
  },
  {
    id: 6,
    category: "Arrival",
    title: "Private Transfers",
    image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=2000&auto=format&fit=crop",
    desc: "Arrive by private drive or helipad transfer seamlessly arranged to preserve your privacy from the first moment.",
    cta: "Plan Arrival →"
  }
];

export const AMENITIES = [
  { icon: Droplets, label: "Infinity Plunge Pools" },
  { icon: Wind, label: "Forest Spa Pavilion" },
  { icon: Utensils, label: "Private Dining Spaces" },
  { icon: Star, label: "Digital Detox Villas" },
  { icon: CheckCircle, label: "Naturalist-Led Walks" },
  { icon: Briefcase, label: "Bespoke Butler Service" },
];

export const WAYS_TO_ENJOY = [
  {
    id: 'wellness',
    label: 'Wellness',
    tag: 'Restoration',
    title: 'Personalized Wellness Journeys',
    desc: 'From detox programs to sleep optimization, every wellness plan is crafted after arrival never pre-packaged.',
    cta1: 'Explore Wellness',
    cta2: 'Speak to Concierge',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'experiences',
    label: 'Experiences',
    tag: 'Discovery',
    title: 'Experiences Beyond the Itinerary',
    desc: 'Private picnics, waterfall rituals, and silent sunrise walks designed around your mood, not schedules.',
    cta1: 'View Experiences',
    cta2: 'Customize Stay',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'dining',
    label: 'Dining',
    tag: 'Culinary',
    title: 'Dining Without Menus',
    desc: 'Every meal is a dialogue between you, the chef, and the forest’s seasonal offering.',
    cta1: 'Learn More',
    cta2: 'Request Preferences',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2000&auto=format&fit=crop'
  }
];

export const AWARDS = [
  { id: 1, title: "Condé Nast Traveller — India’s Most Private Eco-Luxury Retreat", icon: Trophy },
  { id: 2, title: "Architectural Digest India — Best Biophilic Hospitality Design", icon: Star },
  { id: 3, title: "World Travel Awards — Leading Sustainable Luxury Resort – South Asia", icon: CheckCircle }
];

export const FAQS = [
  { q: "Is The Avanya suitable for families?", a: "The Avanya is designed primarily for adults seeking deep rest. Select villas accommodate families upon request." },
  { q: "Do you offer Wi-Fi across the property?", a: "Yes high-speed connectivity is available throughout, with optional full digital detox in private villas." },
  { q: "How private is the resort?", a: "Each villa is secluded with natural forest buffers. There are no shared corridors or public lobbies." },
  { q: "Are wellness programs mandatory?", a: "Not at all. Wellness is available by choice never imposed." },
  { q: "How far is the nearest airport?", a: "Calicut International Airport is approximately a 2.5-hour scenic drive. Private transfers can be arranged." }
];
