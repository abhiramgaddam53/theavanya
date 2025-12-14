"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Preloader from "./Preloader";
import { AnimatePresence } from "framer-motion";

export default function NavigationLoader() {
    const pathname = usePathname();
    // Default to true for initial load, but we can also manage this via logic
    const [isLoading, setIsLoading] = useState(false);
    const [prevPath, setPrevPath] = useState(pathname);

    useEffect(() => {
        // If the path changes, trigger loading
        if (pathname !== prevPath) {
            setIsLoading(true);
            const timer = setTimeout(() => {
                setIsLoading(false);
                setPrevPath(pathname);
            }, 2600); // Wait for the Preloader animation to complete (2.6s in Preloader.tsx)
            return () => clearTimeout(timer);
        }
    }, [pathname, prevPath]);

    // Initial load handler - Preloader component itself handles initial "isLoading=true" state on mount if we just render it? 
    // Actually, Preloader.tsx has internal state `isLoading` initialized to true.
    // If we want to reuse it, we should probably control `isLoading` via props or let it mount/unmount.

    // Better approach: Since Preloader.tsx manages its own internal timer and exit animation, 
    // simply remounting it (via key change) or rendering it when we detect navigation might work.
    // However, Preloader has `initial` state logic. 

    // Let's modify Preloader to accept an external `isLoading` prop or just use `key` to reset it?
    // User wants it on "every page navigation".
    // If text component mount/unmount is expensive, we might want to just show/hide.

    // But Preloader.tsx is designed to `setIsLoading(false)` after 2.6s.
    // If we render `<Preloader key={pathname} />`, it will mount fresh on every path change.
    // That seems simplest.

    return (
        <AnimatePresence mode="wait">
            <Preloader key={pathname} />
        </AnimatePresence>
    );
}
