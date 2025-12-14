"use client";

import { motion } from "framer-motion";

export const GrainOverlay = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            className="fixed inset-0 z-0 pointer-events-none mix-blend-overlay"
        >
            <motion.div
                className="w-full h-full"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "repeat",
                }}
                animate={{
                    x: ["0%", "-5%", "-15%", "10%", "5%"],
                    y: ["0%", "-10%", "5%", "-5%", "10%"],
                }}
                transition={{
                    duration: 0.5,
                    ease: "linear",
                    repeat: Infinity,
                }}
            />
        </motion.div>
    );
};
