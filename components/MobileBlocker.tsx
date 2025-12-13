"use client";

import { useEffect, useState } from "react";

export default function MobileBlocker() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            // Logic: If screen width is less than 1024px (standard desktop break), show blocker.
            // Adjust breakpoint as needed. Desktop usually implies > 1024px or > 768px depending on definition.
            // User said "tablet or mobile devices". iPad Pro is 1024px widely. Let's block < 1024px.
            setIsMobile(window.innerWidth < 1024);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    if (!isMobile) return null;

    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#F5F2EA] px-6 text-center text-[#1a1a1a]">
            <h1 className="text-3xl font-serif mb-4">Desktop Experience Only</h1>
            <p className="font-serif text-lg">
                This website is designed for an immersive desktop experience. Please open it on a larger screen.
            </p>
        </div>
    );
}
