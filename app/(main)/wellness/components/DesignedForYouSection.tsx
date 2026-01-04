"use client";

import CommonParallaxCard from "./CommonParallaxCard";

const lifestyleItems = [
    {
        id: 1,
        title: "Forest Bathing (Shinrin-Yoku)",
        tag: "Nature Therapy",
        description: "Guided walks through untouched rainforest paths designed to calm the nervous system, reduce cortisol, and restore mental clarity.",
        image: "/experiences/luxury/Forest.jpg",
        variant: "square" as const
    },
    {
        id: 2,
        title: "Ayurvedic Bio-Hacking",
        tag: "Ancient Intelligence",
        description: "Personalized Ayurvedic treatments adapted for modern lifestyles focused on balance, longevity, and deep restoration.",
        image: "/experiences/luxury/Wellness.jpg",
        variant: "portrait" as const
    },
    {
        id: 3,
        title: "Sleep Optimization",
        tag: "Deep Rest",
        description: "Digital detox, EMF-free environments, circadian-aligned lighting, and natural soundscapes for profoundly restorative sleep.",
        image: "/wellness/Deep Rest.jpg",
        variant: "landscape" as const
    },
    {
        id: 4,
        title: "Mindful Movement",
        tag: "Body Awareness",
        description: "Private yoga and mobility sessions designed around your energy levels, not rigid routines.",
        image: "/wellness/Body Awareness.jpg",
        variant: "portrait" as const
    },
    {
        id: 5,
        title: "Regenerative Dining",
        tag: "Nourishment",
        description: "Seasonal, farm-to-table cuisine crafted to nourish the body without excess no menus, only intention.",
        image: "/wellness/Nourishment.jpg",
        variant: "square" as const
    }
];

export default function DesignedForYouSection() {
    return (
        <section className="bg-primary-bg py-18 px-6 md:px-16">
            <div className="max-w-[1400px] mx-auto">

                {/* Section Header */}
                <div className="text-center mb-18">
                    <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] leading-tight">
                        Where Every Day Is <br />
                        <span className="italic">Designed for You.</span>
                    </h2>
                </div>

                {/* Grid Layout - Asymmetrical Board Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-12">

                    {/* Row 1: Square (Left) + Portrait (Right) */}
                    <div className="flex flex-col justify-start">
                        <CommonParallaxCard
                            {...lifestyleItems[0]}
                        />
                    </div>
                    <div className="flex flex-col justify-start pt-24 md:pt-0"> {/* Shift right column down visually if needed, or just standard grid */}
                        <CommonParallaxCard
                            {...lifestyleItems[1]}
                        />
                    </div>

                    {/* Row 2: Landscape (Full Width or Spanning?) - Image shows Landscape spanning or just large. Let's make it span 2 cols to match the "In-Suite Spa" wide look */}
                    <div className="md:col-span-2 w-full flex justify-start">
                        <CommonParallaxCard
                            {...lifestyleItems[2]}
                            className="w-full md:w-[80%]"
                        />
                    </div>

                    {/* Row 3: Portrait (Left) + Square (Right) - Image shows Portrait (Cultural) Left, Landscape/Square (Cooking) Right */}
                    <div>
                        <CommonParallaxCard
                            {...lifestyleItems[3]}
                        />
                    </div>
                    <div className="flex flex-col justify-start">
                        <CommonParallaxCard
                            {...lifestyleItems[4]}
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}
