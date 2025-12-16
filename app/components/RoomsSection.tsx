"use client";

import CommonRoomCard from "../../components/RoomCard";
import Button from "@/components/Button";
import Link from "next/link";

import { villas } from "../data/villas";

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
                    {villas.map((room) => (
                        <Link href={`/booking/accommodations/${room.slug}`} key={room.id} className="block group">
                            <CommonRoomCard
                                image={room.imageSrc}
                                name={room.title}
                                price={room.price}
                                description={room.description}
                                cta={room.cta}
                                bed={room.bed}
                                capacity={room.capacity}
                            />
                        </Link>
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
