"use client";

import Link from "next/link";
import CommonRoomCard from "../../components/RoomCard";
import Button from "@/components/Button";
import { villas } from "@/app/data/villas";

export default function LuxuryRooms() {
    // Select specific villas to display: Canopy Villa (ID 1) and Rainforest Pool Villa (ID 3)
    const selectedVillas = villas.filter(v => v.id === 1 || v.id === 5);

    return (
        <section className="w-full bg-primary-bg py-24 px-6 md:px-16">
            <div className="max-w-[1400px] mx-auto">

                {/* Header */}
                <div className="flex items-center justify-between mb-12 gap-8">
                    <h2 className="font-serif text-[28px] md:text-5xl tracking-tighter leading-tighter text-[#1a1a1a]">
                        Spaces Designed for Stillness.
                    </h2>


                    <div className="md:hidden">
                    {/* <Button
                    text="Compare Villas"
                    variant="outline-rounded-dark"
                    href="/booking/accommodations"
                    size="sm"
                    /> */}
                    <Link href={"/booking/accommodations"} className="
                    font-poppins font-medium transition-colors duration-300 w-28 cursor-pointer inline-flex items-center justify-start tracking-widest relative overflow-hidden group
                    bg-transparent px-4 py-2 text-[8px] border border-[#1a1a1a]/30 text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white rounded-full" > <button> Compare Villas </button> </Link>


                </div>

                {/* md and above → NO size prop */}
                <div className="hidden md:block">
                    <Button
                    text="Compare Villas"
                    variant="outline-rounded-dark"
                    href="/booking/accommodations"
                    />
                </div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedVillas.map((villa) => (
                        <Link href={`/booking/accommodations/${villa.slug}`} key={villa.id} className="block group">
                            <CommonRoomCard
                                name={villa.title}
                                image={villa.imageSrc}
                                capacity={villa.capacity}
                                bed={villa.bed}
                                singleline={true}
                            />
                        </Link>
                    ))}
                </div>

            </div>
        </section>
    );
}
