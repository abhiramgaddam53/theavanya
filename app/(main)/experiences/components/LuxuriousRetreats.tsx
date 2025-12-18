"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";

const amenities = [
    {
        id: 1,
        title: "Infinity Pool",
        src: "/miscellaneous/swim.jpg", // Using available assets
        alt: "Infinity Pool overlooking the ocean"
    },
    {
        id: 2,
        title: "Fitness Oasis",
        src: "/wellness/threesec.jpg", // Using available wellness asset
        alt: "Modern fitness center with a view"
    },
    {
        id: 3,
        title: "Wellness Center",
        src: "/miscellaneous/yoga.jpg", // Using available assets
        alt: "Woman standing near a window"
    },
    {
        id: 4,
        title: "Concierge Excellence",
        src: "/miscellaneous/resort.jpg", // Using available assets
        alt: "Concierge greeting a guest"
    },
    {
        id: 5,
        title: "Private Yacht",
        src: "/miscellaneous/yatch.jpg",
        alt: "Luxury yacht experience"
    }
];

export default function LuxuriousRetreats() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);
    const [canScrollLeft, setCanScrollLeft] = useState(false);

    // Initial scroll position handler
    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            const scrollRange = scrollWidth - clientWidth;
            const currentProgress = scrollRange > 0 ? (scrollLeft / scrollRange) * 100 : 0;
            setProgress(Math.min(100, Math.max(0, currentProgress)));
            setCanScrollLeft(scrollLeft > 10); // buffer of 10px
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener("scroll", handleScroll);
            // Check initial state
            handleScroll();
            return () => container.removeEventListener("scroll", handleScroll);
        }
    }, []);

    const scrollPrev = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const cardWidth = container.querySelector('div')?.clientWidth || 400;
            container.scrollBy({ left: -(cardWidth + 24), behavior: 'smooth' });
        }
    };

    const scrollNext = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const cardWidth = container.querySelector('div')?.clientWidth || 400;
            container.scrollBy({ left: cardWidth + 24, behavior: 'smooth' }); // width + gap
        }
    };

    return (
        <section className="bg-primary-bg py-14 px-6 md:px-16 overflow-hidden">
            <div className="max-w-[1400px] mx-auto">

                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <span className="font-poppins text-xs font-bold tracking-widest uppercase opacity-40 mb-4 block">
                            Amenities
                        </span>
                        <h2 className="font-serif text-5xl md:text-6xl text-[#1a1a1a] tracking-tight">
                            Luxurious retreats
                        </h2>
                    </div>

                    <div className="max-w-xs md:mb-2">
                        <p className="font-poppins text-[#1a1a1a]/60 leading-relaxed text-sm">
                            Discover a world of comfort and indulgence at our carefully curated facilities.
                        </p>
                    </div>
                </div>

                {/* Carousel Section */}
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto gap-6 sm:gap-8 pb-12 scrollbar-hide -mr-6 md:-mr-16 pr-6 md:pr-16 snap-x snap-mandatory"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {amenities.map((item) => (
                        <div
                            key={item.id}
                            className="min-w-[280px] sm:min-w-[340px] md:min-w-[400px] shrink-0 snap-start group cursor-pointer"
                        >
                            <div className="relative aspect-3/4 sm:aspect-4/5 overflow-hidden mb-6">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    sizes="(max-width: 768px) 80vw, 30vw"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                            </div>
                            <h3 className="font-poppins text-[#1a1a1a] text-sm md:text-base font-medium">
                                {item.title}
                            </h3>
                        </div>
                    ))}
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between mt-4">
                    {/* Progress Bar */}
                    <div className="flex gap-2">
                        {/* Simple visual indicator matching the design (line with active state) */}
                        <div className="h-[2px] w-12 bg-[#1a1a1a]/20 overflow-hidden relative">
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-[#1a1a1a]"
                                initial={{ width: "0%" }}
                                animate={{ width: `${progress}%` }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex gap-4">
                        {canScrollLeft && (
                            <button
                                onClick={scrollPrev}
                                className="w-12 h-12 cursor-pointer rounded-full border border-[#6B6B55] text-[#6B6B55] hover:bg-[#6B6B55] hover:text-white flex items-center justify-center transition-all duration-300 active:scale-95"
                                aria-label="Previous slide"
                            >
                                <ArrowLeft size={20} />
                            </button>
                        )}
                        <button
                            onClick={scrollNext}
                            className="w-12 h-12 cursor-pointer rounded-full bg-[#6B6B55] hover:bg-[#5b5b48] text-white flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95"
                            aria-label="Next slide"
                        >
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}
