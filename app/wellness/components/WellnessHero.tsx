"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function WellnessHero() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const yParallax = useTransform(scrollYProgress, [0, 1], [0, 150]);

    return (
        <section ref={containerRef} className="relative h-screen w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/wellness/Hero.jpg"
                    alt="Wellness Hero"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute bottom-0 left-0 w-full h-full bg-black/30"></div>

                {/* Shadows / Gradients */}
                <div className="absolute bottom-0 left-0 w-full h-[60vh] bg-linear-to-t from-black via-black/50 to-transparent z-[1]"></div>
                <div className="absolute top-0 left-0 h-full w-[25vw] bg-linear-to-r from-black via-black/50 to-transparent z-[1]"></div>
                <div className="absolute top-0 right-0 h-full w-[25vw] bg-linear-to-l from-black via-black/50 to-transparent z-[1]"></div>
            </div>

            {/* Main Title - Centered with Parallax */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                <motion.div style={{ y: yParallax }}>
                    <h1 className="font-serif text-[#F5F2EA] leading-[0.9]">
                        <span className="block text-9xl font-light tracking-tight">Where Stillness </span>
                        <span className="block text-9xl italic font-light tracking-tight">Becomes Medicine</span>
                    </h1>
                </motion.div>
            </div>

            {/* Subtitle - Pinned to Bottom */}
            <div className="absolute bottom-20 left-0 w-full z-10 flex justify-center text-center px-4">
                <motion.div style={{ y: yParallax }} className="max-w-lg">
                    <p className="text-[#F5F2EA] text-2xl font-light tracking-wide opacity-90">
                        A deeply personal approach to wellness, guided by nature, silence, and ancient intelligence.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
