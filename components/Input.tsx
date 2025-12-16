"use client";

import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

export default function Input({ label, error, className = "", ...props }: InputProps) {
    return (
        <div className={`flex flex-col gap-1 w-full ${className}`}>
            <label className="font-poppins text-xs uppercase tracking-wider text-[#1a1a1a]/60 font-medium">
                {label}
            </label>
            <input
                className="w-full bg-transparent border-b border-[#1a1a1a]/20 py-2 font-serif text-[#1a1a1a] placeholder-[#1a1a1a]/30 focus:outline-none focus:border-[#BEA585] transition-colors duration-300"
                {...props}
            />
            {error && <span className="text-red-500 text-xs font-poppins">{error}</span>}
        </div>
    );
}
