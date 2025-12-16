"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import WellnessCard from "./WellnessCard";

const items = [
    {
        id: 1,
        title: "Forest Bathing",
        subtitle: "(Shinrin-Yoku)",
        tag: "Nature Therapy",
        description: "Guided walks through untouched rainforest paths designed to calm the nervous system, reduce cortisol, and restore mental clarity.",
        image: "/slider/3.jpg"
    },
    {
        id: 2,
        title: "Ayurvedic Bio-Hacking",
        tag: "Ancient Intelligence",
        description: "Personalized Ayurvedic treatments adapted for modern lifestyles focused on balance, longevity, and deep restoration.",
        image: "/slider/5.jpg"
    },
    {
        id: 3,
        title: "Sleep Optimization",
        tag: "Deep Rest",
        description: "Digital detox, EMF-free environments, circadian-aligned lighting, and natural soundscapes for profoundly restorative sleep.",
        image: "/slider/1.jpg"
    },
    {
        id: 4,
        title: "Mindful Movement",
        tag: "Body Awareness",
        description: "Private yoga and mobility sessions designed around your energy levels, not rigid routines.",
        image: "/slider/6.jpg"
    },
    {
        id: 5,
        title: "Conscious Nourishment",
        tag: "Regenerative Dining",
        description: "Seasonal, farm-to-table cuisine crafted to nourish the body without excess. No menus, only intention.",
        image: "/slider/2.jpg"
    }
];

export default function CuratedDetailsSection() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end end"],
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // 5 cards is significantly less width than 8.
    // Approximate translation reduced from -72% to -45% to align last card to screen edge.
    const x = useTransform(smoothProgress, [0, 1], ["0%", "-60%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-secondary-bg text-[#F5F2EA]">
            <div className="sticky top-0 h-screen overflow-hidden flex items-center">

                {/* Horizontal Scroll Track */}
                <motion.div
                    style={{ x }}
                    className="flex items-center justify-center pl-[20vw]"
                >
                    {/* Title Section - Takes up part of viewport to allow cards to peek */}
                    <div className="min-w-[45vw] h-screen flex items-center justify-start pr-[14vw] z-10 shrink-0">
                        <h2 className="font-serif text-6xl leading-none">
                            Where Every Day Is <br />Designed for You.
                        </h2>
                    </div>

                    {/* Cards Container */}
                    <div className="flex gap-8 items-center h-screen py-[8vh]">
                        {items.map((item) => (
                            <div key={item.id} className="p-4 h-full"> {/* h-full ensures wrapper fills the py-constrained height */}
                                <WellnessCard
                                    title={item.title}
                                    description={item.description}
                                    image={item.image}
                                    tag={item.tag}
                                />
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
