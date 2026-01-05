// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const testimonials = [
//     {
//         title: "Gourmet Insights",
//         subtitle: "Top Asian",
//         quote: (
//             <>
//                 "Niraya offers an extraordinary culinary experience. The <span className="italic font-light">exquisite dishes</span>, crafted with passion, make it a true dining paradise."
//             </>
//         )
//     },
//     {
//         title: "Travel Voyager",
//         subtitle: "Best of 2024",
//         quote: (
//             <>
//                 "A sanctuary of peace and <span className="italic font-light">refined luxury</span>. Every detail is thoughtfully curated to provide an unforgettable escape from the ordinary."
//             </>
//         )
//     },
//     {
//         title: "Luxe Dining",
//         subtitle: "Best Eats",
//         quote: (
//             <>
//                 "Impeccable service and a menu that celebrates <span className="italic font-light">local flavors</span> with a modern twist. Truly a world-class gastronomic journey."
//             </>
//         )
//     }
// ];

// export default function DiningTestimonial() {
//     const [activeIndex, setActiveIndex] = useState(0);

//     return (
//         <section className="bg-[grey] text-[#e5e1d8] py-16 md:py-38 px-6 md:px-16 relative overflow-hidden">
//             <div className="max-w-[1400px] mx-auto flex flex-col justify-between min-h-[60vh]">

//                 {/* Main Quote Slider */}
//                 <div className="flex-1 flex items-center justify-center max-w-4xl mx-auto text-center mb-12 z-10 relative">
//                     <AnimatePresence mode="wait">
//                         <motion.div
//                             key={activeIndex}
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: -20 }}
//                             transition={{ duration: 0.5, ease: "easeOut" }}
//                         >
//                             <h2 className="font-serif text-3xl md:text-5xl leading-snug tracking-tight">
//                                 {testimonials[activeIndex].quote}
//                             </h2>
//                         </motion.div>
//                     </AnimatePresence>
//                 </div>

//                 {/* Bottom Stats / Accolades (Tabs) */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-[#e5e1d8]/20 relative">
//                     {/* Background track is the border-t above */}

//                     {testimonials.map((item, index) => (
//                         <button
//                             key={index}
//                             onClick={() => setActiveIndex(index)}
//                             className={`group relative pt-12 flex flex-col items-center text-center gap-2 transition-all duration-300 outline-none cursor-pointer ${activeIndex === index ? 'opacity-100' : 'opacity-40 hover:opacity-70'}`}
//                         >
//                             {/* Active Indicator Line */}
//                             {activeIndex === index && (
//                                 <motion.div
//                                     layoutId="activeTab"
//                                     className="absolute -top-px left-0 right-0 h-[2px] bg-[#e5e1d8]"
//                                     initial={{ opacity: 0 }}
//                                     animate={{ opacity: 1 }}
//                                     exit={{ opacity: 0 }}
//                                 />
//                             )}

//                             <span className="font-poppins text-xs md:text-sm font-bold tracking-wider uppercase">
//                                 {item.title}
//                             </span>
//                             <span className="font-poppins text-xs">
//                                 {item.subtitle}
//                             </span>
//                             {/* Mobile separator - visual only, keeping minimal */}
//                             {index !== testimonials.length - 1 && (
//                                 <div className="w-12 h-[1px] bg-[#e5e1d8]/40 mt-6 md:hidden" />
//                             )}
//                         </button>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }
"use client";

import { useState, useEffect, useRef } from "react";
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
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    // Auto-rotation logic (3-4 seconds)
    useEffect(() => {
        const startTimer = () => {
            timerRef.current = setInterval(() => {
                setActiveIndex((prev) => (prev + 1) % testimonials.length);
            }, 3500); // 3.5 seconds
        };

        startTimer();

        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, []);

    // Manual click handler (resets timer to prevent jumpiness)
    const handleManualClick = (index: number) => {
        if (timerRef.current) clearInterval(timerRef.current);
        setActiveIndex(index);
        // Restart timer
        timerRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 3500);
    };

    return (
        <section className="bg-[grey] text-[#e5e1d8] py-4  md:py-38 px-6 md:px-16 relative overflow-hidden flex flex-col justify-center min-h-[80vh] md:min-h-screen">
            <div className="max-w-[1400px] w-full mx-auto flex flex-col justify-center h-full">

                {/* Content Area */}
                <div className="flex-1 flex flex-col items-center justify-center max-w-4xl mx-auto text-center z-10 relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeIndex}
                            className="flex flex-col items-center"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                        >
                            {/* Quote */}
                            <h2 className="font-serif text-2xl md:text-5xl leading-snug tracking-tight mb-8">
                                {testimonials[activeIndex].quote}
                            </h2>

                            {/* Mobile Layout Stack (Hidden on Desktop) */}
                            <div className="flex md:hidden flex-col items-center w-full gap-4">
                                {/* Long Separator Line */}
                                <div className="w-3/4 h-[1px] bg-[#e5e1d8]/30 my-2" />

                                {/* Title */}
                                <span className="font-poppins text-sm font-bold tracking-wider uppercase">
                                    {testimonials[activeIndex].title}
                                </span>

                                {/* Tag/Subtitle */}
                                <span className="font-poppins text-xs opacity-80">
                                    {testimonials[activeIndex].subtitle}
                                </span>

                                {/* Small Bottom Line */}
                                <div className="w-8 h-[1px] bg-[#e5e1d8] mt-2" />
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Desktop Tabs / Navigation (Hidden on Mobile) */}
                <div className="hidden md:grid grid-cols-3 gap-12 border-t border-[#e5e1d8]/20 relative mt-20">
                    {testimonials.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => handleManualClick(index)}
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

                            <span className="font-poppins text-sm font-bold tracking-wider uppercase">
                                {item.title}
                            </span>
                            <span className="font-poppins text-xs">
                                {item.subtitle}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}