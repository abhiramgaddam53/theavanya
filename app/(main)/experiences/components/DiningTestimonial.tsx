"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
    {
        title: "Gourmet Insights",
        subtitle: "Top Asian",
        quote: (
            <>
                "Niraya offers an extraordinary culinary experience. The <span className="italic font-light">exquisite dishes</span>, crafted with passion, make it a true dining paradise."
            </>
        )
    },
    {
        title: "Travel Voyager",
        subtitle: "Best of 2024",
        quote: (
            <>
                "A sanctuary of peace and <span className="italic font-light">refined luxury</span>. Every detail is thoughtfully curated to provide an unforgettable escape from the ordinary."
            </>
        )
    },
    {
        title: "Luxe Dining",
        subtitle: "Best Eats",
        quote: (
            <>
                "Impeccable service and a menu that celebrates <span className="italic font-light">local flavors</span> with a modern twist. Truly a world-class gastronomic journey."
            </>
        )
    }
];

export default function DiningTestimonial() {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="bg-secondary-bg text-[#e5e1d8] py-32 px-6 md:px-16 relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto flex flex-col justify-between min-h-[60vh]">

                {/* Main Quote Slider */}
                <div className="flex-1 flex items-center justify-center max-w-4xl mx-auto text-center mb-12 z-10 relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                        >
                            <h2 className="font-serif text-3xl md:text-5xl leading-snug tracking-tight">
                                {testimonials[activeIndex].quote}
                            </h2>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Bottom Stats / Accolades (Tabs) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#e5e1d8]/20 relative">
                    {/* Background track is the border-t above */}

                    {testimonials.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveIndex(index)}
                            className={`group relative pt-12 flex flex-col items-center text-center gap-2 transition-all duration-300 outline-none cursor-pointer ${activeIndex === index ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
                        >
                            {/* Active Indicator Line */}
                            {activeIndex === index && (
                                <motion.div
                                    layoutId="activeTab"
                                    className="absolute -top-px left-0 right-0 h-[2px] bg-[#e5e1d8]"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                />
                            )}

                            <span className="font-poppins text-xs md:text-sm font-bold tracking-wider uppercase">
                                {item.title}
                            </span>
                            <span className="font-poppins text-xs">
                                {item.subtitle}
                            </span>
                            {/* Mobile separator - visual only, keeping minimal */}
                            {index !== testimonials.length - 1 && (
                                <div className="w-12 h-[1px] bg-[#e5e1d8]/40 mt-6 md:hidden" />
                            )}
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
