"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const panels = [
    {
        id: 1,
        image: "/wellness/threesec.jpg", // Placeholder - need a wide nature shot or splitting one image
        subtitle: "SCENERY",
        title: "Breathtaking\nNature Views",
        description: ""
    },
    {
        id: 2,
        image: "/wellness/threesec.jpg", // Ideally different slices of same image or different images
        subtitle: "RELAXATION",
        title: "Rejuvenate\nRelax Refresh",
        description: ""
    },
    {
        id: 3,
        image: "/wellness/threesec.jpg",
        subtitle: "TREATMENTS",
        title: "Pure Relaxing\nSerenity",
        description: ""
    }
];

export default function NatureParallaxSection() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
    const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]);

    return (
        <section ref={sectionRef} className="relative h-screen w-full overflow-hidden flex bg-black" style={{paddingBottom:'50px'}}>

            {/* Background Parallax Image (One large image shared across columns or individual?) 
                The reference image looks like one continuous panoramic shot split by lines.
                I'll allow one large image to span the background and put content over it, split by borders.
            */}

            <motion.div style={{ scale, y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
                <Image
                    src="/wellness/threesec.jpg"
                    alt="Nature View"
                    fill
                    className="object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-black/20"></div>
            </motion.div>

            {/* Grid Content Overlay */}
            <div className="relative z-10 w-full h-full grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20">
                {panels.map((panel) => (
                    <div key={panel.id} className="h-full flex flex-col justify-end items-center text-center p-8 pb-16 group hover:bg-white/5 transition-colors duration-500">
                        <div className="flex flex-col gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <span className="font-poppins text-xs tracking-[0.2em] text-white/80 uppercase">
                                {panel.subtitle}
                            </span>
                            <h3 className="font-serif text-4xl md:text-5xl text-white whitespace-pre-line leading-tight">
                                {panel.title}
                            </h3>
                            {panel.description && (
                                <p className="font-poppins text-sm text-white/80 max-w-xs mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    {panel.description}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
}
