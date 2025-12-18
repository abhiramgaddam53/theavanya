export interface Room {
    id: string;
    title: string;
    description: string;
    price: string;
    imageSrc: string;
    features: string[];
    type: string; // "Guest Room" | "Suite" | "Villa" | "Residence"
    bookedDates?: string[]; // ISO date strings "YYYY-MM-DD"
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
    // FAQ Section Data
    faqTagline: string;
    faqDescription: string;
    faqs: { question: string; answer: string }[];
    // Mock Availability: Dates that are booked
    bookedDates?: string[]; // ISO date strings "YYYY-MM-DD"
}

export const villas: Villa[] = [
    {
        id: 1,
        slug: "the-canopy-villa",
        imageSrc: "/suits/queen.jpg",
        images: ["/suits/queen.jpg", "/suits/premium.jpg", "/suits/duplex.jpg"],
        price: "From ₹45,000 / Night",
        title: "The Canopy Villa",
        bed: "1 King Bed",
        capacity: "Up to 2 Guests",
        description: "Suspended above the forest floor, this villa offers uninterrupted views of mist, canopy, and sky designed for guests who seek elevation, in every sense.",
        cta: "Explore Villa",
        facilities: [
            { title: "Working Desk", description: "Make our well-appointed Hyderabad hotel rooms and suites your business or social hub in India" },
            { title: "Heavenly Beds", description: "All our hotel rooms in Hyderabad, India, feature signature Westin Heavenly Beds™ for a restful sleep" },
            { title: "Smart TVs", description: "Our Hyderabad hotel rooms feature 42-inch smart TVs and modern bathrooms with Heavenly Showers" }
        ],
        availableRooms: [
            { id: "c1", title: "Canopy Suite 101", description: "Best view of the valley with direct sunrise view.", price: "₹45,000", imageSrc: "/suits/queen.jpg", features: ["1 King Bed", "Valley View"], type: "Suite", bookedDates: ["2025-12-25", "2025-12-26"] },
            { id: "c2", title: "Canopy Suite 102", description: "Located near the waterfall, offers soothing sounds.", price: "₹48,000", imageSrc: "/suits/queen.jpg", features: ["1 King Bed", "Waterfall Sound"], type: "Suite", bookedDates: ["2025-12-20", "2025-12-21"] },
            { id: "c3", title: "Canopy Premier", description: "Highest elevated suite with panoramic horizon views.", price: "₹52,000", imageSrc: "/suits/queen.jpg", features: ["1 King Bed", "Panoramic View"], type: "Guest Room", bookedDates: ["2025-12-30", "2025-12-31"] },
            { id: "c4", title: "Canopy Twin", description: "Ideal for friends, featuring two twin beds and forest view.", price: "₹45,000", imageSrc: "/suits/queen.jpg", features: ["2 Twin Beds", "Forest View"], type: "Guest Room", bookedDates: [] },
            { id: "c5", title: "Royal Canopy Suite", description: "Extra spacious suite with private dining area.", price: "₹60,000", imageSrc: "/suits/queen.jpg", features: ["1 King Bed", "Private Dining"], type: "Suite", bookedDates: ["2025-12-24", "2025-12-25"] },
        ],
        faqTagline: "Curious about the heights?",
        faqDescription: "Everything you need to know about your stay in the canopy.",
        faqs: [
            { question: "Is the villa accessible for elderly guests?", answer: "Yes, we provide golf cart services for easy access to the villa, and the interiors are single-level for convenience." },
            { question: "Can we request a private dinner?", answer: "Absolutely. A private candlelight dinner can be arranged on the balcony with a customized menu." },
            { question: "What is the check-in time?", answer: "Check-in is at 2:00 PM and check-out is at 11:00 AM." }
        ],
        bookedDates: [] // Use room-level mostly
    },
    {
        id: 2,
        slug: "the-estate-retreat",
        imageSrc: "/suits/premium.jpg",
        images: ["/suits/premium.jpg", "/suits/queen.jpg", "/suits/cabana.jpg"],
        price: "From ₹65,000 / Night",
        title: "The Estate Retreat",
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
            { id: "e1", title: "Estate Room A", description: "Heritage wing with original woodwork.", price: "₹65,000", imageSrc: "/suits/premium.jpg", features: ["2 Queen Beds", "Heritage Decor"], type: "Guest Room", bookedDates: ["2025-12-22", "2025-12-23", "2025-12-24"] },
            { id: "e2", title: "Estate Room B", description: "Featuring a large veranda overlooking the courtyard.", price: "₹68,000", imageSrc: "/suits/premium.jpg", features: ["2 Queen Beds", "Courtyard View"], type: "Guest Room", bookedDates: ["2025-12-25", "2025-12-26"] },
            { id: "e3", title: "Estate Family Suite", description: "Interconnected rooms perfect for larger families.", price: "₹75,000", imageSrc: "/suits/premium.jpg", features: ["3 Queen Beds", "Interconnected"], type: "Suite", bookedDates: ["2025-12-31"] },
            { id: "e4", title: "Estate Garden Suite", description: "Direct access to the private herb garden.", price: "₹70,000", imageSrc: "/suits/premium.jpg", features: ["2 Queen Beds", "Garden Access"], type: "Suite", bookedDates: [] },
            { id: "e5", title: "Grand Estate Hall", description: "The largest suite in the retreat, fit for royalty.", price: "₹85,000", imageSrc: "/suits/premium.jpg", features: ["2 King Beds", "Royal Suite"], type: "Suite", bookedDates: ["2025-12-24", "2025-12-25"] },
        ],
        faqTagline: "Heritage & Comfort Questions",
        faqDescription: "Details about living in a restored masterpiece.",
        faqs: [
            { question: "Is this villa suitable for families?", answer: "Yes, the Estate Retreat is spacious and designed to accommodate families comfortably." },
            { question: "Are pets allowed?", answer: "We have specific pet-friendly units within the Estate Retreat. Please contact us in advance." }
        ],
        bookedDates: []
    },
    {
        id: 3,
        slug: "the-rainforest-pool-villa",
        imageSrc: "/suits/duplex.jpg",
        images: ["/suits/duplex.jpg", "/suits/cabana.jpg", "/suits/queen.jpg"],
        price: "From ₹85,000 / Night",
        title: "The Rainforest Pool Villa",
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
            { id: "r1", title: "Pool Villa 01", description: "Private infinity pool facing the sunset.", price: "₹85,000", imageSrc: "/suits/duplex.jpg", features: ["1 King Bed", "Private Pool"], type: "Villa", bookedDates: ["2025-12-20", "2025-12-21"] },
            { id: "r2", title: "Pool Villa 02", description: "Secluded garden view with an outdoor shower.", price: "₹85,000", imageSrc: "/suits/duplex.jpg", features: ["1 King Bed", "Garden View"], type: "Villa", bookedDates: ["2025-12-25"] },
            { id: "r3", title: "Pool Villa 03", description: "Closest to the spa and wellness center.", price: "₹88,000", imageSrc: "/suits/duplex.jpg", features: ["1 King Bed", "Near Spa"], type: "Villa", bookedDates: [] },
            { id: "r4", title: "Rainforest Duplex", description: "Two-level villa with separate living and sleeping areas.", price: "₹95,000", imageSrc: "/suits/duplex.jpg", features: ["1 King Bed", "Duplex"], type: "Villa", bookedDates: ["2025-12-31"] },
            { id: "r5", title: "Pool Suite Premium", description: "Extra large pool deck for private sunbathing.", price: "₹92,000", imageSrc: "/suits/duplex.jpg", features: ["1 King Bed", "Large Deck"], type: "Suite", bookedDates: ["2025-12-24", "2025-12-25"] },
        ],
        faqTagline: "Pool & Privacy Queries",
        faqDescription: "Common questions about our most immersive nature experience.",
        faqs: [
            { question: "Is the pool heated?", answer: "Yes, the private plunge pool is temperature-controlled for your comfort." },
            { question: "How private is the villa?", answer: "The villa is designed with 'invisible boundaries' ensuring maximum privacy while being immersed in nature." }
        ],
        bookedDates: []
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
            { id: "a1", title: "Residence Main", description: "The primary residence with expansive living halls.", price: "₹1,50,000", imageSrc: "/suits/cabana.jpg", features: ["3 King Beds", "Butler Service"], type: "Residence", bookedDates: ["2025-12-31"] },
            { id: "a2", title: "Residence Wing A", description: "Additional wing for larger entourages.", price: "₹1,20,000", imageSrc: "/suits/cabana.jpg", features: ["2 King Beds", "Private Entrance"], type: "Residence", bookedDates: ["2025-12-25"] },
            { id: "a3", title: "The Presidential Block", description: "Ultimate security and luxury for VVIPs.", price: "₹1,80,000", imageSrc: "/suits/cabana.jpg", features: ["4 King Beds", "High Security"], type: "Residence", bookedDates: [] },
            { id: "a4", title: "Private Hilltop Residence", description: "Located on the highest peak for unmatched views.", price: "₹2,00,000", imageSrc: "/suits/cabana.jpg", features: ["3 King Beds", "Hilltop View"], type: "Residence", bookedDates: ["2025-12-24"] },
        ],
        faqTagline: "Residence Essentials",
        faqDescription: "Information about our most exclusive and private offering.",
        faqs: [
            { question: "Does the residence come with a butler?", answer: "Yes, The Avanya Residence includes a dedicated butler to assist you throughout your stay." },
            { question: "Can we host events here?", answer: "Small, private gatherings can be arranged. Please discuss your requirements with our concierge." }
        ],
        bookedDates: []
    },
    // New Villas for Sorting Demonstration
    {
        id: 5,
        slug: "forest-edge-suite",
        imageSrc: "/suits/premium.jpg",
        images: ["/suits/premium.jpg", "/suits/queen.jpg", "/suits/duplex.jpg"],
        price: "From ₹40,000 / Night",
        title: "Forest Edge Suite",
        bed: "1 Queen Bed",
        capacity: "Up to 2 Guests",
        description: "Perched on the edge of the dense woods, this suite offers an intimate connection with nature, perfect for solo travelers or couples.",
        cta: "View Suite",
        facilities: [
            { title: "Nature View", description: "Unobstructed views of the lush forest from your window." },
            { title: "Cozy Interiors", description: "Warm, wooden interiors designed for maximum comfort." },
            { title: "Private balcony", description: "A secluded balcony to enjoy the morning birdsong." }
        ],
        availableRooms: [
            { id: "fe1", title: "Forest Suite A", description: "Ground floor suite with direct forest path access.", price: "₹40,000", imageSrc: "/suits/premium.jpg", features: ["1 Queen Bed", "Forest Access"], type: "Guest Room", bookedDates: ["2025-12-20", "2025-12-21"] },
            { id: "fe2", title: "Forest Suite B", description: "Upper level suite with elevated views.", price: "₹42,000", imageSrc: "/suits/premium.jpg", features: ["1 Queen Bed", "Elevated View"], type: "Guest Room", bookedDates: ["2025-12-25"] },
        ],
        faqTagline: "Forest Stay Questions",
        faqDescription: "Details about staying on the edge of the wilderness.",
        faqs: [
            { question: "Is it safe at night?", answer: "Yes, the area is secure and patrolled, though we recommend keeping balcony doors closed after dark." },
            { question: "Is there room service?", answer: "Yes, 24-hour room service is available." }
        ],
        bookedDates: []
    },
    {
        id: 6,
        slug: "lakeside-cabana",
        imageSrc: "/suits/cabana.jpg",
        images: ["/suits/cabana.jpg", "/suits/queen.jpg"],
        price: "From ₹55,000 / Night",
        title: "Lakeside Cabana",
        bed: "1 King Bed",
        capacity: "Up to 2 Guests",
        description: "A romantic hideaway by the serene lake. Enjoy the reflected stars in the water and the gentle breeze in this open-air designed cabana.",
        cta: "Discover Romance",
        facilities: [
            { title: "Lake Front", description: "Direct access to the lakeshore." },
            { title: "Open Air Deck", description: "Spacious deck for dining under the stars." },
            { title: "Outdoor Jacuzzi", description: "Private jacuzzi with views of the lake." }
        ],
        availableRooms: [
            { id: "lc1", title: "Cabana 01", description: "Sunrise view directly over the lake.", price: "₹55,000", imageSrc: "/suits/cabana.jpg", features: ["1 King Bed", "Sunrise View"], type: "Villa", bookedDates: ["2025-12-22", "2025-12-23"] },
            { id: "lc2", title: "Cabana 02", description: "Secluded spot near the wetland garden.", price: "₹58,000", imageSrc: "/suits/cabana.jpg", features: ["1 King Bed", "Garden Side"], type: "Villa", bookedDates: ["2025-12-31"] }
        ],
        faqTagline: "Lakeside Living",
        faqDescription: "Questions about our waterfront cabanas.",
        faqs: [
            { question: "Is swimming allowed in the lake?", answer: "For safety reasons, swimming in the lake is not permitted, but you have your private jacuzzi." },
            { question: "Are there mosquitos?", answer: "We treat the area regularly, and cabanas are equipped with repellents and nets." }
        ],
        bookedDates: []
    },
    {
        id: 7,
        slug: "sky-view-attic",
        imageSrc: "/suits/queen.jpg",
        images: ["/suits/queen.jpg", "/suits/duplex.jpg"],
        price: "From ₹35,000 / Night",
        title: "Sky View Attic",
        bed: "1 Queen Bed",
        capacity: "Up to 2 Guests",
        description: "A cozy, loft-style accommodation with skylights above the bed. Watch the rain or stars from the comfort of your duvet.",
        cta: "View Attic",
        facilities: [
            { title: "Skylights", description: "Glass roof sections for stargazing." },
            { title: "Compact Luxury", description: "Efficiently designed space with all modern amenities." },
            { title: "Reading Nook", description: "A comfortable corner for book lovers." }
        ],
        availableRooms: [
            { id: "sv1", title: "Attic Room East", description: "Faces the morning sun.", price: "₹35,000", imageSrc: "/suits/queen.jpg", features: ["1 Queen Bed", "Morning Sun"], type: "Guest Room", bookedDates: ["2025-12-25", "2025-12-26"] },
            { id: "sv2", title: "Attic Room West", description: "Beautiful sunset hues.", price: "₹35,000", imageSrc: "/suits/queen.jpg", features: ["1 Queen Bed", "Sunset View"], type: "Guest Room", bookedDates: ["2025-12-20"] }
        ],
        faqTagline: "Loft Details",
        faqDescription: "What you need to know about the attic experience.",
        faqs: [
            { question: "Is there an elevator?", answer: "Access is via a dedicated staircase." },
            { question: "Can the skylights be covered?", answer: "Yes, automated blinds are provided." }
        ],
        bookedDates: []
    },
    {
        id: 8,
        slug: "mountain-chalet",
        imageSrc: "/suits/duplex.jpg",
        images: ["/suits/duplex.jpg", "/suits/premium.jpg"],
        price: "From ₹75,000 / Night",
        title: "Mountain Chalet",
        bed: "2 King Beds",
        capacity: "Up to 4 Guests",
        description: "Rough-hewn luxury perched on the rocky outcrops. A robust stone chalet offering panoramic views of the mountain range.",
        cta: "Explore Chalet",
        facilities: [
            { title: "Stone Architecture", description: "Natural stone walls keeping the interior cool in summer and warm in winter." },
            { title: "Fireplace", description: "A functional wood-burning fireplace in the living area." },
            { title: "Wraparound Deck", description: "360-degree views of the surrounding hills." }
        ],
        availableRooms: [
            { id: "mc1", title: "Chalet Alpha", description: "Highest point on the property.", price: "₹80,000", imageSrc: "/suits/duplex.jpg", features: ["2 King Beds", "Highest View"], type: "Villa", bookedDates: ["2025-12-24", "2025-12-25"] },
            { id: "mc2", title: "Chalet Beta", description: "Includes a private barbecue pit.", price: "₹75,000", imageSrc: "/suits/duplex.jpg", features: ["2 King Beds", "BBQ Pit"], type: "Villa", bookedDates: ["2025-12-31"] }
        ],
        faqTagline: "Chalet Questions",
        faqDescription: "About the mountain living experience.",
        faqs: [
            { question: "Is firewood provided?", answer: "Yes, we provide seasoned firewood daily." },
            { question: "How far is it from the main reception?", answer: "It is a 10-minute buggy ride or a 20-minute scenic walk." }
        ],
        bookedDates: []
    }
];
