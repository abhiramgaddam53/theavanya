"use client";

import Image from "next/image";
import Link from "next/link";
import CommonRoomCard from "../../components/RoomCard";
import Button from "@/components/Button";

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


                    <Button
                        text="Compare Villas"
                        variant="outline-rounded-dark"
                        href="#"
                    />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {rooms.map((room) => (
                        <CommonRoomCard
                            key={room.id}
                            name={room.name}
                            image={room.image}
                            capacity={room.capacity}
                            bed={room.bed}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
