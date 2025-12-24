"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function ParallaxImageSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Parallax logic for the inner image
    const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);
    const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

    return (
        <section ref={containerRef} className="py-18 bg-primary-bg overflow-hidden">

            {/* Header (Text) - Constrained to standard width */}
            <div className="max-w-[1400px] mx-auto w-full px-6 md:px-16 mb-16">
                <h2 className="font-serif text-4xl md:text-7xl text-[#1a1a1a] leading-[1]">
                    Live the <br />
                    <span className="italic">Parisian Way</span>
                </h2>
                <p className="mt-6 font-poppins text-[#1a1a1a]/70 max-w-lg font-light">
                    Immerse yourself in timeless moments from hidden cafes to rooftop views through experiences crafted for every kind of traveler.
                </p>
            </div>

            {/* Parallax Image Card - Full Bleed (No Padding) */}
            <div className="w-full relative h-[80vh] overflow-hidden "> 
  <motion.div 
    style={{ scale, y }} 
    className="relative w-[80%] h-[120%] -top-[10%] overflow-hidden " 
  >
    <Image
      src="/wellness/hotel123.jpg"
      alt="Parisian Lifestyle"
      fill
      className="content-fit"
    />
  </motion.div>
</div>

        </section>
    );
}
