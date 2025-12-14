"use client";

import { useRef } from "react";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export const HeroSection = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    // Parallax: Logo moves slightly slower/faster to create depth.
    // Mapping 0-1 scroll to 0-150px Y offset (moves down as you scroll)
    const yParallax = useTransform(scrollYProgress, [0, 1], [0, 150]);

    return (
        <div ref={containerRef} className="relative h-screen w-full overflow-hidden font-serif text-[#F5F2EA]">

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image src="/miscellaneous/Hero.jpg" alt="Hero Background" fill className="object-cover" priority />
                {/* Bottom Shadow / Gradient */}
                <div className="absolute bottom-0 left-0 w-full h-150 bg-linear-to-t from-black/60 to-transparent"></div>
            </div>

            <Navbar />

            <main className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center px-4">
                {/* Parallax Wrapper */}
                <motion.div style={{ y: yParallax }}>
                    {/* Entrance Animation Wrapper */}
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 2.6 }}
                    >
                        <Image
                            src="/logos/white.png"
                            alt="Logo"
                            height={720}
                            width={720}
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                </motion.div>
            </main>
        </div>
    );
};