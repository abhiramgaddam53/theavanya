"use client";

import Link from "next/link";
import Button from "./Button";

export default function Navbar() {
  return (
    // <nav className="absolute font-poppins text-md top-0 left-0 w-full z-40 bg-transparent py-6 px-6 md:px-16 text-white">
    //   <div className="max-w-[1400px] mx-auto relative flex items-center">
    //     {/* Left */}
    //     <div>
    //       <Link href="/">The Avanya</Link>
    //     </div>

    //     {/* Center */}
    //     <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex gap-8">
    //       <Link href="/booking" className="hover:opacity-80 transition-opacity">
    //         Stays
    //       </Link>
    //       <Link
    //         href="/experiences"
    //         className="hover:opacity-80 transition-opacity"
    //       >
    //         Experiences
    //       </Link>
    //       <Link
    //         href="/wellness"
    //         className="hover:opacity-80 transition-opacity"
    //       >
    //         Wellness
    //       </Link>
    //       <Link
    //         href="/architecture"
    //         className="hover:opacity-80 transition-opacity"
    //       >
    //         Architecture
    //       </Link>
    //     </div>
    //     {/* Right */}
    //     <div className="ml-auto hidden md:block">
    //       <Button
    //         text="Private Concierge Line · 24/7 · By Appointment Only"
    //         variant="secondary"
    //         size="sm"
    //         marquee={true}
    //         className="max-w-[191px] text-white"
    //       />
    //     </div>
    //   </div>
    // </nav>
    <nav className="absolute font-poppins text-md top-0 left-0 w-full z-40 bg-transparent py-6 px-6 md:px-16 text-white">
      <div className="max-w-[1400px] mx-auto relative flex items-center">
        {/* Left */}
        <div>
          <Link href="/">The Avanya</Link>
        </div>

        {/* Center */}
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex gap-8">

          {/* Public Pages Dropdown */}
          <div className="relative group">
            <button className="hover:opacity-80 transition-opacity flex items-center gap-1">
              Public Pages
              <svg className="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 top-full mt-2 w-48 bg-white/95 backdrop-blur-md shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-white/20">
              <Link href="/" className="block px-6 py-3 text-[#1a1a1a] hover:bg-gray-100 rounded-t-xl transition-colors">Home Page</Link>
              <Link href="/experiences" className="block px-6 py-3 text-[#1a1a1a] hover:bg-gray-100 transition-colors">Experiences</Link>
              <Link href="/wellness" className="block px-6 py-3 text-[#1a1a1a] hover:bg-gray-100 transition-colors">Wellness</Link>
            </div>
          </div>
          {/* Booking Pages Dropdown */}
          <div className="relative group">
            <button className="hover:opacity-80 transition-opacity flex items-center gap-1">
              Booking Pages
              <svg className="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 top-full mt-2 w-48 bg-white/95 backdrop-blur-md shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-white/20">
              <Link href="/booking/over-view" className="block px-6 py-3 text-[#1a1a1a] hover:bg-gray-100 rounded-t-xl transition-colors">Overview</Link>
              <Link href="/booking/gallery" className="block px-6 py-3 text-[#1a1a1a] hover:bg-gray-100 transition-colors">Gallery</Link>
              <Link href="/booking/accommodations" className="block px-6 py-3 text-[#1a1a1a] hover:bg-gray-100 transition-colors">Accommodations</Link>
              <Link href="/booking/wellness" className="block px-6 py-3 text-[#1a1a1a] hover:bg-gray-100 rounded-b-xl transition-colors">Wellness</Link>
            </div>
          </div>
          {/* Admin Dashboard Dropdown */}
          <div className="relative group">
            <button className="hover:opacity-80 transition-opacity flex items-center gap-1">
              Admin Dashboard
              <svg className="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className="absolute left-0 top-full mt-2 w-56 bg-white/95 backdrop-blur-md shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-white/20">
              <Link href="/admin/dashboard" className="block px-6 py-3 text-[#1a1a1a] hover:bg-gray-100 rounded-t-xl transition-colors">Dashboard User Screen</Link>
              <Link href="admin/desk" className="block px-6 py-3 text-[#1a1a1a] hover:bg-gray-100 rounded-b-xl transition-colors">Front Desk</Link>
            </div>
          </div>
        </div>

        {/* Right - Remove marquee button */}
        <div className="ml-auto hidden md:block">
          {/* Empty or add new CTA */}
        </div>
      </div>
    </nav>
  );
}
