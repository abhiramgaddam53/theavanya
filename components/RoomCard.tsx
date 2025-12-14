"use client";

import Image from "next/image";
import Button from "./Button";

interface CommonRoomCardProps {
    name: string;
    image: string;
    // Optional props for different use cases
    capacity?: string;
    bed?: string;
    price?: string;
    description?: string;
    cta?: string;
}

export default function CommonRoomCard({
    name,
    image,
    capacity,
    bed,
    price,
    description,
    cta
}: CommonRoomCardProps) {
    return (
        <div className="relative aspect-[4/3] w-full overflow-hidden group cursor-pointer">
            <Image
                src={image}
                alt={name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />

            {/* Price Tag (Top Left) */}
            {price && (
                <div className="absolute top-6 left-6 z-10 w-auto">
                    <Button
                        text={price}
                        variant="glass"
                        size="sm"
                        className="pointer-events-none" // Usually price isn't clickable, but styling is wanted
                    />
                </div>
            )}

            {/* Bottom Content Area */}
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 flex flex-col justify-end text-white h-full pointer-events-none">
                <div className="mt-auto w-full">

                    {/* Title & Icons Row */}
                    <div className="flex items-center justify-between w-full">
                        {/* Title (Bottom Left) */}
                        <h3 className="font-poppins text-xl md:text-2xl font-light tracking-wide max-w-[70%] drop-shadow-md">
                            {name}
                        </h3>

                        {/* Icons (Bottom Right) */}
                        {!cta && (bed || capacity) && (
                            <div className="flex items-center gap-4 text-xs md:text-sm font-poppins font-light opacity-90">
                                {bed && (
                                    <div className="flex items-center gap-2 drop-shadow-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" />
                                            <path d="M2 10a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2z" />
                                            <path d="M4 12v-2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2" />
                                        </svg>
                                        <span className="hidden md:inline">{bed}</span>
                                    </div>
                                )}
                                {capacity && (
                                    <div className="flex items-center gap-2 drop-shadow-md">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                            <circle cx="12" cy="7" r="4" />
                                        </svg>
                                        <span className="hidden md:inline">{capacity}</span>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Description & CTA (Below Title) */}
                    {description && (
                        <div className="mt-4">
                            <p className="font-poppins text-sm font-light text-gray-200 leading-relaxed mb-4 max-w-xl drop-shadow-sm">
                                {description}
                            </p>
                            <div className="flex justify-between items-center">
                                {cta && (
                                    <Button
                                        text={cta}
                                        variant="underline-white"
                                        size="none"
                                        className="pointer-events-auto drop-shadow-md text-xs"
                                    />
                                )}
                                {(bed || capacity) && (
                                    <div className="flex items-center gap-4 text-xs md:text-sm font-poppins font-light opacity-90">
                                        {bed && (
                                            <div className="flex items-center gap-2 drop-shadow-md">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" />
                                                    <path d="M2 10a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-2z" />
                                                    <path d="M4 12v-2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2" />
                                                </svg>
                                                <span className="hidden md:inline">{bed}</span>
                                            </div>
                                        )}
                                        {capacity && (
                                            <div className="flex items-center gap-2 drop-shadow-md">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                                    <circle cx="12" cy="7" r="4" />
                                                </svg>
                                                <span className="hidden md:inline">{capacity}</span>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
