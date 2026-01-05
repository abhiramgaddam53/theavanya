"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxItemProps {
    src: string;
    alt: string;
    className?: string;
    speed?: number;
}

function ParallaxItem({ src, alt, className, speed = 1 }: ParallaxItemProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Gentle parallax effect
    const y = useTransform(scrollYProgress, [0, 1], [`-${10 * speed}%`, `${10 * speed}%`]);

    return (
        <div ref={ref} className={`relative overflow-hidden ${className}`}>
            <motion.div style={{ y, scale: 1.1 }} className="relative w-full h-full">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </motion.div>
        </div>
    );
}

export default function SerenityEscape() {
    return (< >
        <section className="bg-primary-bg px-6 pt-24  md:py-24 md:px-16 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                {/* Header */}
                <div className="text-center mb-16 pt-8 max-w-3xl mx-auto">
                    <span className="font-poppins text-xs font-bold tracking-widest uppercase opacity-40 mb-4 block">
                        Experience
                    </span>
                    <h2 className="font-serif text-3xl md:text-6xl text-[#1a1a1a] mb-6 tracking-tight">
                        Your ultimate <br /> escape to serenity
                    </h2>
                    <p className="font-poppins text-[#1a1a1a]/60 w-full leading-relaxed text-[12px] md:text-base max-w-lg mx-auto">
                        Embrace serenity at Niraya's spa, where luxury treatments and an authentic touch come together to provide an unforgettable journey of relaxation.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-2 items-start">
                    <div className="flex flex-col gap-2">
                        <ParallaxItem
                            src="/experiences/serenity/1.jpg"
                            alt="Spa relaxation"
                            className="aspect-[5/5] w-full rounded-sm"
                            speed={1}
                        />
                        <div className="flex justify-end z-10">
                            <ParallaxItem
                                src="/experiences/serenity/2.jpg"
                                alt="Aromatherapy detail"
                                className="aspect-square w-2/3 rounded-sm"
                                speed={3}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col self-center">
                        <ParallaxItem
                            src="/experiences/serenity/3.jpg"
                            alt="Massage therapy"
                            className="aspect-square w-full rounded-sm"
                            speed={2}
                        />
                    </div>
                </div>

                {/* Quote / Text Section */}
                <div className="max-w-2xl mx-auto text-center mt-16 mb-16 py-25 md:mt-32 md:mb-32 md:py-50">
                    <h3 className="font-serif text-2xl md:text-4xl text-[#1a1a1a] leading-tight mb-8">
                        “Our meals are crafted with <span className="italic font-light">carefully chosen ingredients</span>, creating dishes that tell a story of passion and local culture.”
                    </h3>
                    <div className="flex flex-col items-center">
                        <span className="font-poppins text-sm font-bold text-[#1a1a1a] mb-1">
                            Chef Malou
                        </span>
                        <span className="font-poppins text-xs text-[#1a1a1a]/60 uppercase tracking-widest">
                            Executive Chef
                        </span>
                    </div>
                </div>

                {/* Full Width Parallax Image */}
                <div className="w-full hidden md:block mt-8 md:mt-16">
                    <ParallaxItem
                        src="/experiences/testimonial.jpg"
                        alt="Serene landscape or detailed experience"
                        className=" aspect-25/16 md:aspect-21/9 w-full rounded-sm"
                        speed={3}
                    />
                </div>
            </div>
        </section>
         {/* Full Width Parallax Image */}
         <div className="md:hidden pb-20 w-full px-0 md:mt-16">
         <ParallaxItem
             src="/experiences/testimonial.jpg"
             alt="Serene landscape or detailed experience"
             className=" aspect-25/16 md:aspect-21/9 w-full   h-[75vh] "
             speed={3}
         />
     </div>
     </>
    );
}
