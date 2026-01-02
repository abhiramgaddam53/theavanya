"use client";

import { ChevronDown, Filter, X } from "lucide-react";
import { useState } from "react";

interface FiltersBarProps {
    bedType: string;
    setBedType: (value: string) => void;
    availableBedTypes: string[];
    accommodationType: string;
    setAccommodationType: (value: string) => void;
    priceRange: string;
    setPriceRange: (value: string) => void;
}

export default function FiltersBar({
    bedType,
    setBedType,
    availableBedTypes,
    accommodationType,
    setAccommodationType,
    priceRange,
    setPriceRange
}: FiltersBarProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* MOBILE: Trigger Bar (Split Left/Right) */}
            <div className="flex md:hidden justify-between items-center mb-6 gap-4">
                {/* Left: Filters Trigger */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="flex-1 bg-white border border-[#1a1a1a]/10 p-3 rounded-lg shadow-sm flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors"
                >
                    <Filter size={16} />
                    <span className="font-poppins text-sm font-medium uppercase tracking-wider">Filters</span>
                </button>

                {/* Right: INR Display */}
                <div className="bg-white border border-[#1a1a1a]/10 p-3 rounded-lg shadow-sm flex items-center gap-2 px-6">
                    <span className="font-poppins text-sm font-bold text-[#1a1a1a]">INR</span>
                    <ChevronDown size={14} />
                </div>
            </div>

            {/* MOBILE MODAL BACKDROP */}
            {isOpen && (
                <div 
                    className="fixed inset-0 bg-black/60 z-40 md:hidden backdrop-blur-sm"
                    onClick={() => setIsOpen(false)}
                />
            )}

            {/* MAIN FILTER CONTAINER */}
            <div className={`
                // Base & Transition
                bg-white transition-all duration-300 ease-out
                
                // DESKTOP Styles (Horizontal Bar)
                md:flex md:flex-row md:justify-between md:items-center md:gap-4 md:mb-8 md:p-4 md:rounded-lg md:border md:border-[#1a1a1a]/10 md:shadow-sm md:static md:w-auto md:translate-y-0

                // MOBILE Styles (Bottom Sheet Modal)
                fixed bottom-0 left-0 right-0 z-50 rounded-t-3xl p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] md:shadow-sm
                ${isOpen ? 'translate-y-0' : 'translate-y-full md:translate-y-0 invisible md:visible'}
            `}>

                {/* Mobile Only: Header */}
                <div className="flex md:hidden justify-between items-center w-full mb-6">
                    <span className="font-serif text-xl text-[#1a1a1a]">Refine Search</span>
                    <button 
                        onClick={() => setIsOpen(false)}
                        className="p-2 bg-gray-100 rounded-full hover:bg-gray-200"
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* Filter Inputs Group */}
                <div className="flex flex-col md:flex-row flex-wrap items-stretch md:items-center gap-4 md:gap-3">

                    {/* Accommodation Type */}
                    <div className="relative w-full md:w-auto">
                        <select
                            value={accommodationType}
                            onChange={(e) => setAccommodationType(e.target.value)}
                            className="w-full md:w-auto appearance-none pl-4 pr-10 py-3 md:py-2 border border-[#1a1a1a]/20 rounded-xl md:rounded-md bg-white hover:bg-gray-50 transition-colors font-poppins text-sm cursor-pointer outline-none focus:border-[#BEA585]"
                        >
                            <option value="all">All Accommodations</option>
                            <option value="Guest Room">Guest Room</option>
                            <option value="Suite">Suite</option>
                            <option value="Villa">Villa</option>
                            <option value="Residence">Residence</option>
                        </select>
                        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" />
                    </div>

                    {/* Price Range */}
                    <div className="relative w-full md:w-auto">
                        <select
                            value={priceRange}
                            onChange={(e) => setPriceRange(e.target.value)}
                            className="w-full md:w-auto appearance-none pl-4 pr-10 py-3 md:py-2 border border-[#1a1a1a]/20 rounded-xl md:rounded-md bg-white hover:bg-gray-50 transition-colors font-poppins text-sm cursor-pointer outline-none focus:border-[#BEA585]"
                        >
                            <option value="all">Every Price</option>
                            <option value="low">Under ₹50,000</option>
                            <option value="mid">₹50,000 - ₹80,000</option>
                            <option value="high">₹80,000+</option>
                        </select>
                        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" />
                    </div>

                    {/* Bed Type Filter */}
                    <div className="relative w-full md:w-auto">
                        <select
                            value={bedType}
                            onChange={(e) => setBedType(e.target.value)}
                            className="w-full md:w-auto appearance-none pl-4 pr-10 py-3 md:py-2 border border-[#1a1a1a]/20 rounded-xl md:rounded-md bg-white hover:bg-gray-50 transition-colors font-poppins text-sm cursor-pointer outline-none focus:border-[#BEA585]"
                        >
                            <option value="all">All Bed Types</option>
                            {availableBedTypes.map((type) => (
                                <option key={type} value={type}>{type}</option>
                            ))}
                        </select>
                        <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" />
                    </div>
                </div>

                {/* Mobile Only: Apply Button */}
                <button 
                    onClick={() => setIsOpen(false)}
                    className="md:hidden mt-8 w-full bg-[#1a1a1a] text-white py-3.5 rounded-xl font-poppins font-bold uppercase tracking-wider text-xs shadow-lg active:scale-95 transition-transform"
                >
                    Apply Filters
                </button>

                {/* Desktop: Currency/Sort (Hidden in mobile modal) */}
                <div className="hidden md:flex items-center gap-4 cursor-pointer ml-auto">
                    <span className="font-poppins text-sm font-bold text-[#1a1a1a]">INR</span>
                    <ChevronDown size={14} />
                </div>

            </div>
        </>
    );
}