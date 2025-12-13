"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";


const experiences = [
    { id: 1, title: "Seclusion", image: "/slider/1.jpg" },
    { id: 2, title: "Silence", image: "/slider/2.jpg" },
    { id: 3, title: "Privacy", image: "/slider/3.jpg" },
    { id: 4, title: "Stillness", image: "/slider/4.jpg" },
    { id: 5, title: "Restoration", image: "/slider/5.jpg" },
    { id: 6, title: "Wellness", image: "/slider/6.jpg" },
    { id: 7, title: "Craft", image: "/slider/7.jpg" },
    { id: 8, title: "Nature", image: "/slider/8.jpg" },
    { id: 9, title: "Ritual", image: "/slider/9.jpg" },
    { id: 10, title: "Presence", image: "/slider/10.jpg" },
];

const ExperienceItem = ({
    item,
    setActiveId,
}: {
    item: typeof experiences[0];
    setActiveId: (id: number) => void;
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
        margin: "-45% 0px -45% 0px",
    });

    useEffect(() => {
        if (isInView) {
            setActiveId(item.id);
        }
    }, [isInView, item.id, setActiveId]);

    return (
        <div ref={ref} className="py-8 border-b border-black/15">
            <motion.h3
                className="font-serif text-6xl transition-colors duration-500"
                animate={{
                    color: isInView ? "#1a1a1a" : "rgba(0,0,0,0.25)",
                }}
            >
                {item.title}
            </motion.h3>
        </div>
    );
};

export default function ExperiencesSection() {
    const [activeId, setActiveId] = useState(experiences[0].id);

    return (
        <section className="bg-[#F5F2EA] py-32 px-6 md:px-16">
            <div className="max-w-7xl mx-auto">

                {/* Header */}
                <div className="mb-32">
                    <h2 className="font-serif text-center text-7xl text-[#1a1a1a]">
                        Luxury, Rewritten.
                    </h2>
                </div>

                <div className="grid grid-cols-2 gap-16">

                    {/* Left – Sticky Image */}
                    <div className="sticky top-32 h-fit self-start">
                        <div className="relative aspect-3/4 w-full overflow-hidden">
                            {experiences.map((exp) => (
                                <motion.div
                                    key={exp.id}
                                    className="absolute inset-0"
                                    animate={{
                                        opacity: activeId === exp.id ? 1 : 0,
                                        scale: activeId === exp.id ? 1 : 1.05,
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        ease: "easeInOut",
                                    }}
                                >
                                    <Image
                                        src={exp.image}
                                        alt={exp.title}
                                        fill
                                        className="object-cover"
                                        priority={exp.id === 1}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right – List */}
                    <div className="flex flex-col">
                        {experiences.map((exp) => (
                            <ExperienceItem
                                key={exp.id}
                                item={exp}
                                setActiveId={setActiveId}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}


// Simple internal helper for class names
function cn(...classes: (string | undefined | null | false)[]) {
    return classes.filter(Boolean).join(' ');
}


