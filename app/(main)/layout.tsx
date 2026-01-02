"use client";

import MobileBlocker from "@/components/MobileBlocker";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { GrainOverlay } from "@/components/GrainOverlay";
import ScrollToTop from "@/components/ScrollToTop";
import NavigationLoader from "@/components/NavigationLoader";

export default function MainLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <NavigationLoader />
            <MobileBlocker />
            {/* <Navbar /> */}
            {/* <GrainOverlay /> */}
            {children}
            <Footer />
            <ScrollToTop />
        </>
    );
}
