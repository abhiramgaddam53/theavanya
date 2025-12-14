"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import WellnessCard from "./WellnessCard";

const items = [
    {
        id: 1,
        title: "Private Chef",
        description: "Experience bespoke dining with meals crafted by your private chef tailored to your taste.",
        image: "/slider/7.jpg"
    },
    {
        id: 2,
        title: "Holistic Spa",
        description: "Rejuvenate your senses with our world-class spa treatments designed for complete relaxation.",
        image: "/slider/5.jpg"
    },
    {
        id: 3,
        title: "Yoga Retreat",
        description: "Find your inner peace with guided yoga sessions amidst the serenity of nature.",
        image: "/slider/6.jpg"
    },
    {
        id: 4,
        title: "Nature Walks",
        description: "Explore the untouched beauty of the surroundings with our curated nature trails.",
        image: "/slider/8.jpg"
    },
    {
        id: 5,
        title: "Meditation",
        description: "Guided meditation sessions to help you find clarity and stillness.",
        image: "/slider/1.jpg"
    },
    {
        id: 6,
        title: "Tea Tasting",
        description: "Sample the finest local teas in a private setting overlooking the plantation.",
        image: "/slider/2.jpg"
    },
    {
        id: 7,
        title: "Forest Bathing",
        description: "Immerse yourself in the healing atmosphere of the ancient forest.",
        image: "/slider/3.jpg"
    },
    {
        id: 8,
        title: "Sound Healing",
        description: "Restore balance to your body and mind with therapeutic sound healing sessions.",
        image: "/slider/4.jpg"
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

    // We start with the title visible (0% x).
    // As we scroll (0 -> 1), we slide everything left.
    // The "50%" instruction might imply we want the title to stick around longer?
    // Using a simpler linear transform for "whole text and images slide".
    // 8 cards * ~450px = ~3600px. Title = 100vw (~1500px). Total ~ 5000px.
    // We need to move enough to show the last card.
    const x = useTransform(smoothProgress, [0, 1], ["0%", "-85%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-secondary-bg text-[#F5F2EA]">
            <div className="sticky top-0 h-screen overflow-hidden flex items-center">

                {/* Horizontal Scroll Track */}
                <motion.div
                    style={{ x }}
                    className="flex items-center justify-center pl-[20vw]"
                >
                    {/* Title Section - Takes up part of viewport to allow cards to peek */}
                    <div className="min-w-[45vw] md:min-w-[40vw] h-screen flex items-center justify-start pr-[14vw] z-10 shrink-0">
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
                                />
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
