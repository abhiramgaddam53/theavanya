"use client";

import Link from "next/link";
import CommonRoomCard from "../../components/RoomCard";
import Button from "@/components/Button";
import { villas } from "@/app/data/villas";

export default function LuxuryRooms() {
    // Select specific villas to display: Canopy Villa (ID 1) and Rainforest Pool Villa (ID 3)
    const selectedVillas = villas.filter(v => v.id === 1 || v.id === 3);

    return (
        <section className="w-full bg-primary-bg py-24 px-6 md:px-16">
            <div className="max-w-[1400px] mx-auto">

                {/* Header */}
                <div className="flex items-center justify-between mb-12 gap-8">
                    <h2 className="font-serif text-5xl tracking-tighter leading-tighter text-[#1a1a1a]">
                        Spaces Designed for Stillness.
                    </h2>


                    <Button
                        text="Compare Villas"
                        variant="outline-rounded-dark"
                        href="/booking/accommodations"
                    />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {selectedVillas.map((villa) => (
                        <Link href={`/booking/accommodations/${villa.slug}`} key={villa.id} className="block group">
                            <CommonRoomCard
                                name={villa.title}
                                image={villa.imageSrc}
                                capacity={villa.capacity}
                                bed={villa.bed}
                            />
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}
