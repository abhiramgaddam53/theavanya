"use client";

import Link from "next/link";
import Button from "./Button";
import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  // Close menu when route changes or clicked outside
  const closeMenu = () => {
    setIsMenuOpen(false);
    setOpenAccordion(null);
  };
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
    // <nav className="absolute font-poppins text-md top-0 left-0 w-full z-40 bg-transparent py-6 px-6 md:px-16 text-white">
    //   <div className="max-w-[1400px] mx-auto relative flex items-center">
    //     {/* Left */}
    //     <div>
    //       <Link href="/">The Avanya</Link>
    //     </div>

    //     {/* Center */}
    //     <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex gap-8">

    //       {/* Public Pages Dropdown */}
    //       <div className="relative group">
    //         <button className="hover:opacity-80 transition-opacity flex items-center gap-1">
    //           Public Pages
    //           <svg className="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    //           </svg>
    //         </button>
    //         <div className="absolute left-0 top-full mt-2 w-48 bg-white/95 backdrop-blur-md shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-white/20">
    //           <Link href="/" className="block px-6 py-3 text-[#1a1a1a] hover:bg-gray-100 rounded-t-xl transition-colors">Home Page</Link>
    //           <Link href="/experiences" className="block px-6 py-3 text-[#1a1a1a] hover:bg-gray-100 transition-colors">Experiences</Link>
    //           <Link href="/wellness" className="block px-6 py-3 text-[#1a1a1a] hover:bg-gray-100 transition-colors">Wellness</Link>
    //         </div>
    //       </div>
    //       {/* Booking Pages Dropdown */}
    //       <div className="relative group">
    //         <button className="hover:opacity-80 transition-opacity flex items-center gap-1">
    //           Booking Pages
    //           <svg className="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    //           </svg>
    //         </button>
    //         <div className="absolute left-0 top-full mt-2 w-48 bg-white/95 backdrop-blur-md shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-white/20">
    //           <Link href="/booking/over-view" className="block px-6 py-3 text-[#1a1a1a] hover:bg-gray-100 rounded-t-xl transition-colors">Overview</Link>
    //           <Link href="/booking/gallery" className="block px-6 py-3 text-[#1a1a1a] hover:bg-gray-100 transition-colors">Gallery</Link>
    //           <Link href="/booking/accommodations" className="block px-6 py-3 text-[#1a1a1a] hover:bg-gray-100 transition-colors">Accommodations</Link>
    //           <Link href="/booking/wellness" className="block px-6 py-3 text-[#1a1a1a] hover:bg-gray-100 rounded-b-xl transition-colors">Wellness</Link>
    //         </div>
    //       </div>
    //       {/* Admin Dashboard Dropdown */}
    //       <div className="relative group">
    //         <button className="hover:opacity-80 transition-opacity flex items-center gap-1">
    //           Admin Dashboard
    //           <svg className="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    //           </svg>
    //         </button>
    //         <div className="absolute left-0 top-full mt-2 w-56 bg-white/95 backdrop-blur-md shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-white/20">
    //           <Link href="/admin/dashboard" className="block px-6 py-3 text-[#1a1a1a] hover:bg-gray-100 rounded-t-xl transition-colors">Dashboard User Screen</Link>
    //           <Link href="admin/desk" className="block px-6 py-3 text-[#1a1a1a] hover:bg-gray-100 rounded-b-xl transition-colors">Front Desk</Link>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Right - Remove marquee button */}
    //     <div className="ml-auto hidden md:block">
    //       {/* Empty or add new CTA */}
    //     </div>
    //   </div>
    // </nav>
    <>
    <nav className="absolute font-poppins text-md top-0 left-0 w-full z-40 bg-transparent py-6 px-6 md:px-16 text-white">
        <div className="max-w-[1400px] mx-auto relative flex items-center justify-between">
          
          {/* Left: Logo */}
          <div>
            <Link href="/" className="text-2xl font-serif tracking-tight">The Avanya</Link>
          </div>

          {/* Center: Desktop Navigation (Hidden on Mobile) */}
          <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex gap-8">
            {/* ... Desktop Links (Same as before) ... */}
            <div className="relative group">
              <button className="hover:opacity-80 transition-opacity flex items-center gap-1 py-2">
                Public Pages
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute left-0 top-full mt-2 w-48 bg-white/95 backdrop-blur-md shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-white/20">
                <Link href="/" className="block px-6 py-3 text-[#1a1a1a] hover:bg-gray-100 rounded-t-xl transition-colors text-sm">Home Page</Link>
                <Link href="/experiences" className="block px-6 py-3 text-[#1a1a1a] hover:bg-gray-100 transition-colors text-sm">Experiences</Link>
                <Link href="/wellness" className="block px-6 py-3 text-[#1a1a1a] hover:bg-gray-100 rounded-b-xl transition-colors text-sm">Wellness</Link>
              </div>
            </div>

            <div className="relative group">
              <button className="hover:opacity-80 transition-opacity flex items-center gap-1 py-2">
                Booking Pages
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute left-0 top-full mt-2 w-48 bg-white/95 backdrop-blur-md shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-white/20">
                <Link href="/booking/over-view" className="block px-6 py-3 text-[#1a1a1a] hover:bg-gray-100 rounded-t-xl transition-colors text-sm">Overview</Link>
                <Link href="/booking/gallery" className="block px-6 py-3 text-[#1a1a1a] hover:bg-gray-100 transition-colors text-sm">Gallery</Link>
                <Link href="/booking/accommodations" className="block px-6 py-3 text-[#1a1a1a] hover:bg-gray-100 transition-colors text-sm">Accommodations</Link>
                <Link href="/booking/wellness" className="block px-6 py-3 text-[#1a1a1a] hover:bg-gray-100 rounded-b-xl transition-colors text-sm">Wellness</Link>
              </div>
            </div>

            <div className="relative group">
              <button className="hover:opacity-80 transition-opacity flex items-center gap-1 py-2">
                Admin Dashboard
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
              </button>
              <div className="absolute left-0 top-full mt-2 w-56 bg-white/95 backdrop-blur-md shadow-xl rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-white/20">
                <Link href="/admin/dashboard" className="block px-6 py-3 text-[#1a1a1a] hover:bg-gray-100 rounded-t-xl transition-colors text-sm">Dashboard User Screen</Link>
                <Link href="/admin/desk" className="block px-6 py-3 text-[#1a1a1a] hover:bg-gray-100 rounded-b-xl transition-colors text-sm">Front Desk</Link>
              </div>
            </div>
          </div>

          {/* Right: Custom Minimal Mobile Menu Button */}
          <div className="md:hidden z-50">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white hover:opacity-70 transition-opacity focus:outline-none"
            >
              {isMenuOpen ? (
                <X size={24} color={isMenuOpen ? "#1a1a1a" : "white"} /> // Dark icon when menu is open (on white bg)
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="text-white"
                >
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="8" y1="12" x2="20" y2="12" />
                  <line x1="12" y1="18" x2="20" y2="18" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {/* 1. Backdrop (Click anywhere to close) */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={closeMenu}
        />
      )}

      {/* 2. Slide-down Menu Panel */}
      <div 
        className={`fixed top-0 left-0 w-full bg-white z-40 shadow-xl transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="pt-24 pb-8 px-6 flex flex-col max-h-[90vh] overflow-y-auto">
          
          {/* 1. Public Pages Accordion */}
          <div className="border-b border-gray-100">
            <button 
              onClick={() => toggleAccordion('public')}
              className="w-full flex justify-between items-center py-4 text-[#1a1a1a] font-serif text-lg"
            >
              Public Pages
              <ChevronDown 
                size={16} 
                className={`transition-transform duration-300 ${openAccordion === 'public' ? 'rotate-180' : ''}`} 
              />
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out bg-gray-50 rounded-lg ${
                openAccordion === 'public' ? 'max-h-48 opacity-100 mb-4' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="flex flex-col p-4 gap-3">
                <Link href="/" onClick={closeMenu} className="text-sm text-gray-600 font-poppins">Home Page</Link>
                <Link href="/experiences" onClick={closeMenu} className="text-sm text-gray-600 font-poppins">Experiences</Link>
                <Link href="/wellness" onClick={closeMenu} className="text-sm text-gray-600 font-poppins">Wellness</Link>
              </div>
            </div>
          </div>

          {/* 2. Booking Pages Accordion */}
          <div className="border-b border-gray-100">
            <button 
              onClick={() => toggleAccordion('booking')}
              className="w-full flex justify-between items-center py-4 text-[#1a1a1a] font-serif text-lg"
            >
              Booking Pages
              <ChevronDown 
                size={16} 
                className={`transition-transform duration-300 ${openAccordion === 'booking' ? 'rotate-180' : ''}`} 
              />
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out bg-gray-50 rounded-lg ${
                openAccordion === 'booking' ? 'max-h-48 opacity-100 mb-4' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="flex flex-col p-4 gap-3">
                <Link href="/booking/over-view" onClick={closeMenu} className="text-sm text-gray-600 font-poppins">Overview</Link>
                <Link href="/booking/gallery" onClick={closeMenu} className="text-sm text-gray-600 font-poppins">Gallery</Link>
                <Link href="/booking/accommodations" onClick={closeMenu} className="text-sm text-gray-600 font-poppins">Accommodations</Link>
                <Link href="/booking/wellness" onClick={closeMenu} className="text-sm text-gray-600 font-poppins">Wellness</Link>
              </div>
            </div>
          </div>

          {/* 3. Admin Dashboard Accordion */}
          <div className="border-b border-gray-100">
            <button 
              onClick={() => toggleAccordion('admin')}
              className="w-full flex justify-between items-center py-4 text-[#1a1a1a] font-serif text-lg"
            >
              Admin Dashboard
              <ChevronDown 
                size={16} 
                className={`transition-transform duration-300 ${openAccordion === 'admin' ? 'rotate-180' : ''}`} 
              />
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out bg-gray-50 rounded-lg ${
                openAccordion === 'admin' ? 'max-h-48 opacity-100 mb-4' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="flex flex-col p-4 gap-3">
                <Link href="/admin/dashboard" onClick={closeMenu} className="text-sm text-gray-600 font-poppins">Dashboard</Link>
                <Link href="/admin/desk" onClick={closeMenu} className="text-sm text-gray-600 font-poppins">Front Desk</Link>
              </div>
            </div>
          </div>

        </div>
      </div>
      </>
  );
}
