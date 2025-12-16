"use client";

import React, { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
    label: string;
    options: { value: string; label: string }[];
    error?: string;
}

export default function Select({ label, options, error, className = "", ...props }: SelectProps) {
    return (
        <div className={`flex flex-col gap-1 w-full ${className}`}>
            <label className="font-poppins text-xs uppercase tracking-wider text-[#1a1a1a]/60 font-medium">
                {label}
            </label>
            <div className="relative">
                <select
                    className="w-full bg-transparent border-b border-[#1a1a1a]/20 py-2 font-serif text-[#1a1a1a] focus:outline-none focus:border-[#BEA585] transition-colors duration-300 appearance-none cursor-pointer"
                    {...props}
                >
                    {options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
                {/* Custom Arrow */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-[#1a1a1a]/40">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6" />
                    </svg>
                </div>
            </div>
            {error && <span className="text-red-500 text-xs font-poppins">{error}</span>}
        </div>
    );
}
