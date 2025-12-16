"use client";

import { SlidersHorizontal, ChevronDown } from "lucide-react";

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
    return (
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 bg-white p-4 rounded-lg border border-[#1a1a1a]/10 shadow-sm">

            {/* Left: Filters */}
            <div className="flex flex-wrap items-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 border border-[#1a1a1a]/20 rounded-md bg-white hover:bg-gray-50 transition-colors cursor-pointer">
                    <SlidersHorizontal size={16} />
                    <span className="font-poppins text-sm font-medium">All Filters</span>
                </button>

                <div className="h-6 w-px bg-gray-300 mx-2 hidden md:block"></div>

                {/* Accommodation Type */}
                <div className="relative">
                    <select
                        value={accommodationType}
                        onChange={(e) => setAccommodationType(e.target.value)}
                        className="appearance-none pl-4 pr-10 py-2 border border-[#1a1a1a]/20 rounded-md bg-white hover:bg-gray-50 transition-colors font-poppins text-sm cursor-pointer outline-none focus:border-[#BEA585]"
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
                <div className="relative">
                    <select
                        value={priceRange}
                        onChange={(e) => setPriceRange(e.target.value)}
                        className="appearance-none pl-4 pr-10 py-2 border border-[#1a1a1a]/20 rounded-md bg-white hover:bg-gray-50 transition-colors font-poppins text-sm cursor-pointer outline-none focus:border-[#BEA585]"
                    >
                        <option value="all">Every Price</option>
                        <option value="low">Under ₹50,000</option>
                        <option value="mid">₹50,000 - ₹80,000</option>
                        <option value="high">₹80,000+</option>
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" />
                </div>

                {/* Bed Type Filter */}
                <div className="relative">
                    <select
                        value={bedType}
                        onChange={(e) => setBedType(e.target.value)}
                        className="appearance-none pl-4 pr-10 py-2 border border-[#1a1a1a]/20 rounded-md bg-white hover:bg-gray-50 transition-colors font-poppins text-sm cursor-pointer outline-none focus:border-[#BEA585]"
                    >
                        <option value="all">All Bed Types</option>
                        {availableBedTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                    <ChevronDown size={14} className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500" />
                </div>
            </div>

            {/* Right: Currency/Sort */}
            <div className="flex items-center gap-4 cursor-pointer">
                <span className="font-poppins text-sm font-bold text-[#1a1a1a]">INR</span>
                <ChevronDown size={14} />
            </div>

        </div>
    );
}
