"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Signature from "../../components/Signature";

export default function WelcomeSection() {
    return (
        <section className="relative w-full bg-[#F5F2EA] py-32 px-6 overflow-hidden text-[#4A4A4A] ">

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center text-[#1a1a1a]">

                {/* Small Icon / Logo Marker */}
                <div className="mb-3">
                    <span className="text-2xl font-serif">❦</span>
                </div>

                {/* Subtitle */}
                <h3 className="text-[#4A4A4A] tracking-tight text-sm md:text-base mb-6 font-medium font-poppins">
                    Grounded Luxury
                </h3>

                {/* Main Heading */}
                <h2 className="font-serif text-6xl leading-tight mb-8 text-[#4A4A4A]">
                    Where Luxury Learns to Disappear.
                </h2>

                {/* Letter Body */}
                <div className="font-poppins text-[#4A4A4A] space-y-6 max-w-lg leading-tight tracking-tight text-[14px]">
                    <p className="font-poppins text-[14px]">Dear Valued Guest,</p>

                    <p className="font-poppins text-[14px]">
                        The Avanya was never meant to be discovered only arrived at.
                        Born from a forgotten 19th-century tea estate deep in the hills of Wayanad, this land was
                        reclaimed by forest long before we reclaimed it with intention.
                    </p>

                    <p className="font-poppins text-[14px]">
                        Here, architecture yields to nature.
                        Service exists without spectacle.
                        Time slows, not by design, but by environment.
                    </p>

                    <p className="font-poppins text-[14px]">
                        Our team operates on a single principle: anticipation without interruption.
                        If there is anything you desire, it has already been considered.
                    </p>

                    <div className="pt-3 flex flex-col items-center gap-4">
                        <p className="font-poppins text-[14px]">
                            Warmest regards,
                        </p>
                        {/* Signature SVG */}
                        <div className="text-[#1a1a1a] w-32 h-16">
                            <Signature className="w-full h-full" />
                        </div>
                        {/* Name and Title */}
                        <div className="text-center">
                            <h4 className="font-serif text-2xl text-[#1a1a1a]">Pradhyumn Dhondi</h4>
                            <p className="font-poppins text-[10px] text-[#8e8e8e] uppercase tracking-widest mt-1">General Manager</p>
                        </div>
                    </div>
                </div>

            </div>
        </section >
    );
}
