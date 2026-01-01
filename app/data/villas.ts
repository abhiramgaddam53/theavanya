export interface Room {
    id: string;
    title: string;
    description: string;
    price: string;
    imageSrc: string;
    features: string[];
    type: string; // "Guest Room" | "Suite" | "Villa" | "Residence"
    bookedDates?: string[];
}

export interface Villa {
    id: number;
    slug: string;
    title: string;
    imageSrc: string; // Keep mainly for thumbnail
    images: string[]; // For carousel
    price: string;
    bed: string;
    capacity: string;
    description: string;
    cta: string;
    facilities: { title: string; description: string }[];
    availableRooms: Room[];
    bookedDates?: string[];
    // FAQ Section Data
    faqTagline: string;
    faqDescription: string;
    faqs: { question: string; answer: string }[];
}

export const villas: Villa[] = [
    {
        id: 1,
        slug: "outhouse-Cabin",
        imageSrc: "/suits/queen.jpg",
        images: ["/suits/queen.jpg", "/suits/premium.jpg", "/suits/duplex.jpg"],
        price: "From ₹45,000 / Night",
        title: "Outhouse Cabin",
        bed: "1 King Bed",
        capacity: "Up to 2 Guests",
        description: "Suspended above the forest floor, this villa offers uninterrupted views of mist, canopy, and sky designed for guests who seek elevation, in every sense.",
        cta: "Explore Villa",
        facilities: [
            { title: "Working Desk", description: "Make our well-appointed Hyderabad hotel rooms and suites your business or social hub in India" },
            { title: "Heavenly Beds", description: "All our hotel rooms in Hyderabad, India, feature signature avanya Heavenly Beds™ for a restful sleep" },
            { title: "Smart TVs", description: "Our Hyderabad hotel rooms feature 42-inch smart TVs and modern bathrooms with Heavenly Showers" }
        ],
        availableRooms: [
            { id: "c1", title: "Outhouse Cabin 101", description: "Best view of the valley with direct sunrise view.", price: "₹45,000", imageSrc: "/suits/queen.jpg", features: ["1 King Bed", "Valley View"], type: "Suite" },
            { id: "c2", title: "Outhouse Cabin 102", description: "Located near the waterfall, offers soothing sounds.", price: "₹48,000", imageSrc: "/suits/queen.jpg", features: ["1 King Bed", "Waterfall Sound"], type: "Suite" },
            { id: "c3", title: "Outhouse Cabin Premier", description: "Highest elevated suite with panoramic horizon views.", price: "₹52,000", imageSrc: "/suits/queen.jpg", features: ["1 King Bed", "Panoramic View"], type: "Guest Room" },
            { id: "c4", title: "Outhouse Cabin Twin", description: "Ideal for friends, featuring two twin beds and forest view.", price: "₹45,000", imageSrc: "/suits/queen.jpg", features: ["2 Twin Beds", "Forest View"], type: "Guest Room" },
            { id: "c5", title: "Royal Outhouse Cabin Suite", description: "Extra spacious suite with private dining area.", price: "₹60,000", imageSrc: "/suits/queen.jpg", features: ["1 King Bed", "Private Dining"], type: "Suite" },
        ],
        faqTagline: "Curious about the heights?",
        faqDescription: "Everything you need to know about your stay in the canopy.",
        faqs: [
            { question: "Is the villa accessible for elderly guests?", answer: "Yes, we provide golf cart services for easy access to the villa, and the interiors are single-level for convenience." },
            { question: "Can we request a private dinner?", answer: "Absolutely. A private candlelight dinner can be arranged on the balcony with a customized menu." },
            { question: "What is the check-in time?", answer: "Check-in is at 2:00 PM and check-out is at 11:00 AM." }
        ]
    },
    {
        id: 2,
        slug: "jungle-lodge-cottage",
        imageSrc: "/suits/premium.jpg",
        images: ["/suits/premium.jpg", "/suits/queen.jpg", "/suits/cabana.jpg"],
        price: "From ₹65,000 / Night",
        title: "Jungle Lodge Cottage",
        bed: "2 Queen Beds",
        capacity: "Up to 4 Guests",
        description: "A restored heritage structure with contemporary minimalism where Travancore history meets modern restraint.",
        cta: "View Retreat",
        facilities: [
            { title: "Heritage Decor", description: "Experience the charm of traditional Travancore architecture blended with modern comforts." },
            { title: "Spacious Living", description: "Generous living areas designed for families and groups to relax together." },
            { title: "Private Garden", description: "Enjoy your own private garden space, perfect for morning tea or evening relaxation." }
        ],
        availableRooms: [
            { id: "e1", title: "Jungle Lodge Cottage A", description: "Heritage wing with original woodwork.", price: "₹65,000", imageSrc: "/suits/premium.jpg", features: ["2 Queen Beds", "Heritage Decor"], type: "Guest Room" },
            { id: "e2", title: "Jungle Lodge Cottage B", description: "Featuring a large veranda overlooking the courtyard.", price: "₹68,000", imageSrc: "/suits/premium.jpg", features: ["2 Queen Beds", "Courtyard View"], type: "Guest Room" },
            { id: "e3", title: "Jungle Lodge Cottage Family Suite", description: "Interconnected rooms perfect for larger families.", price: "₹75,000", imageSrc: "/suits/premium.jpg", features: ["3 Queen Beds", "Interconnected"], type: "Suite" },
            { id: "e4", title: "Jungle Lodge Cottage Garden Suite", description: "Direct access to the private herb garden.", price: "₹70,000", imageSrc: "/suits/premium.jpg", features: ["2 Queen Beds", "Garden Access"], type: "Suite" },
            { id: "e5", title: "Grand Jungle Lodge Cottage Hall", description: "The largest suite in the retreat, fit for royalty.", price: "₹85,000", imageSrc: "/suits/premium.jpg", features: ["2 King Beds", "Royal Suite"], type: "Suite" },
        ],
        faqTagline: "Heritage & Comfort Questions",
        faqDescription: "Details about living in a restored masterpiece.",
        faqs: [
            { question: "Is this villa suitable for families?", answer: "Yes, the Estate Retreat is spacious and designed to accommodate families comfortably." },
            { question: "Are pets allowed?", answer: "We have specific pet-friendly units within the Estate Retreat. Please contact us in advance." }
        ]
    },
    {
        id: 3,
        slug: "treehouse-cabin",
        imageSrc: "/suits/duplex.jpg",
        images: ["/suits/duplex.jpg", "/suits/cabana.jpg", "/suits/queen.jpg"],
        price: "From ₹85,000 / Night",
        title: "Treehouse Cabin",
        bed: "1 King Bed",
        capacity: "Up to 3 Guests",
        description: "Private plunge pool, invisible boundaries, and immersive green silence. Ideal for long, uninterrupted stays.",
        cta: "Discover Sanctuary",
        facilities: [
            { title: "Private Plunge Pool", description: "Immerse yourself in luxury with your own private temperature-controlled plunge pool." },
            { title: "Nature Integration", description: "Seamless transition between indoor luxury and the vibrant rainforest outside." },
            { title: "Butler Service", description: "Personalized butler service to cater to your every need during your stay." }
        ],
        availableRooms: [
            { id: "r1", title: "Treehouse Cabin 01", description: "Private infinity pool facing the sunset.", price: "₹85,000", imageSrc: "/suits/duplex.jpg", features: ["1 King Bed", "Private Pool"], type: "Villa" },
            { id: "r2", title: "Treehouse Cabin 02", description: "Secluded garden view with an outdoor shower.", price: "₹85,000", imageSrc: "/suits/duplex.jpg", features: ["1 King Bed", "Garden View"], type: "Villa" },
            { id: "r3", title: "Treehouse Cabin 03", description: "Closest to the spa and wellness center.", price: "₹88,000", imageSrc: "/suits/duplex.jpg", features: ["1 King Bed", "Near Spa"], type: "Villa" },
            { id: "r4", title: "Rainforest Duplex", description: "Two-level villa with separate living and sleeping areas.", price: "₹95,000", imageSrc: "/suits/duplex.jpg", features: ["1 King Bed", "Duplex"], type: "Villa" },
            { id: "r5", title: "Treehouse Cabin Pool Suite Premium", description: "Extra large pool deck for private sunbathing.", price: "₹92,000", imageSrc: "/suits/duplex.jpg", features: ["1 King Bed", "Large Deck"], type: "Suite" },
        ],
        faqTagline: "Pool & Privacy Queries",
        faqDescription: "Common questions about our most immersive nature experience.",
        faqs: [
            { question: "Is the pool heated?", answer: "Yes, the private plunge pool is temperature-controlled for your comfort." },
            { question: "How private is the villa?", answer: "The villa is designed with 'invisible boundaries' ensuring maximum privacy while being immersed in nature." }
        ]
    },
    {
        id: 4,
        slug: "the-avanya-residence",
        imageSrc: "/suits/cabana.jpg",
        images: ["/suits/cabana.jpg", "/suits/duplex.jpg", "/suits/premium.jpg"],
        price: "From ₹1,50,000 / Night",
        title: "The Avanya Residence",
        bed: "3 King Beds",
        capacity: "Up to 6 Guests",
        description: "Our most private offering. Dedicated butler, curated experiences, and absolute seclusion.Ideal for long, uninterrupted stays.",
        cta: "Request Access",
        facilities: [
            { title: "Absolute Privacy", description: "Designed for ultimate seclusion, ensuring a disturbance-free stay." },
            { title: "Chef on Call", description: "Enjoy gourmet meals prepared by a private chef in your residence." },
            { title: "Exclusive Experiences", description: "Curated local experiences and tours arranged specifically for you." }
        ],
        availableRooms: [
            { id: "a1", title: "Residence Main", description: "The primary residence with expansive living halls.", price: "₹1,50,000", imageSrc: "/suits/cabana.jpg", features: ["3 King Beds", "Butler Service"], type: "Residence" },
            { id: "a2", title: "Residence Wing A", description: "Additional wing for larger entourages.", price: "₹1,20,000", imageSrc: "/suits/cabana.jpg", features: ["2 King Beds", "Private Entrance"], type: "Residence" },
            { id: "a3", title: "The Presidential Block", description: "Ultimate security and luxury for VVIPs.", price: "₹1,80,000", imageSrc: "/suits/cabana.jpg", features: ["4 King Beds", "High Security"], type: "Residence" },
            { id: "a4", title: "Private Hilltop Residence", description: "Located on the highest peak for unmatched views.", price: "₹2,00,000", imageSrc: "/suits/cabana.jpg", features: ["3 King Beds", "Hilltop View"], type: "Residence" },
        ],
        faqTagline: "Residence Essentials",
        faqDescription: "Information about our most exclusive and private offering.",
        faqs: [
            { question: "Does the residence come with a butler?", answer: "Yes, The Avanya Residence includes a dedicated butler to assist you throughout your stay." },
            { question: "Can we host events here?", answer: "Small, private gatherings can be arranged. Please discuss your requirements with our concierge." }
        ]
    },
    {
        id: 5,
        slug: "the-skyline-suite",
        imageSrc: "/suits/premium.jpg",
        images: ["/suits/premium.jpg", "/suits/queen.jpg", "/suits/duplex.jpg"],
        price: "From ₹55,000 / Night",
        title: "The Skyline Suite",
        bed: "1 King Bed",
        capacity: "Up to 2 Guests",
        description: "Twelve feet of glass, sweeping city views, and minimal interiors designed for those who prefer their luxury with altitude.",
        cta: "Book Skyline",
        facilities: [
            { title: "City Vista", description: "A private terrace framing Hyderabad's skyline after dusk." },
            { title: "Chef's Pantry", description: "On-call culinary team for in-suite tasting menus." },
            { title: "Wellness Nook", description: "In-room stretch space with bespoke aromatherapy." }
        ],
        availableRooms: [
            { id: "s1", title: "Skyline One", description: "Large terrace with panoramic bay windows.", price: "₹55,000", imageSrc: "/suits/premium.jpg", features: ["1 King Bed", "City View"], type: "Suite" },
            { id: "s2", title: "Skyline Two", description: "Connected to a private lounge for meetings.", price: "₹60,000", imageSrc: "/suits/queen.jpg", features: ["1 King Bed", "Lounge Access"], type: "Suite" }
        ],
        faqTagline: "City & Calm",
        faqDescription: "Answers for guests who crave a skyline view without sacrificing serenity.",
        faqs: [
            { question: "Is the terrace climate controlled?", answer: "Yes, the terrace has heating and misting for every season." },
            { question: "Do you offer skyline picnic service?", answer: "A curated picnic for two can be set up on the terrace upon request." }
        ]
    },
    {
        id: 6,
        slug: "the-horizon-loft",
        imageSrc: "/suits/duplex.jpg",
        images: ["/suits/duplex.jpg", "/suits/cabana.jpg", "/suits/premium.jpg"],
        price: "From ₹72,000 / Night",
        title: "The Horizon Loft",
        bed: "1 King Bed + Daybed",
        capacity: "Up to 3 Guests",
        description: "Open-plan living, private fireplace, and seamless indoor-outdoor lounging for the modern traveler.",
        cta: "View Loft",
        facilities: [
            { title: "Fireplace Lounge", description: "Custom-built fireplace with artisan seating." },
            { title: "Outdoor Gallery", description: "Wrap-around deck with sculptural lighting." },
            { title: "Music Ready", description: "High-end audio system paired with curated playlists." }
        ],
        availableRooms: [
            { id: "l1", title: "Horizon Loft", description: "Dual-level loft combining living and sleeping areas.", price: "₹72,000", imageSrc: "/suits/duplex.jpg", features: ["1 King Bed", "Fireplace"], type: "Loft" },
            { id: "l2", title: "Loft Terrace", description: "Outdoor daybed with waterfall soundscape.", price: "₹75,000", imageSrc: "/suits/cabana.jpg", features: ["1 King Bed", "Terrace"], type: "Loft" }
        ],
        faqTagline: "Lofty Expectations",
        faqDescription: "Why guests keep returning to the loft experience.",
        faqs: [
            { question: "Does the loft have private dining?", answer: "Yes, a private chef can dine you on the terrace or in the loft." },
            { question: "Can we request DJ lighting?", answer: "A lighting designer can configure the space for intimate celebrations." }
        ]
    },
];
