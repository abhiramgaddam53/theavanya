"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

interface CommonParallaxCardProps {
    image: string;
    title: string;
    tag?: string;
    description: string;
    variant: "square" | "portrait" | "landscape";
    className?: string;
}

export default function CommonParallaxCard({ image, title, tag, description, variant, className = "" }: CommonParallaxCardProps) {
    const cardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "end start"],
    });

    // Parallax logic: Image moves slightly within its container
    const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
    const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]); // Subtle zoom out

    // Determine dimensions based on variant
    let aspectRatioClass = "aspect-[3/2]"; // Default square
    if (variant === "portrait") aspectRatioClass = "aspect-[3/4]";
    if (variant === "landscape") aspectRatioClass = "aspect-[16/9]";

    return (
        <div ref={cardRef} className={`flex flex-col gap-6 w-full ${className}`}>

            {/* Image Container */}
            <div className={`relative w-full overflow-hidden rounded-sm ${aspectRatioClass}`}>
                <motion.div style={{ y, scale }} className="relative w-full h-[120%] -top-[10%]">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </motion.div>
            </div>

            {/* Content - Side by Side Layout */}
            <div className="flex hidden md:flex flex-col md:flex-row justify-between items-start gap-4 mt-2">
                <h3 className="font-serif text-2xl text-[#1a1a1a] md:w-1/3">{title}</h3>
                <div className="md:w-1/2">
                    {tag && (
                        <p className="font-poppins text-xs font-bold uppercase tracking-wider text-[#1a1a1a] mb-2">
                            {tag}
                        </p>
                    )}
                    <p className="font-poppins text-sm text-[#1a1a1a]/70 font-light leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
            <div className="flex md:hidden flex-col md:flex-row justify-between items-start gap-4 mt-2">
                
                <div className=" ">
                    {tag && (
                        <p className="font-poppins text-xs font-bold uppercase tracking-wider text-[#1a1a1a] mb-2">
                            {tag}
                        </p>
                    )}
                    <h3 className="font-serif text-2xl text-[#1a1a1a] md:w-1/3">{title}</h3>
                    <p className="font-poppins text-sm text-[#1a1a1a]/70 font-light leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>

        </div>
    );
}
