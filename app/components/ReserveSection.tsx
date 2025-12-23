"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Button from "@/components/Button";

export default function ReserveSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "center center"],
    });

    // Rotation from tilted left (-15deg) to straight (0deg) based on scroll
    const rotate = useTransform(scrollYProgress, [0, 1], [-15, 0]);

    // Slight downward movement to center it as we scroll, but stopping "in the middle"
    const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

    return (
        <section ref={containerRef} className="relative w-full h-[150vh]">

            {/* Background Image - Absolute and covering the full scrollable height */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/homepage/reserve.jpg"
                    alt="Reserve Background"
                    fill
                    className="object-cover brightness-[0.6]"
                />
            </div>

            {/* Sticky Container for the Card */}
            <div className="sticky top-0 h-screen w-full flex items-start justify-center z-10 px-4 pt-[20vh]">

                {/* Popup Card */}
                <motion.div
                    style={{ rotate, y }}
                    className="bg-primary-bg px-16 py-24 max-w-2xl text-center shadow-2xl origin-bottom"
                >
                    {/* Icon */}
                    <div className="flex justify-center mb-6 text-[#1a1a1a]">
                        <Image
                            src="/logos/king.png"
                            alt="Logo"
                            height={50}
                            width={50}
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Title */}
                    <h2 className="font-serif text-5xl tracking-tighter leading-tighter text-black mb-6 scale-y-[1.2]">
                        Reserve Your Stay
                    </h2>

                    {/* Description */}
                    <p className="font-poppins text-sm md:text-base text-black leading-relaxed mb-6 max-w-lg mx-auto">
                        Booking with Avanya means more than just selecting dates — it’s about tailoring every detail to suit your stay. Whether you’d like to include curated add-on services or keep things minimal, you have full control over your experience.
                    </p>

                    {/* Button */}
                    <Button
                        text="Book Now"
                        variant="underline-dark"
                        size="none"
                        href="#"
                        className="font-bold text-md"
                    />

                </motion.div>
            </div>

        </section>
    );
}
