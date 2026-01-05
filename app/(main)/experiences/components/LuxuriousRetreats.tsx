"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const amenities = [
    {
        id: 1,
        tag: "Forest",
        title: "Guided Forest Bathing",
        description: "Slow walks through untouched rainforest, led by naturalists trained in Shinrin-yoku practices.",
        src: "/experiences/luxury/Forest.jpg",
        alt: "Guided forest bathing experience"
    },
    {
        id: 2,
        tag: "Wellness",
        title: "Ayurvedic Bio-Rituals",
        description: "Bespoke therapies blending ancient Ayurvedic wisdom with modern recovery science.",
        src: "/experiences/luxury/Wellness.jpg",
        alt: "Ayurvedic wellness rituals"
    },
    {
        id: 3,
        tag: "Culinary",
        title: "No-Menu Dining",
        description: "Daily creations crafted entirely around your preferences, mood, and dietary rhythm.",
        src: "/experiences/luxury/Culinary.jpg",
        alt: "Personalized fine dining experience"
    },
    {
        id: 4,
        tag: "Silence",
        title: "Digital Detox Experience",
        description: "A physical switch that disconnects the world inviting deeper rest and uninterrupted sleep.",
        src: "/experiences/luxury/Silence.jpg",
        alt: "Digital detox retreat"
    },
    {
        id: 5,
        tag: "Nature",
        title: "Private Waterfall Picnics",
        description: "Secluded forest clearings, prepared discreetly for uninterrupted moments.",
        src: "/experiences/luxury/Nature.jpg",
        alt: "Private waterfall picnic"
    },
    {
        id: 6,
        tag: "Movement",
        title: "Sunrise Yoga Pavilion",
        description: "Open-air sessions where breath, mist, and movement align.",
        src: "/experiences/luxury/Movement.jpg",
        alt: "Sunrise yoga session"
    },
    {
        id: 7,
        tag: "Culture",
        title: "Local Storytelling Evenings",
        description: "Intimate conversations with Wayanad locals history shared, not performed.",
        src: "/experiences/luxury/Culture.jpg",
        alt: "Local cultural storytelling evening"
    },
    {
        id: 8,
        tag: "Privacy",
        title: "In-Villa Experiences",
        description: "Wellness, dining, and rituals delivered quietly to your private sanctuary.",
        src: "/experiences/luxury/Privacy.jpg",
        alt: "Private in-villa luxury experience"
    }
];

export default function LuxuriousRetreats() {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    const checkScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setCanScrollLeft(scrollLeft > 10);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
        }
    };

    useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener("scroll", checkScroll);
            checkScroll(); // Initial check
            return () => container.removeEventListener("scroll", checkScroll);
        }
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollAmount = container.clientWidth * 0.8; // Scroll 80% of view width
            const targetScroll = direction === 'left'
                ? container.scrollLeft - scrollAmount
                : container.scrollLeft + scrollAmount;

            container.scrollTo({
                left: targetScroll,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="bg-primary-bg py-8 px-6  md:py-20 md:px-16 overflow-hidden md:min-h-screen flex flex-col justify-center">

            <div className="max-w-[1600px] w-full mx-auto relative">

                {/* Horizontal Scrolling Container */}
                <div
                    ref={scrollContainerRef}
                    className="flex overflow-x-auto gap-5 md:gap-4 pb-12 pt-4 scrollbar-hide snap-x snap-mandatory "
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {amenities.map((item) => (
                        <div
                            key={item.id}
                            className="relative min-w-[280px] sm:min-w-[320px] md:min-w-[360px] aspect-9/16 md:aspect-3/5 shrink-0 snap-start snap-always rounded-sm md:rounded-[24px] overflow-hidden group cursor-pointer"
                        >
                            {/* Background Image */}
                            <Image
                                src={item.src}
                                alt={item.alt}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 80vw, 30vw"
                            />

                            {/* Gradient Overlay for Text Readability */}
                            <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />

                            {/* Content Overlay */}
                            <div className="absolute top-0 left-0 w-full p-6 md:p-8 flex flex-col items-start gap-3 z-10">
                                <span className="text-white/70 text-xs font-poppins font-semibold uppercase tracking-widest bg-black/20 backdrop-blur-md px-3 py-1 rounded-[2px] md:rounded-full border border-white/10">
                                    {item.tag}
                                </span>
                                <h3 className="font-poppins  text-white text-xl md:text-3xl font-bold leading-tight mt-2 max-w-[80%] drop-shadow-lg">
                                    {item.title}
                                </h3>
                            </div>

                            {/* Description at bottom left */}
                            <div className="font-poppins absolute bottom-0 left-0 md:bottom-8 p-6 z-10">
                                <p className="text-white/80 text-xs md:text-sm font-poppins font-light leading-relaxed drop-shadow-md opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="absolute -bottom-4 right-0 flex gap-4 pr-6 md:pr-0">
                    <button
                        onClick={() => scroll('left')}
                        disabled={!canScrollLeft}
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border border-black/10
                            ${canScrollLeft
                                ? 'bg-white text-black hover:bg-black hover:text-white cursor-pointer shadow-sm'
                                : 'bg-transparent text-black/20 cursor-not-allowed'}`}
                        aria-label="Scroll left"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        disabled={!canScrollRight}
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border border-black/10
                            ${canScrollRight
                                ? 'bg-black text-white hover:bg-black/80 cursor-pointer shadow-lg'
                                : 'bg-transparent text-black/20 cursor-not-allowed'}`}
                        aria-label="Scroll right"
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>

            </div>
        </section>
    );
}
