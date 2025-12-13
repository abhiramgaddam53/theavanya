"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Total animation: 2.5s
        // 0.6 * 2.5 = 1.5s (Fill)
        // 0.4 * 2.5 = 1.0s (Shrink)
        // Extra buffer before unmount: 2.6s
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2600);

        return () => clearTimeout(timer);
    }, []);

    // Bar: 0% -> 100% -> 0%
    const barVariants = {
        initial: { width: "0%" },
        animate: {
            width: ["0%", "100%", "0%"],
            transition: {
                duration: 2.5,
                times: [0, 0.6, 1],
                ease: "easeInOut" as const, // Direct literal
            },
        },
    };

    // Visibility Times (approximate based on Bar % logic)
    // Fill Phase (0-1.5s): 25% loaded -> t = 0.25 * 1.5 = 0.375s. Fraction of 2.5s = 0.15
    // Shrink Phase (1.5-2.5s): 75% width (remaining) -> 25% into shrink -> 1.5 + (0.25 * 1) = 1.75s. Fraction = 0.7

    // Top Element (Logo) - Comes from Y direction (-50) to center (0), then back to Y (-50)
    const topVariants = {
        initial: { y: -50, opacity: 0 },
        animate: {
            y: [-50, -50, 0, 0, -50],
            opacity: [0, 0, 1, 1, 0],
            transition: {
                duration: 2.5,
                times: [0, 0.1, 0.3, 0.7, 0.9], // Arrive by 0.3, stay til 0.7, leave by 0.9
                ease: "easeInOut" as const,
            },
        },
    };

    // Bottom Element (Text) - Comes from Y direction (50) to center (0), then back to Y (50)
    const bottomVariants = {
        initial: { y: 50, opacity: 0 },
        animate: {
            y: [50, 50, 0, 0, 50],
            opacity: [0, 0, 1, 1, 0],
            transition: {
                duration: 2.5,
                times: [0, 0.1, 0.3, 0.7, 0.9],
                ease: "easeInOut" as const,
            },
        },
    };

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    className="fixed inset-0 gap-2 z-50 flex flex-col items-center justify-center bg-[#F5F2EA]"
                    initial={{ y: 0 }}
                    exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
                >
                    {/* Container to center elements relative to the bar line */}
                    <div className="relative flex flex-col items-center justify-center w-full">

                        {/* Logo (Top) */}
                        <motion.div
                            className="relative w-24 h-24"
                            variants={topVariants}
                            initial="initial"
                            animate="animate"
                        >
                            <Image
                                src="/logos/black.png"
                                alt="Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </motion.div>

                        {/* Progress Bar (Center) */}
                        {/* Using absolute positioning wrapper or just static block to act as anchor */}
                        <div className="h-[2px] w-40 overflow-hidden bg-[#e0ded5] relative z-10">
                            <motion.div
                                className="h-full bg-[#1a1a1a]"
                                variants={barVariants}
                                initial="initial"
                                animate="animate"
                            />
                        </div>

                        {/* Text (Bottom) */}
                        <motion.div
                            className="text-center mt-6"
                            variants={bottomVariants}
                            initial="initial"
                            animate="animate"
                        >
                            <h1 className="text-xl font-serif tracking-widest text-[#1a1a1a]">THE AVANYA</h1>
                            <div className="mt-1 flex justify-center">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-[#4a4a4a]">Hotels & Resorts</span>
                            </div>
                        </motion.div>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
