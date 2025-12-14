"use client";

import Image from "next/image";

interface WellnessCardProps {
    image: string;
    title: string;
    description: string;
}

export default function WellnessCard({ image, title, description }: WellnessCardProps) {
    return (
        <div className="min-w-[480px] h-[80vh] flex flex-col gap-6 relative group">
            <div className="relative w-full h-[65vh] shrink-0 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="font-serif text-3xl">{title}</h3>
                <p className="font-poppins text-sm font-light leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}
