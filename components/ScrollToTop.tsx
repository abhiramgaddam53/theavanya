
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "lenis/react";
import { ArrowUp, Loader2 } from "lucide-react";


export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);
    const lenis = useLenis();

    useEffect(() => {
        const toggleVisibility = () => {
            const shouldBeVisible = window.scrollY > 300;
            setIsVisible((prev) => {
                if (prev === shouldBeVisible) return prev;
                if (!shouldBeVisible) setIsScrolling(false);
                return shouldBeVisible;
            });
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        setIsScrolling(true);
        if (lenis) {
            lenis.scrollTo(0, {
                onComplete: () => setIsScrolling(false),
            });
        } else {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 20 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    onClick={scrollToTop}
                    disabled={isScrolling}
                    className="fixed bottom-8 right-8 z-50 p-3 rounded-full bg-secondary-bg text-white shadow-lg border border-white/10 hover:opacity-90 transition-all cursor-pointer group flex items-center justify-center"
                    aria-label="Scroll to top"
                >
                    {isScrolling ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                    ) : (
                        <ArrowUp className="w-4 h-4" />
                    )}
                </motion.button>
            )}
        </AnimatePresence>
    );
}


