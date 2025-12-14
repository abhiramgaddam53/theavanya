"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2600);

        return () => clearTimeout(timer);
    }, []);

    const barVariants = {
        initial: { width: "0%" },
        animate: {
            width: ["0%", "100%", "0%"],
            transition: {
                duration: 2.5,
                times: [0, 0.6, 1],
                ease: "easeInOut" as const,
            },
        },
    };

    const topVariants = {
        initial: { y: -50, opacity: 0 },
        animate: {
            y: [-50, -50, 0, 0, -50],
            opacity: [0, 0, 1, 1, 0],
            transition: {
                duration: 2.5,
                times: [0, 0.1, 0.3, 0.7, 0.9],
                ease: "easeInOut" as const,
            },
        },
    };

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
                    <div className="relative flex flex-col items-center justify-center w-full">

                        <motion.div
                            className="relative w-36 h-36"
                            variants={topVariants}
                            initial="initial"
                            animate="animate"
                        >
                            <Image
                                src="/logos/logo.png"
                                alt="Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </motion.div>

                        <div className="h-[4px] w-40 overflow-hidden bg-[#e0ded5] relative z-10">
                            <motion.div
                                className="h-full bg-[#1a1a1a]"
                                variants={barVariants}
                                initial="initial"
                                animate="animate"
                            />
                        </div>

                        <motion.div
                            className="text-center mt-6"
                            variants={bottomVariants}
                            initial="initial"
                            animate="animate"
                        >
                            <div className="flex justify-center">
                                <span className="text-[16px] uppercase tracking-[0.2em] text-[#4a4a4a]">Ultra Luxury <br />Eco Heritage Wellness</span>
                            </div>
                        </motion.div>

                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
