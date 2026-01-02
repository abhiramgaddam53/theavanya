"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import Button from "@/components/Button";

export default function ReserveSection() {
    const containerRef = useRef(null);

    return (
        <section ref={containerRef} className="relative w-full h-[110vh] md:h-[150vh]">

            {/* Background Image - Absolute and covering the full scrollable height */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/homepage/reserve.jpg"
                    alt="Reserve Background"
                    fill
                    className="object-cover brightness-[0.6]"
                />
            </div>

            {/* Sticky Container for the Card */}
            <div className="sticky top-0 h-screen w-full flex items-start justify-center z-10 px-4 pt-[20vh] " style={{borderRadius:'8px'}}>

                {/* Popup Card */}
                <div
                    className="bg-primary-bg px-8 md:px-16 py-24 max-w-2xl text-center shadow-2xl origin-bottom"
                >
                    {/* Icon */}
                    <div className="flex justify-center mb-6 text-[#1a1a1a]">
                        <Image
                            src="/logos/logo.png"
                            alt="Logo"
                            height={50}
                            width={50}
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Title */}
                    <h2 className="font-serif text-3xl md:text-5xl tracking-tighter leading-tighter text-black mb-6 scale-y-[1.2]">
                        Reserve Your Stay
                    </h2>

                    {/* Description */}
                    <p className="font-poppins text-[10px] md:text-sm md:text-base text-black leading-relaxed mb-6 max-w-lg mx-auto">
                        Booking with Avanya means more than just selecting dates it’s about tailoring every detail to suit your stay.
                    </p>

                    {/* Button */}
                    <Button
                        text="Book Now"
                        variant="underline-dark"
                        size="none"
                        href="#"
                        className="font-bold text-md"
                    />

                </div>
            </div>

        </section>
    );
}
