"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import CommonDialog from "./CommonDialog";

interface RoomDetailsDialogProps {
    isOpen: boolean;
    onClose: () => void;
    room: {
        title: string;
        description: string;
        imageSrc: string;
        features: string[];
    };
    villaImages: string[];
}

export default function RoomDetailsDialog({ isOpen, onClose, room, villaImages }: RoomDetailsDialogProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Combine room image with villa images
    const images = Array.from(new Set([room.imageSrc, ...villaImages]));

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <CommonDialog
            open={isOpen}
            onOpenChange={(open) => !open && onClose()}
            title={room.title}
        >
            <div className="space-y-8 pb-8">
                {/* Carousel Section */}
                <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100 group">
                    <Image
                        src={images[currentImageIndex]}
                        alt={`${room.title} - View ${currentImageIndex + 1}`}
                        fill
                        className="object-cover"
                    />

                    {/* Navigation Arrows */}
                    {images.length > 1 && (
                        <>
                            <button
                                onClick={prevImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/50 transition-colors opacity-0 group-hover:opacity-100 duration-300"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/30 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/50 transition-colors opacity-0 group-hover:opacity-100 duration-300"
                            >
                                <ChevronRight size={20} />
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
                        </>
                    )}
                </div>

                {/* Content Section */}
                <div className="space-y-6 px-1">
                    <div>
                        <h4 className="font-serif text-xl text-[#1a1a1a] mb-3">Room Overview</h4>
                        <p className="font-poppins text-[#1a1a1a]/70 leading-relaxed font-light">
                            {room.description}
                        </p>
                    </div>

                    <div className="h-px bg-gray-100" />

                    <div>
                        <h4 className="font-serif text-xl text-[#1a1a1a] mb-4">Amenities & Features</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
                            {room.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center gap-3 text-[#1a1a1a]/80 font-poppins text-sm group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]/40 group-hover:bg-[#1a1a1a] transition-colors" />
                                    {feature}
                                </div>
                            ))}
                            {/* Standard amenities for all rooms (mock data) */}
                            <div className="flex items-center gap-3 text-[#1a1a1a]/80 font-poppins text-sm group">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]/40 group-hover:bg-[#1a1a1a] transition-colors" />
                                High-speed Wi-Fi
                            </div>
                            <div className="flex items-center gap-3 text-[#1a1a1a]/80 font-poppins text-sm group">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]/40 group-hover:bg-[#1a1a1a] transition-colors" />
                                In-room Dining
                            </div>
                            <div className="flex items-center gap-3 text-[#1a1a1a]/80 font-poppins text-sm group">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#1a1a1a]/40 group-hover:bg-[#1a1a1a] transition-colors" />
                                Daily Housekeeping
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CommonDialog>
    );
}
