"use client";

import CommonParallaxCard from "./CommonParallaxCard";

const lifestyleItems = [
    {
        id: 1,
        title: "Swimming",
        description: "Dive into serenity. Our pools are heated and designed for relaxation in every season.",
        image: "/miscellaneous/swim.jpg",
        variant: "square" as const
    },
    {
        id: 2,
        title: "Golf Getaways",
        description: "Tee off in timeless style. Enjoy exclusive access to top-tier courses just moments away.",
        image: "/slider/5.jpg", // Placeholder
        variant: "portrait" as const
    },
    {
        id: 3,
        title: "In-Suite Spa",
        description: "Wellness, reimagined in your room. Experience therapies delivered by expert therapists.",
        image: "/slider/6.jpg", // Placeholder
        variant: "landscape" as const
    },
    {
        id: 4,
        title: "Cultural Tours",
        description: "Walk through history. Guided tours through museums, hidden art studios, and landmarks.",
        image: "/slider/8.jpg", // Placeholder
        variant: "portrait" as const
    },
    {
        id: 5,
        title: "Cooking Masterclass",
        description: "Taste, create, savor. Join our chefs for a culinary experience sourcing fresh ingredients.",
        image: "/slider/2.jpg", // Placeholder
        variant: "square" as const
    }
];

export default function DesignedForYouSection() {
    return (
        <section className="bg-primary-bg py-18 px-6 md:px-16">
            <div className="max-w-[1400px] mx-auto">

                {/* Section Header */}
                <div className="text-center mb-18">
                    <h2 className="font-serif text-5xl text-[#1a1a1a] leading-tight">
                        Where Every Day is <br />
                        <span className="italic">Designed for You</span>
                    </h2>
                </div>

                {/* Grid Layout - Asymmetrical Board Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">

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
