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
                <div className="absolute bottom-0 left-0 w-full h-full "></div>

                {/* Shadows / Gradients */}
                <div className="absolute bottom-0 left-0 w-full h-[60vh] bg-linear-to-t from-black  to-transparent z-[1]"></div>
                <div className="absolute top-0 left-0 h-full w-[25vw] "></div>
                <div className="absolute top-0 right-0 h-full w-[25vw]  "></div>
            </div>

            {/* Main Title - Centered with Parallax */}
            {/* <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                <motion.div style={{ y: yParallax }}>
                    <motion.h1
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 2.7, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="font-serif text-[#F5F2EA] leading-[0.9]"
                    >
                        <span className="block text-9xl font-light tracking-tight">Discover & Do</span>
                    </motion.h1>
                </motion.div>
            </div> */}

            {/* Subtitle - Pinned to Bottom */}
            {/* <div className="absolute bottom-20 left-0 w-full z-10 flex justify-center text-center px-4">
                <motion.div style={{ y: yParallax }} className="max-w-lg">
                    <motion.p
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 2.8, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="text-[#F5F2EA] text-2xl font-light opacity-90"
                    >
                        A deeply personal approach to wellness, guided by nature, silence, and ancient intelligence.
                    </motion.p>
                </motion.div>
            </div> */}
          <div className="relative z-10 h-full  flex flex-col items-center justify-center text-center text-light" style={{color:'white'}}>
                <span className="font-poppins text-xs font-bold tracking-[0.3em] uppercase mb-6 block opacity-90">
                    Wellness
                </span>
                <h1 className="font-serif text-5xl  md:text-7xl lg:text-8xl tracking-tight mb-8">
                        <span className="block text-6xl md:text-9xl font-light tracking-tight">Discover & Do</span>
                </h1>
                <p className="font-poppins text-base relative top-40 md:top-0 px-2 md:px-0 md:text-sm max-w-lg mx-auto leading-relaxed opacity-90">
                        A deeply personal approach to wellness, guided by nature, silence, and ancient intelligence.
                </p>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60">
                    <div className="w-px h-12 bg-white/50" />
                </div>
            </div>
        </section>
    );
}
