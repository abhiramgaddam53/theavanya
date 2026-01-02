import {
  Star,
  CheckCircle,
  Briefcase,
  Droplets,
  Utensils,
  Dumbbell,
  Wind,
  Trophy,
  Award
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
    category: "Breathing Space",
    title: "5 Acres Of Green, For Just Three Units",
    image: "/booking/over-view/applecards/Ayurvedic Bio Hacking.jpg",
    desc: "A guided journey into stillness combining forest bathing, breathwork, and Ayurvedic restoration crafted for deep mental reset.",
    cta: "View Retreat →"
  },
  {
    id: 2,
    category: "Farm Life",
    title: "Walk Through Fruit Trees, Not Corridors",
    image: "/booking/over-view/applecards/Forest Immersion Retreat.jpg",
    desc: "Every meal is a conversation. Our chef designs bespoke dishes daily based on your preferences, the harvest, and intuition.",
    cta: "Learn More →"
  },
  {
    id: 3,
    category: "Bonfire Evenings",
    title: "Barbecue, Stories, And A Sky Full Of Stars",
    image: "/booking/over-view/applecards/Digital Detox Management.JPG",
    desc: "Activate the in-villa Digital Detox Switch and disconnect entirely; Wi-Fi, EMF signals, and distractions fade into silence.",
    cta: "Experience Silence →"
  },
  {
    id: 4,
    category: "Birdwatching",
    title: "Wake Up To Hornbills, Not Horns",
    image: "/booking/over-view/applecards/Ayurvedic Bio Hacking.jpg",
    desc: "Precision wellness rituals combining ancient Ayurvedic wisdom with modern diagnostics tailored to your body’s rhythms.",
    cta: "Explore Treatments →"
  },
  {
    id: 5,
    category: "Intimate Celebrations",
    title: "Shoots, Haldi, Proposals, And Tiny Weddings",
    image: "/booking/over-view/applecards/Guided Forest.JPG",
    desc: "Walk ancient trails with naturalists who understand the forest as a living archive—not an attraction.",
    cta: "View Trails →"
  },
  {
    id: 6,
    category: "Digital Detox",
    title: "Put Your Phone On Airplane, Not Your Life",
    image: "/booking/over-view/applecards/No Menu Dining.JPG",
    desc: "Arrive by private drive or helipad transfer seamlessly arranged to preserve your privacy from the first moment.",
    cta: "Plan Arrival →"
  },
  {
    id: 7,
    category: "Pet Friendly",
    title: "A Farm Stay Your Dog Will Approve",
    image: "/booking/over-view/applecards/Private Transfers.JPG",
    desc: "Arrive by private drive or helipad transfer seamlessly arranged to preserve your privacy from the first moment.",
    cta: "Plan Arrival →"
  },
  {
    id: 8,
    category: "Close To Hyderabad",
    title: "45–60 Minutes From The City, A World Away In Mind",
    image: "/booking/over-view/applecards/Digital Detox Management.JPG",
    desc: "Arrive by private drive or helipad transfer seamlessly arranged to preserve your privacy from the first moment.",
    cta: "Plan Arrival →"
  }
];

export const AMENITIES = [
  { icon: Droplets, label: "Private cabins" },
  { icon: Wind, label: "Bonfire pit" },
  { icon: Utensils, label: "Organic farm access" },
  { icon: Star, label: "Treehouse deck" },
  { icon: CheckCircle, label: "Event‑friendly shed" },
  { icon: Briefcase, label: "Clean washrooms" },
];

export const WAYS_TO_ENJOY = [
  {
    id: 'Stays',
    label: 'Stays',
    tag: 'Where You’ll Sleep',
    title: 'Cabins That Feel Like A Friend’s Farmhouse',
    desc: 'Three thoughtfully designed stays Outhouse Cabin, Jungle Lodge Cottage, and Treehouse Cabin each with its own mood, deck, and view, so you can match your stay to your kind of escape.',
    cta1: 'Explore Wellness',
    cta2: 'Speak to Concierge',
    image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop'
  },
  {
    id: 'Experiences',
    label: 'Experiences',
    tag: 'What You’ll Do',
    title: 'From Sunrise Walks To Midnight Bonfires',
    desc: 'Start your day with birds and plantation walks, spend afternoons lazing in hammocks, and wind down with barbecue, music, and stargazing around the fire.',
    cta1: 'View Experiences',
    cta2: 'Customize Stay',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000&auto=format&fit=crop'
  },
  {
    id: 'Gatherings',
    label: 'Gatherings',
    tag: 'How You’ll Celebrate',
    title: `Intimate Functions, Big Memories`,
    desc: 'Host pre‑wedding shoots, haldi, birthdays, or small corporate offsites in a setup that gives you open lawns, a shed space, and the feel of a private farm without leaving Hyderabad.',
    cta1: 'Learn More',
    cta2: 'Request Preferences',
    image: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=2000&auto=format&fit=crop'
  }
];

export const AWARDS = [
  { id: 1, title: "4/5 on Tripadvisor ", icon: Trophy },
   
];

export const FAQS = [
  { q: "How far is Hornbill Farm Retreat from Hyderabad city?", a: "The retreat is located near Basuragadi Village/Kompally, roughly 45–60 minutes from central Hyderabad depending on traffic, making it ideal for quick weekend escapes." },
  { q: "What types of stays can I book?", a: "You can choose between the Outhouse Cabin (modern modular cabin), the Jungle Lodge Cottage (jungle‑themed, gathering‑friendly), and the Treehouse Cabin (elevated, plantation‑view stay)." },
  { q: "Is Hornbill suitable for events and shoots?", a: "Yes, the property frequently hosts pre‑wedding shoots, haldi functions, small celebrations, and photoshoots, with open lawns, a shed area, and camera‑friendly architecture." },
  { q: "What amenities are included with the stay?", a: "Guests get nature‑view cabins, access to the farm and plantation, bonfire and barbecue arrangements on request, clean washrooms, basic kitchen facilities, and on‑site parking." },
  { q: "Is the retreat pet‑friendly?", a: "The Jungle Lodge Cottage is mentioned as pet‑friendly, but guests should confirm pet policies and any additional charges or rules at the time of booking." }
];
