"use client";

import { useEffect, useState } from "react";

export default function MobileBlocker() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 1024);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);
        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    useEffect(() => {
        if (isMobile) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => { document.body.style.overflow = ""; };
    }, [isMobile]);

    if (!isMobile) return null;

    return (
        <div className="fixed inset-0 z-100 flex flex-col items-center justify-center bg-[#F5F2EA] px-6 text-center text-[#1a1a1a]">
            <h1 className="text-3xl font-serif mb-4">Desktop Experience Only</h1>
            <p className="font-serif text-lg">
                This website is designed for an immersive desktop experience. Please open it on a larger screen.
            </p>
        </div>
    );
}
