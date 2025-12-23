"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="relative bg-[#050505] w-full min-h-[100vh] flex flex-col items-center justify-between pb-12 pt-0 overflow-hidden">

            {/* Background Image - Centered and Large */}
            <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center pointer-events-none">
                <div className="relative w-full h-full">
                    <Image
                        src="/logos/footer.png"
                        alt="The Avanya"
                        fill
                        className="object-cover opacity-20 grayscale brightness-75 mask-image-gradient"
                        priority
                    />
                </div>
            </div>

            {/* Spacer to push content down if needed, or just justify-end */}
            <div className="flex-1"></div>

            {/* Bottom Navigation & Copyright */}
            <div className="flex flex-col items-center gap-8 relative z-10 mb-8 md:mb-12">
                {/* Navigation Links */}
                <nav className="flex items-center gap-8 md:gap-16">
                    {[
                        { label: "MENU", href: "#" },
                        { label: "ABOUT", href: "#" },
                        { label: "CONTACT", href: "#" }
                    ].map((link) => (
                        <Link
                            key={link.label}
                            href={link.href}
                            className="text-[#F5F2EA]/60 hover:text-[#F5F2EA] text-[10px] md:text-xs tracking-[0.2em] font-light font-poppins transition-colors duration-300 uppercase"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Copyright */}
                <p className="text-[#F5F2EA]/30 text-[9px] tracking-[0.05em] font-poppins mt-2">
                    © 2025 THE AVANYA
                </p>
            </div>
        </footer>
    );
}
