"use client";

import CommonRoomCard from "../../components/RoomCard";
import Button from "@/components/Button";
import Link from "next/link";

const rooms = [
    {
        id: 1,
        imageSrc: "/suits/queen.jpg",
        price: "From ₹45,000 / Night",
        title: "The Canopy Villa",
        bed: "1 King Bed",
        capacity: "Up to 2 Guests",
        description: "Suspended above the forest floor, this villa offers uninterrupted views of mist, canopy, and sky designed for guests who seek elevation, in every sense.",
        cta: "Explore Villa"
    },
    {
        id: 2,
        imageSrc: "/suits/premium.jpg",
        price: "From ₹65,000 / Night",
        title: "The Estate Retreat",
        bed: "2 Queen Beds",
        capacity: "Up to 4 Guests",
        description: "A restored heritage structure with contemporary minimalism where Travancore history meets modern restraint.",
        cta: "View Retreat"
    },
    {
        id: 3,
        imageSrc: "/suits/duplex.jpg",
        price: "From ₹85,000 / Night",
        title: "The Rainforest Pool Villa",
        bed: "1 King Bed",
        capacity: "Up to 3 Guests",
        description: "Private plunge pool, invisible boundaries, and immersive green silence. Ideal for long, uninterrupted stays.",
        cta: "Discover Sanctuary"
    },
    {
        id: 4,
        imageSrc: "/suits/cabana.jpg",
        price: "From ₹1,50,000 / Night",
        title: "The Avanya Residence",
        bed: "3 King Beds",
        capacity: "Up to 6 Guests",
        description: "Our most private offering. Dedicated butler, curated experiences, and absolute seclusion.Ideal for long, uninterrupted stays.",
        cta: "Request Access"
    },
];

export default function RoomsSection() {
    return (
        <section className="w-full bg-primary-bg py-24 px-6 md:px-16">
            <div className="max-w-[1400px] mx-auto">

                {/* Section Heading */}
                <div className="mb-16">
                    <h2 className="font-serif text-5xl tracking-tighter text-[#1a1a1a] leading-tight">
                        Private Villas.<br /> Singular Experiences.
                    </h2>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                    {rooms.map((room) => (
                        <CommonRoomCard
                            key={room.id}
                            image={room.imageSrc}
                            name={room.title}
                            price={room.price}
                            description={room.description}
                            cta={room.cta}
                            bed={room.bed}
                            capacity={room.capacity}
                        />
                    ))}
                </div>

                {/* See All Button */}
                <div className="flex justify-center mt-16">
                    <Button
                        text="See All Rooms"
                        variant="link-arrow"
                        size="none"
                        href="#"
                    />
                </div>

            </div>
        </section>
    );
}
