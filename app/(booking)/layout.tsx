"use client";

import { Suspense } from "react";
import BookingNavbar from "@/components/BookingNavbar";
import MinimalLoader from "@/components/MinimalLoader";

import { BookingProvider } from "@/context/BookingContext";
import Footer from "@/components/Footer";

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BookingProvider>
      <div className=" min-h-screen">
        <Suspense fallback={null}>
          <MinimalLoader />
        </Suspense>
        <Suspense fallback={null}>
          <BookingNavbar />
        </Suspense>
        <main>{children}</main>
        {/* Placeholder BookingFooter or just standard Footer for now if not specified. User requested "footer of its own". */}
        <Footer />
      </div>
    </BookingProvider>
  );
}
