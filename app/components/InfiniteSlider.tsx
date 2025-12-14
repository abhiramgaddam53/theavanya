"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
    "/slider/1.jpg",
    "/slider/2.jpg",
    "/slider/3.jpg",
    "/slider/4.jpg",
    "/slider/5.jpg",
    "/slider/6.jpg",
    "/slider/7.jpg",
    "/slider/8.jpg",
    "/slider/9.jpg",
    "/slider/10.jpg",
    "/slider/11.jpg",
    "/slider/12.jpg",
];

export default function InfiniteSlider() {
    return (
        <section className="w-full bg-primary-bg flex items-center justify-center overflow-hidden">

            {/* Slider wrapper — controls visible area */}
            <div className="w-full max-w-[95vw] h-fit mx-auto overflow-hidden">
                <motion.div
                    className="flex gap-8 items-center"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 20,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {[...images, ...images].map((src, index) => (
                        <div
                            key={index}
                            className="relative h-[80vh] aspect-3/4 shrink-0"
                        >
                            <Image
                                src={src}
                                alt={`Slider image ${index}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
