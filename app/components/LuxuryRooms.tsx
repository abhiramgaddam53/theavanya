"use client";

import Image from "next/image";
import Link from "next/link";

const rooms = [
    {
        id: 1,
        name: "Canopy Villa",
        capacity: "Up to 2 Guests",
        bed: "1 King Bed",
        image: "/suits/queen.jpg",
    },
    {
        id: 2,
        name: "Rainforest Pool Villa",
        capacity: "Up to 3 Guests",
        bed: "1 King Bed",
        image: "/suits/duplex.jpg",
    },
];

export default function LuxuryRooms() {
    return (
        <section className="w-full bg-[#F5F2EA] py-24 px-6 md:px-16">
            <div className="max-w-[1400px] mx-auto">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8">
                    <h2 className="font-serif text-6xl text-[#1a1a1a]">
                        Spaces Designed for Stillness.
                    </h2>

                    <Link href="#" className="group">
                        <div className="border border-[#1a1a1a]/30 rounded-full px-8 py-3 transition-colors hover:bg-[#1a1a1a] text-black hover:text-white">
                            <span className="font-poppins text-xs uppercase tracking-widest">Compare Villas</span>
                        </div>
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {rooms.map((room) => (
                        <div key={room.id} className="relative aspect-[4/3] w-full overflow-hidden group cursor-pointer">
                            <Image
                                src={room.image}
                                alt={room.name}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex items-end justify-between text-white">

                                {/* Room Name */}
                                <h3 className="font-poppins text-xl md:text-2xl font-light tracking-wide">
                                    {room.name}
                                </h3>

                                {/* Details */}
                                <div className="flex items-center gap-6 text-xs md:text-sm font-poppins font-light opacity-90">
                                    {/* Bed */}
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" />
                                            <path d="M2 10a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2z" />
                                            <path d="M4 12v-2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2" />
                                        </svg>
                                        <span>{room.bed}</span>
                                    </div>

                                    {/* Guests */}
                                    <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                            <circle cx="12" cy="7" r="4" />
                                        </svg>
                                        <span>{room.capacity}</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
