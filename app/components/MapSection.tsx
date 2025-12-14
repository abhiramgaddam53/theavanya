"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function MapSection() {
    return (
        <section className="w-full bg-[#E5E1D8] text-[#1a1a1a]">
            <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden">

                {/* Google Map Iframe */}
                <div className="absolute inset-0 z-0">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.450072682199!2d78.48088157463017!3d17.533745798573385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb854db6e91eff%3A0xff94bacf06626aa5!2sAsterisks%20Inc%20%7C%20Creative%20Digital%20Studio!5e0!3m2!1sen!2sin!4v1765706513189!5m2!1sen!2sin" width="600" height="450" loading="lazy" className="w-full h-full object-cover"></iframe>
                </div>

                {/* Overlay Card for Location Info */}
                <div className="absolute bottom-0 left-0 p-6 md:p-12 w-full flex justify-between items-end pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="bg-[#F5F2EA] p-8 md:p-10 pointer-events-auto max-w-md shadow-2xl"
                    >
                        <h3 className="font-serif text-3xl md:text-4xl mb-4 text-[#1a1a1a]">Our Location</h3>
                        <p className="font-poppins text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
                            Nestled in the lush hills of Wayanad, surrounded by ancient forests and mist-covered peaks.
                        </p>
                        <div className="flex flex-col gap-2 font-poppins text-sm text-[#1a1a1a]">
                            <p>Wayanad, Kerala</p>
                            <p>India, 673121</p>
                        </div>
                        <div className="mt-8">
                            <Link href="https://maps.google.com" target="_blank" className="font-poppins text-xs uppercase tracking-widest border-b border-[#1a1a1a] pb-1 hover:opacity-60 transition-opacity">
                                Get Directions
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
