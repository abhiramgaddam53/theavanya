"use client";

import Image from "next/image";

interface WellnessCardProps {
    image: string;
    title: string;
    description: string;
    tag?: string;
}

export default function WellnessCard({ image, title, description, tag }: WellnessCardProps) {
    return (
        <div className=" min-w-[360px] px-2 md:px-0 md:min-w-[480px] w-[75%] h-full flex flex-col gap-6 relative group">
            <div className="relative  md:w-full h-[65vh] shrink-0 overflow-hidden">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform rounded-sm duration-700 group-hover:scale-105"
                />
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="font-serif text-xl md:text-3xl ">{title}</h3>
                <p className="font-poppins w-[80%] text-[11px] md:text-sm font-light leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
}
