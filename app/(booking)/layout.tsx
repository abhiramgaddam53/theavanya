"use client";

import BookingNavbar from "@/components/BookingNavbar";
import MinimalLoader from "@/components/MinimalLoader";

export default function BookingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="bg-white min-h-screen">
            <MinimalLoader />
            <BookingNavbar />
            <main>
                {children}
            </main>
            {/* Placeholder BookingFooter or just standard Footer for now if not specified. User requested "footer of its own". */}
            <footer className="bg-[#1a1a1a] text-white py-12 text-center">
                <p className="font-poppins text-sm opacity-60">© 2024 The Avanya Booking. All rights reserved.</p>
            </footer>
        </div>
    );
}
