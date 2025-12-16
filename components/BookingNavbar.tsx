"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { MapPin, Phone, ChevronDown } from "lucide-react";

export default function BookingNavbar() {
    const pathname = usePathname();

    const isActive = (path: string) => pathname.startsWith(path);

    return (
        <header className="w-full bg-white border-b border-gray-200 text-[#1a1a1a]">

            {/* 1. Top Bar: Navigation Links */}
            <div className="hidden md:flex justify-end px-6 md:px-16 py-3 text-xs font-poppins uppercase tracking-widest border-b border-gray-100">
                <div className="flex gap-8 opacity-70">
                    <Link
                        href="/booking/over-view"
                        className={`${isActive('/booking/over-view') ? 'opacity-100 font-bold border-b border-black pb-0.5' : 'hover:opacity-100 transition-opacity'}`}
                    >
                        Overview
                    </Link>
                    <Link
                        href="/booking/gallery"
                        className={`${isActive('/booking/gallery') ? 'opacity-100 font-bold border-b border-black pb-0.5' : 'hover:opacity-100 transition-opacity'}`}
                    >
                        Gallery
                    </Link>
                    <Link
                        href="/booking/accommodations"
                        className={`${isActive('/booking/accommodations') ? 'opacity-100 font-bold border-b border-black pb-0.5' : 'hover:opacity-100 transition-opacity'}`}
                    >
                        Accommodations
                    </Link>
                    <Link
                        href="/booking/dining"
                        className={`${isActive('/booking/dining') ? 'opacity-100 font-bold border-b border-black pb-0.5' : 'hover:opacity-100 transition-opacity'}`}
                    >
                        Dining
                    </Link>
                    <Link
                        href="/booking/wellness"
                        className={`${isActive('/booking/wellness') ? 'opacity-100 font-bold border-b border-black pb-0.5' : 'hover:opacity-100 transition-opacity'}`}
                    >
                        Wellness
                    </Link>
                    <Link
                        href="/booking/events"
                        className={`${isActive('/booking/events') ? 'opacity-100 font-bold border-b border-black pb-0.5' : 'hover:opacity-100 transition-opacity'}`}
                    >
                        Events
                    </Link>
                </div>
            </div>

            {/* 2. Middle Bar: Brand & Info */}
            <div className="bg-white px-6 md:px-16 py-4 flex justify-between items-center">
                {/* Brand */}
                <div className="flex flex-col">
                    <Link href="/" className="font-serif text-2xl md:text-3xl leading-none">
                        The Avanya
                    </Link>
                    <div className="flex gap-1 mt-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <span key={i} className="text-[10px] text-[#BEA585] mx-[1px]">★</span>
                        ))}
                    </div>
                </div>

                {/* Right Info */}
                <div className="hidden md:flex gap-6 text-xs font-poppins font-medium tracking-wide">
                    <button className="flex items-center gap-2 hover:opacity-70 transition-opacity">
                        <MapPin size={14} />
                        <span className="underline">VIEW MAP</span>
                    </button>
                    <div className="flex items-center gap-2">
                        <Phone size={14} />
                        <span>+91 40-67676767</span>
                    </div>
                </div>
            </div>

            {/* 3. Bottom Bar: Booking Widget */}
            <div className="bg-white border-t border-gray-100 px-6 md:px-16 py-4 shadow-sm">
                <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Dates */}
                    <div className="flex-1 w-full md:w-auto flex flex-col gap-1 border-b md:border-b-0 md:border-r border-gray-200 pb-2 md:pb-0 md:pr-6 cursor-pointer hover:bg-gray-50 transition-colors rounded px-2 py-1">
                        <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Dates (1 Night)</span>
                        <div className="flex items-center justify-between">
                            <span className="font-poppins text-sm font-medium">Wed, Dec 10 → Thu, Dec 11</span>
                            {/* <Calendar size={14} className="opacity-40" /> */}
                        </div>
                    </div>

                    {/* Rooms & Guests */}
                    <div className="flex-1 w-full md:w-auto flex flex-col gap-1 border-b md:border-b-0 md:border-r border-gray-200 pb-2 md:pb-0 md:px-6 cursor-pointer hover:bg-gray-50 transition-colors rounded px-2 py-1">
                        <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Rooms & Guests</span>
                        <div className="flex items-center justify-between">
                            <span className="font-poppins text-sm font-medium">1 Room, 1 Adult</span>
                            <ChevronDown size={14} className="opacity-40" />
                        </div>
                    </div>

                    {/* Special Rates */}
                    <div className="flex-1 w-full md:w-auto flex flex-col gap-1 pb-2 md:pb-0 md:px-6 cursor-pointer hover:bg-gray-50 transition-colors rounded px-2 py-1">
                        <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">Special Rates</span>
                        <div className="flex items-center justify-between">
                            <span className="font-poppins text-sm font-medium">Lowest Regular Rate</span>
                            <ChevronDown size={14} className="opacity-40" />
                        </div>
                    </div>

                    {/* CTA */}
                    <button className="bg-[#4A4A4A] text-white px-8 py-3 rounded-full text-xs font-bold font-poppins uppercase tracking-wider hover:bg-[#333] transition-colors whitespace-nowrap w-full md:w-auto">
                        View Rates
                    </button>

                </div>
            </div>
        </header>
    );
}
