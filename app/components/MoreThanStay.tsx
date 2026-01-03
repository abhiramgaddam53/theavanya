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
        <section ref={containerRef} className="bg-primary-bg relative h-[80vh] md:h-[120vh] w-full overflow-hidden flex flex-col items-center justify-between py-32">

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/homepage/morethanstay.jpg" // Using the high-res image available
                    alt="Scenic Background"
                    fill
                    className="object-cover brightness-[0.7]" // Darken slightly for text contrast
                />
            </div>

            {/* Content Container */}
            <div className="relative z-10 w-full h-full max-w-[90%] md:max-w-7xl mx-auto flex flex-col justify-between items-center text-white">

                {/* Main Parallax Title - Centered in the upper/middle space */}
                <div className="flex-1 flex items-center justify-center w-full">
                    <div className="flex items-center justify-between w-full font-serif tracking-tight leading-none mix-blend-overlay opacity-90">
                        <motion.h2 style={{ x: xLeft }} className="font-light text-[8vw] md:text-[10vw] scale-y-[1.2]">
                            More
                        </motion.h2>

                        <motion.h2 style={{ y: yCenter }} className="font-light text-[8vw] md:text-[10vw] text-center mx-4 md:mx-0 scale-y-[1.2]">
                            than
                        </motion.h2>

                        <motion.h2 style={{ x: xRight }} className="font-light text-[8vw] md:text-[10vw] scale-y-[1.2]">
                            stay
                        </motion.h2>
                    </div>
                </div>

                {/* Subtitle / Description - Pinned to bottom */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-xl pb-12"
                >
                    <p className="font-poppins text-base md:text-xl font-light leading-relaxed">
                        At Avanya, every detail is designed to <br /> make you feel at home — with the elegance <br /> of Paris just beyond your door.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
