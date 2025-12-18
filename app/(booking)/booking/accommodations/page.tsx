"use client";

import Link from "next/link";
import Image from "next/image";
import { villas } from "@/app/data/villas";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export default function AccommodationsPage() {
    const searchParams = useSearchParams();
    const checkInParam = searchParams.get("checkIn");
    const checkOutParam = searchParams.get("checkOut");

    const filteredVillas = useMemo(() => {
        if (!checkInParam || !checkOutParam) {
            return villas;
        }

        const start = new Date(checkInParam);
        const end = new Date(checkOutParam);

        // Map villas to availability status
        const villasWithStatus = villas.map(villa => {
            // 1. Check Global Villa Blockout
            const isVillaBlocked = villa.bookedDates?.some(dateStr => {
                const bookedDate = new Date(dateStr);
                return bookedDate >= start && bookedDate < end;
            });

            if (isVillaBlocked) {
                return { ...villa, isAvailable: false };
            }

            // 2. Check if ANY room is available
            // If the villa has no rooms defined, fallback to true (or false depending on logic, assuming true for safe fallback if data missing)
            if (!villa.availableRooms || villa.availableRooms.length === 0) {
                return { ...villa, isAvailable: true };
            }

            const hasAvailableRoom = villa.availableRooms.some(room => {
                if (!room.bookedDates) return true; // Room has no specific blockouts
                const isRoomBlocked = room.bookedDates.some(dateStr => {
                    const bookedDate = new Date(dateStr);
                    return bookedDate >= start && bookedDate < end;
                });
                return !isRoomBlocked;
            });

            return {
                ...villa,
                isAvailable: hasAvailableRoom
            };
        });

        // Sort: Available first
        return villasWithStatus.sort((a, b) => {
            if (a.isAvailable === b.isAvailable) return 0;
            return a.isAvailable ? -1 : 1;
        });

    }, [checkInParam, checkOutParam]);

    return (
        <div className="bg-[#f9f9f9] min-h-screen py-16 px-6 md:px-16">
            <div className="max-w-[1400px] mx-auto">
                <h1 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-6 text-center">Our Accommodations</h1>
                <p className="text-center font-poppins text-[#1a1a1a]/70 max-w-2xl mx-auto mb-16">
                    Discover a sanctuary where luxury meets nature. Choose from our exclusive collection of villas and residences, each designed to offer privacy, comfort, and breathtaking views.
                </p>

                {checkInParam && checkOutParam && (
                    <div className="mb-8 text-center bg-white p-4 rounded-lg shadow-sm w-fit mx-auto border border-dashed border-[#1a1a1a]/20">
                        <p className="font-poppins text-sm">
                            Showing availability for <span className="font-bold">{checkInParam}</span> to <span className="font-bold">{checkOutParam}</span>
                        </p>
                    </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {filteredVillas.map((villa) => {
                        const isAvailable = (villa as any).isAvailable !== false; // Default true if property undefined

                        return (
                            <div key={villa.id} className={`group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 relative ${!isAvailable ? 'opacity-70 grayscale-[0.5]' : ''}`}>

                                {/* Image */}
                                <Link href={`/booking/accommodations/${villa.slug}`} className="block relative aspect-[4/3] overflow-hidden">
                                    <Image
                                        src={villa.imageSrc}
                                        alt={villa.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />

                                    {!isAvailable && (
                                        <div className="absolute inset-0 z-20 bg-black/40 flex items-center justify-center">
                                            <span className="bg-red-500 text-white px-4 py-2 text-xs font-bold uppercase tracking-widest rounded shadow-md">
                                                Sold Out
                                            </span>
                                        </div>
                                    )}
                                </Link>

                                {/* Content */}
                                <div className="p-8">
                                    <h3 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] mb-3 group-hover:text-[#BEA585] transition-colors">
                                        <Link href={`/booking/accommodations/${villa.slug}`}>
                                            {villa.title}
                                        </Link>
                                    </h3>
                                    <p className="font-poppins text-sm text-[#1a1a1a]/60 line-clamp-2 md:line-clamp-3 mb-6 leading-relaxed">
                                        {villa.description}
                                    </p>

                                    <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                                        <div className="flex flex-col">
                                            <span className="font-poppins text-xs text-[#1a1a1a]/50 uppercase tracking-wider">Starting From</span>
                                            <span className="font-poppins font-semibold text-lg text-[#1a1a1a]">{villa.price}</span>
                                        </div>
                                        <Link
                                            href={`/booking/accommodations/${villa.slug}`}
                                            className="bg-[#1a1a1a] text-white px-6 py-3 rounded-full text-xs font-poppins font-medium uppercase tracking-wide hover:bg-[#333] transition-colors"
                                        >
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
