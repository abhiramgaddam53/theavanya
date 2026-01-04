"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
    "/homepage/slider/1.jpg",
    "/homepage/slider/2.jpg",
    "/homepage/slider/3.jpg",
    "/homepage/slider/4.jpg",
    "/homepage/slider/5.jpg",
    "/homepage/slider/6.jpg",
    "/homepage/slider/7.jpg",
    "/homepage/slider/8.jpg",
    "/homepage/slider/9.jpg",
    "/homepage/slider/10.jpg",
    "/homepage/slider/11.jpg",
    "/homepage/slider/12.jpg",
];

export default function InfiniteSlider() {
    return (
        <section className="w-full bg-primary-bg flex items-center justify-center overflow-hidden">

            {/* Slider wrapper — controls visible area */}
            <div className="w-full max-w-[95vw] h-[60vh] rounded-sm md:h-fit mx-auto overflow-hidden">
                <motion.div
                    className="flex gap-4 items-center"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        duration: 15,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {[...images, ...images].map((src, index) => (
                        <div
                            key={index}
                            className="relative h-[60vh] md:h-[80vh] aspect-3/4 shrink-0 overflow-hidden rounded-[8px]"
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
