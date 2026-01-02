"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function PlannedForYou() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const xLeft = useTransform(scrollYProgress, [0.2, 0.8], [-50, 0]);
    const xRight = useTransform(scrollYProgress, [0.2, 0.8], [50, 0]);
    const yText = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 1, 0]);

    return (
        <section ref={containerRef} className="relative h-[120vh] bg-primary-bg">
            <div className="sticky top-0 h-screen w-full overflow-hidden">

                {/* Background Image */}
                <div className="absolute inset-0">
                    <Image
                        src="/homepage/plannedforyou.jpg"
                        alt="Planned for you"
                        fill
                        className="object-cover brightness-75"
                        priority
                    />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-[#F5F2EA]">

                    {/* Main Title Row */}
                    <div className="w-full max-w-[90%] flex items-center justify-between font-serif tracking-tight leading-none mix-blend-overlay">
                        {/* "Planned" on the left */}
                        <motion.h2 style={{ x: xLeft, y: yText }} className=" text-5xl md:text-8xl scale-y-[1.2]">
                            Planned
                        </motion.h2>

                        {/* "for You" on the right */}
                        <motion.h2 style={{ x: xRight, y: yText }} className="text-5xl md:text-8xl scale-y-[1.2]">
                            for You
                        </motion.h2>
                    </div>

                    {/* Bottom Caption */}
                    <motion.div
                        className="absolute bottom-24 text-center max-w-lg px-4"
                    >
                        <p className="text-2xl md:text-3xl text-white">
                            Every moment curated, every experience unforgettable leave the planning to us.
                        </p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
