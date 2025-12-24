"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import WellnessCard from "./WellnessCard";

const items = [
    {
        id: 1,
        title: "Private Concierge",
        description: "A dedicated point of contact who understands your preferences before you express them.",
        image: "/wellness/serv/Cincierfe.jpg"
    },
    {
        id: 2,
        title: "Private Chef Experience",
        description: "Daily meals crafted around your dietary needs, moods, and wellness goals.",
        image: "/wellness/serv/Experience.jpg"
    },
    {
        id: 3,
        title: "Arrival & Departure Assistance",
        description: "Seamless airport, helipad, and private transfer coordination.",
        image: "/wellness/serv/Departure.jpg"
    },
    {
        id: 4,
        title: "Digital Detox Management",
        description: "Optional complete Wi-Fi and device suspension for uninterrupted mental clarity.",
        image: "/wellness/serv/Management.jpg"
    },
    {
        id: 5,
        title: "In-Villa Wellness Rituals",
        description: "Therapies conducted in the privacy of your villa unhurried, uninterrupted.",
        image: "/wellness/serv/Rituals.jpg"
    },
    {
        id: 6,
        title: "Personal Naturalist",
        description: "Guided explorations into local flora, wildlife, and ecological storytelling.",
        image: "/wellness/serv/Naturalist.jpg"
    },
    {
        id: 7,
        title: "Quiet Hour Protocol",
        description: "Time windows where service becomes invisible, preserving silence.",
        image: "/wellness/serv/Quiet.jpg"
    },
    {
        id: 8,
        title: "Custom Wellness Itineraries",
        description: "Daily experiences shaped around how you feel, not fixed schedules.",
        image: "/wellness/serv/Itineraries.jpg"
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

    // 8 cards need more scroll distance
    const x = useTransform(smoothProgress, [0, 1], ["0%", "-72%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-secondary-bg text-[#F5F2EA]">
            <div className="sticky top-0 h-screen overflow-hidden flex items-center">

                {/* Horizontal Scroll Track */}
                <motion.div
                    style={{ x }}
                    className="flex items-center justify-center pl-[20vw]"
                >
                    {/* Title Section - Takes up part of viewport to allow cards to peek */}
                    <div className="min-w-[45vw] h-screen flex items-center justify-start pr-[30vw] z-10 shrink-0">
                        <h2 className="font-serif text-6xl leading-none">
                            Every Detail, <br />Personally Curated.
                        </h2>
                    </div>

                    {/* Cards Container */}
                    <div className="flex gap-2 items-center h-screen py-[8vh]">
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
