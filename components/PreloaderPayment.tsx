"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface PreloaderProps {
    isBooking?: boolean;
    duration?: number;
}

export default function PreloaderPayment({ isBooking = false, duration = 3000 }: PreloaderProps) {
    const [isVisible, setIsVisible] = useState(true);
    const [animationKey, setAnimationKey] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const restartAnimation = useCallback(() => {
        setAnimationKey(prev => prev + 1);
        setIsVisible(true);
    }, []);

    useEffect(() => {
        if (!isBooking) {
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, duration);
            return () => clearTimeout(timer);
        }

        intervalRef.current = setInterval(() => {
            restartAnimation();
        }, duration + 500);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
    }, [isBooking, duration, restartAnimation]);

    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
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
        <AnimatePresence mode="wait" key={animationKey}>
            <motion.div
                className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white/95 backdrop-blur-md px-4"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
                layout
            >
                <div className="relative flex flex-col items-center justify-center w-full max-w-md">
                    <motion.div
                        className="relative w-36 h-36 mb-8"
                        variants={topVariants}
                        initial="initial"
                        animate="animate"
                    >
                        <Image
                            src="/logos/logo.png"
                            alt="Avanya Resort"
                            width={144}
                            height={90}
                            className="object-contain"
                            priority
                        />
                    </motion.div>

                    <div className="h-1 w-40 overflow-hidden bg-[#e0ded5] mb-8 rounded-full shadow-inner">
                        <motion.div
                            className="h-full bg-[#1a1a1a] rounded-full shadow-lg"
                            variants={barVariants}
                            initial="initial"
                            animate="animate"
                        />
                    </div>
                    <motion.div
                        className="text-center"
                        variants={bottomVariants}
                        initial="initial"
                        animate="animate"
                    >
                        <span className="text-lg font-semibold uppercase tracking-[0.15em] text-gray-800 block leading-tight px-4">
                            {isBooking
                                ? "Checking With Payment Portal"
                                : "Ultra Luxury Eco Heritage Wellness"
                            }
                        </span>
                    </motion.div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}