"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Button from "@/components/Button";


const experiences = [
    { id: 1, title: "Seclusion", image: "/homepage/experiences/1.jpg" },
    { id: 2, title: "Silence", image: "/homepage/experiences/2.jpg" },
    { id: 3, title: "Privacy", image: "/homepage/experiences/3.jpg" },
    { id: 4, title: "Stillness", image: "/homepage/experiences/4.jpg" },
    { id: 5, title: "Restoration", image: "/homepage/experiences/5.jpg" },
    { id: 6, title: "Wellness", image: "/homepage/experiences/6.jpg" },
    { id: 7, title: "Craft", image: "/homepage/experiences/7.jpg" },
    { id: 8, title: "Nature", image: "/homepage/experiences/8.jpg" },
    { id: 9, title: "Ritual", image: "/homepage/experiences/9.jpg" },
    { id: 10, title: "Presence", image: "/homepage/experiences/10.jpg" },
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
        <div ref={ref} className="py-10 border-b border-[#1a1a1a]/10">
            <motion.h3
                className="font-serif text-5xl transition-colors duration-500 cursor-pointer"
                animate={{
                    color: isInView ? "#1a1a1a" : "rgba(26, 26, 26, 0.2)",
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
        <section className="bg-primary-bg py-32 px-6 md:px-16">
            <div className="max-w-[1400px] mx-auto">

                {/* Header */}
                <div className="mb-12">
                    <h2 className="font-serif text-5xl tracking-tighter leading-tighter text-[#1a1a1a]">
                        Luxury, <span className="italic">Rewritten.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                    {/* Left – Sticky Image */}
                    <div className="sticky top-32 self-start hidden md:block">
                        <div className="relative aspect-[4/3] w-full overflow-hidden">
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
                                        objectFit="cover"
                                        className="object-cover"
                                        priority={exp.id === 1}
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right – List */}
                    <div className="flex flex-col relative">
                        {experiences.map((exp) => (
                            <ExperienceItem
                                key={exp.id}
                                item={exp}
                                setActiveId={setActiveId}
                            />
                        ))}

                        {/* Footer Text & CTA */}
                        <div className="mt-24 max-w-md">
                            <p className="font-poppins text-sm font-light text-[#1a1a1a]/70 leading-relaxed mb-8">
                                The Avanya presents a curated collection of experiences, from serene rainforest strolls to immersive art and culture tours designed to reconnect you with the rhythms of nature.
                            </p>
                            <Button
                                text="View All Activities"
                                variant="underline-dark"
                                size="none"
                                href="#"
                                className="font-bold text-xs"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}