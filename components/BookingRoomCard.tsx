"use client";

import Image from "next/image";
import Button from "./Button";

interface BookingRoomCardProps {
    name: string;
    image: string;
    capacity?: string;
    bed?: string;
    price?: string;
    description?: string;
}

export default function BookingRoomCard({
    name,
    image,
    capacity,
    bed,
    price,
    description,
}: BookingRoomCardProps) {
    return (
        <div className="relative aspect-[4/3] w-full overflow-hidden group cursor-pointer border border-[#1a1a1a]/10">
            <Image
                src={image}
                alt={name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient Overlay - Lighter for this card to show more detail */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80" />

            {/* Content Container */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end text-white h-full pointer-events-none">
                <div className="mt-auto w-full flex flex-col gap-3">

                    {/* Title */}
                    <h3 className="font-serif text-2xl md:text-3xl tracking-tight drop-shadow-md">
                        {name}
                    </h3>

                    {/* Price - Prominent */}
                    {price && (
                        <p className="font-poppins text-lg font-medium tracking-wide drop-shadow-md">
                            {price} <span className="text-sm font-light opacity-80">/ Night</span>
                        </p>
                    )}

                    {/* Facilities / Specifics */}
                    {(bed || capacity) && (
                        <div className="flex items-center gap-4 text-xs md:text-sm font-poppins font-light opacity-90 my-1">
                            {bed && (
                                <div className="flex items-center gap-2 drop-shadow-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" />
                                        <path d="M2 10a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2z" />
                                        <path d="M4 12v-2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2" />
                                    </svg>
                                    <span>{bed}</span>
                                </div>
                            )}
                            {capacity && (
                                <div className="flex items-center gap-2 drop-shadow-md">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                    <span>{capacity}</span>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Description */}
                    {description && (
                        <p className="font-poppins text-sm font-light text-gray-200 leading-relaxed max-w-xl drop-shadow-sm mb-2 line-clamp-2">
                            {description}
                        </p>
                    )}

                    {/* View Rates Button - Distinctive Style */}
                    <div className="mt-2 pointer-events-auto">
                        <Button
                            text="View Rates"
                            variant="outline-white"
                            size="sm"
                            className="bg-white/10 backdrop-blur-md hover:bg-white hover:text-black transition-colors border-white/40"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
