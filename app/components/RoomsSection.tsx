"use client";

import RoomCard from "../../components/RoomCard";
import Link from "next/link";

const rooms = [
    {
        id: 1,
        imageSrc: "/suits/queen.jpg",
        price: "From ₹45,000 / Night",
        title: "The Canopy Villa",
        description: "Suspended above the forest floor, this villa offers uninterrupted views of mist, canopy, and sky designed for guests who seek elevation, in every sense.",
        cta: "Explore Villa"
    },
    {
        id: 2,
        imageSrc: "/suits/premium.jpg",
        price: "From ₹65,000 / Night",
        title: "The Estate Retreat",
        description: "A restored heritage structure with contemporary minimalism where Travancore history meets modern restraint.",
        cta: "View Retreat"
    },
    {
        id: 3,
        imageSrc: "/suits/duplex.jpg",
        price: "From ₹85,000 / Night",
        title: "The Rainforest Pool Villa",
        description: "Private plunge pool, invisible boundaries, and immersive green silence. Ideal for long, uninterrupted stays.",
        cta: "Discover Sanctuary"
    },
    {
        id: 4,
        imageSrc: "/suits/cabana.jpg",
        price: "From ₹1,50,000 / Night",
        title: "The Avanya Residence",
        description: "Our most private offering. Dedicated butler, curated experiences, and absolute seclusion.Ideal for long, uninterrupted stays.",
        cta: "Request Access"
    },
];

export default function RoomsSection() {
    return (
        <section className="w-full bg-[#F5F2EA] py-24 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">

                {/* Section Heading */}
                <div className="text-center mb-16">
                    <h2 className="font-serif text-6xl text-[#1a1a1a] leading-tight uppercase">
                        Private Villas. Singular Experiences.
                    </h2>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                    {rooms.map((room) => (
                        <RoomCard
                            key={room.id}
                            imageSrc={room.imageSrc}
                            price={room.price}
                            title={room.title}
                            description={room.description}
                            cta={room.cta}
                        />
                    ))}
                </div>

                {/* See All Button */}
                <div className="flex justify-center mt-16">
                    <Link href="#" className="flex items-center gap-2 group">
                        <span className="font-poppins text-[10px] uppercase tracking-widest text-gray-600 group-hover:text-black transition-colors">See All Rooms</span>
                        <span className="text-gray-600 group-hover:text-black transition-colors text-xs">→</span>
                    </Link>
                </div>

            </div>
        </section>
    );
}
