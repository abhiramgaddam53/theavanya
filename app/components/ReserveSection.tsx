"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function ReserveSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "center center"],
    });

    // Rotation from tilted left (-15deg) to straight (0deg) based on scroll
    const rotate = useTransform(scrollYProgress, [0, 1], [-15, 0]);

    return (
        <section ref={containerRef} className="relative w-full h-[150vh]">

            {/* Background Image - Absolute and covering the full scrollable height */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/miscellaneous/resort.jpg"
                    alt="Reserve Background"
                    fill
                    className="object-cover brightness-[0.6]"
                />
            </div>

            {/* Sticky Container for the Card */}
            <div className="sticky top-0 h-screen w-full flex items-start justify-center z-10 px-4 pt-[40vh]">

                {/* Popup Card */}
                <motion.div
                    style={{ rotate }}
                    className="bg-[#F5F2EA] px-16 py-24 max-w-2xl text-center shadow-2xl origin-bottom"
                >
                    {/* Icon */}
                    <div className="flex justify-center mb-6 text-[#1a1a1a]">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L14.4 9.6L22 12L14.4 14.4L12 22L9.6 14.4L2 12L9.6 9.6L12 2Z" />
                        </svg>
                    </div>

                    {/* Title */}
                    <h2 className="font-serif text-6xl text-black mb-6 scale-y-[1.2]">
                        Reserve Your Stay
                    </h2>

                    {/* Description */}
                    <p className="font-poppins text-sm md:text-base text-black leading-relaxed mb-6 max-w-lg mx-auto">
                        Booking with Avanya means more than just selecting dates — it’s about tailoring every detail to suit your stay. Whether you’d like to include curated add-on services or keep things minimal, you have full control over your experience.
                    </p>

                    {/* Button */}
                    <Link href="#" className="inline-block group border-b border-black hover:opacity-70 transition-opacity">
                        <span className="font-poppins text-md font-bold uppercase tracking-widest text-black">
                            Book Now
                        </span>
                    </Link>

                </motion.div>
            </div>

        </section>
    );
}
