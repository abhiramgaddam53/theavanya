"use client";

import Image from "next/image";
import Link from "next/link";

interface RoomCardProps {
    imageSrc: string;
    price: string;
    title: string;
    description: string;
    cta: string;
}

export default function RoomCard({ imageSrc, price, title, description, cta }: RoomCardProps) {
    return (
        <div className="flex flex-col gap-4 group cursor-pointer">
            {/* Image Container */}
            <div className="relative w-full h-[400px] overflow-hidden bg-gray-200">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col gap-2 bg-[#F5F2EA] pt-2">
                <span className="font-poppins text-xs font-medium tracking-wide text-gray-500">
                    {price}
                </span>

                <h3 className="font-serif text-xl md:text-2xl text-[#1a1a1a] uppercase tracking-wide">
                    {title}
                </h3>

                <p className="font-poppins text-[12px] text-gray-600 leading-relaxed max-w-xl">
                    {description}
                </p>

                {/* Action Button */}
                <Link href="#" className="mt-4">
                    <div className="w-full border text-black border-[#1a1a1a] rounded-full py-3 px-6 flex items-center justify-center gap-2 hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300">
                        <span className="font-poppins text-[10px] uppercase tracking-widest font-medium">{cta}</span>
                        <span className="text-xs font-medium">→</span>
                    </div>
                </Link>
            </div>
        </div>
    );
}
