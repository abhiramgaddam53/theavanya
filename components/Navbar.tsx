"use client";

import Link from "next/link";
import Button from "./Button";

export default function Navbar() {
    return (
        <nav className="absolute font-poppins text-md top-0 left-0 w-full z-40 bg-transparent py-6 px-6 md:px-16 text-white">
            <div className="max-w-[1400px] mx-auto relative flex items-center">

                {/* Left */}
                <div>
                    The Avanya
                </div>

                {/* Center */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex gap-8">
                    <Link href="#" className="hover:opacity-80 transition-opacity">Stays</Link>
                    <Link href="#" className="hover:opacity-80 transition-opacity">Experiences</Link>
                    <Link href="/wellness" className="hover:opacity-80 transition-opacity">Wellness</Link>
                    <Link href="#" className="hover:opacity-80 transition-opacity">Architecture</Link>
                </div>
                {/* Right */}
                <div className="ml-auto hidden md:block">
                    <Button
                        text="Private Concierge Line · 24/7 · By Appointment Only"
                        variant="secondary"
                        size="sm"
                        marquee={true}
                        className="max-w-[164px] text-white"
                    />
                </div>

            </div>
        </nav>
    );
}
