"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Tag } from "lucide-react";
import RateDetailsDialog from "@/components/RateDetailsDialog";
import RoomDetailsDialog from "@/components/RoomDetailsDialog";

interface RateCardProps {
    room: {
        id: string;
        title: string;
        description: string;
        price: string;
        imageSrc: string;
        features: string[];
    };
    villaName: string;
    villaSlug: string;
    villaImages: string[];
    isAvailable?: boolean;
}

export default function RateCard({ room, villaName, villaSlug, villaImages, isAvailable = true }: RateCardProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isRoomDetailsOpen, setIsRoomDetailsOpen] = useState(false);
    const [rateDetailsState, setRateDetailsState] = useState<{ isOpen: boolean, name: string, price: string }>({ isOpen: false, name: "", price: "" });

    // Combine room image with villa images for the carousel
    const images = Array.from(new Set([room.imageSrc, ...villaImages]));

    const nextImage = (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e: React.MouseEvent) => {
        e.preventDefault();
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const openRateDetails = (name: string, price: string) => {
        setRateDetailsState({ isOpen: true, name, price });
    };

    // Mock pricing logic
    const basePriceStr = room.price.replace(/[^0-9,]/g, '');

    // Updated link to point to the correct nested route
    const createLink = (rateName: string, finalPrice: string) => {
        return `/booking/accommodations/${villaSlug}/complete-booking?roomName=${encodeURIComponent(room.title)}&price=${encodeURIComponent(finalPrice)}&villa=${encodeURIComponent(villaName)}&image=${encodeURIComponent(room.imageSrc)}&rate=${encodeURIComponent(rateName)}`;
    };

    return (
        <>
            <div className={`bg-white rounded-lg shadow-sm border border-[#1a1a1a]/10 overflow-hidden flex flex-col md:flex-row transition-all hover:shadow-md ${!isAvailable ? 'opacity-70 grayscale-[0.5]' : ''} relative`}>

                {!isAvailable && (
                    <div className="absolute inset-0 z-50 bg-white/50 flex items-center justify-center backdrop-blur-[1px] cursor-not-allowed">
                        <div className="bg-red-50 px-6 py-3 rounded-full border border-red-100 shadow-sm">
                            <p className="text-red-600 font-bold font-poppins text-sm uppercase tracking-widest">Unavailable for selected dates</p>
                        </div>
                    </div>
                )}

                {/* Left: Image Carousel */}
                <div className="relative w-full md:w-[40%] aspect-[4/3] md:aspect-auto">
                    <Image
                        src={images[currentImageIndex]}
                        alt={room.title}
                        fill
                        className="object-cover"
                    />

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/50 transition-colors"
                    >
                        <ChevronLeft size={16} />
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/50 transition-colors"
                    >
                        <ChevronRight size={16} />
                    </button>

                    {/* Dots Indicator */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {images.map((_, idx) => (
                            <div
                                key={idx}
                                className={`w-1.5 h-1.5 rounded-full shadow-sm transition-all ${idx === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Right: Details & Rates */}
                <div className="flex-1 p-6 flex flex-col">

                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h3 className="font-serif text-2xl text-[#1a1a1a] mb-1">{room.title}</h3>
                            <div className="flex flex-wrap gap-2 text-xs font-poppins text-gray-500">
                                {room.features.map((f, i) => (
                                    <span key={i} className="bg-gray-100 px-2 py-1 rounded-sm">{f}</span>
                                ))}
                            </div>
                        </div>
                        <button
                            onClick={() => setIsRoomDetailsOpen(true)}
                            className="text-xs font-poppins font-bold uppercase underline tracking-wider text-[#1a1a1a]/70 hover:text-[#1a1a1a]"
                        >
                            Room Details
                        </button>
                    </div>

                    {/* Rates List */}
                    <div className="mt-auto flex flex-col gap-6">

                        {/* Rate Option: Flexible Rate */}
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div className="flex flex-col gap-1">
                                <span className="font-poppins font-semibold text-[#1a1a1a]">Flexible Rate</span>
                                <button
                                    onClick={() => openRateDetails("Flexible Rate", `₹${basePriceStr}`)}
                                    className="text-left text-[10px] font-poppins underline text-gray-400 hover:text-gray-600"
                                >
                                    Rate Details
                                </button>
                            </div>

                            <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
                                <div className="text-right">
                                    <span className="block font-poppins font-bold text-lg text-[#1a1a1a]">
                                        ₹{basePriceStr}
                                    </span>
                                    <span className="text-[10px] text-gray-400 font-poppins">INR / Night</span>
                                </div>
                                {isAvailable ? (
                                    <Link
                                        href={createLink("Flexible Rate", `₹${basePriceStr}`)}
                                        className="bg-[#1a1a1a] text-white px-8 py-3 rounded-full text-xs font-poppins font-medium tracking-wide hover:bg-[#1a1a1a]/80 transition-colors"
                                    >
                                        Select
                                    </Link>
                                ) : (
                                    <button disabled className="bg-gray-300 text-white px-8 py-3 rounded-full text-xs font-poppins font-medium tracking-wide cursor-not-allowed">
                                        Sold Out
                                    </button>
                                )}
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <RateDetailsDialog
                isOpen={rateDetailsState.isOpen}
                onClose={() => setRateDetailsState(prev => ({ ...prev, isOpen: false }))}
                rateName={rateDetailsState.name}
                price={rateDetailsState.price}
            />

            <RoomDetailsDialog
                isOpen={isRoomDetailsOpen}
                onClose={() => setIsRoomDetailsOpen(false)}
                room={room}
                villaImages={villaImages}
            />
        </>
    );
}
