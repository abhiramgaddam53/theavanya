"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function MoreThanStay() {
    const containerRef = useRef(null);

    // Track scroll progress within this section
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Parallax movements for text
    // "More" moves Left
    const xLeft = useTransform(scrollYProgress, [0, 1], [100, -200]);
    // "Stay" moves Right
    const xRight = useTransform(scrollYProgress, [0, 1], [-100, 200]);
    // "Than" stays relatively distinct or moves slightly
    const yCenter = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/miscellaneous/boat.jpg" // Using the high-res image available
                    alt="Scenic Background"
                    fill
                    className="object-cover brightness-[0.7]" // Darken slightly for text contrast
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-[90%] md:max-w-7xl mx-auto flex flex-col items-center justify-center text-white">

                {/* Main Parallax Title */}
                <div className="flex items-center justify-between w-full font-serif tracking-tight leading-none mix-blend-overlay opacity-90">
                    <motion.h2 style={{ x: xLeft }} className="font-light text-7xl scale-y-[1.2]">
                        More
                    </motion.h2>

                    <motion.h2 style={{ y: yCenter }} className="font-light text-7xl text-center mx-4 md:mx-0 scale-y-[1.2]">
                        than
                    </motion.h2>

                    <motion.h2 style={{ x: xRight }} className="font-light text-7xl scale-y-[1.2]">
                        stay
                    </motion.h2>
                </div>

                {/* Subtitle / Description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-40 text-center max-w-xl"
                >
                    <p className="text-2xl font-light">
                        At Avanya, every detail is designed to <br /> make you feel at home — with the elegance <br /> of Paris just beyond your door.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
