"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { MapPin, Phone, ChevronDown } from "lucide-react";
import { useBooking } from "@/context/BookingContext";
import { useEffect } from "react";

export default function BookingNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { checkIn, checkOut, guests, setCheckIn, setCheckOut, setGuests } =
    useBooking();

  const isActive = (path: string) => pathname.startsWith(path);

  // Sync URL params to Context on load/change
  useEffect(() => {
    const checkInParam = searchParams.get("checkIn");
    const checkOutParam = searchParams.get("checkOut");
    const guestsParam = searchParams.get("guests");

    if (checkInParam) setCheckIn(new Date(checkInParam));
    if (checkOutParam) setCheckOut(new Date(checkOutParam));
    if (guestsParam) setGuests(parseInt(guestsParam));
  }, [searchParams, setCheckIn, setCheckOut, setGuests]);

  const handleViewRates = () => {
    // Build query params
    const query = new URLSearchParams();
    if (checkIn) query.set("checkIn", checkIn.toISOString().split("T")[0]);
    if (checkOut) query.set("checkOut", checkOut.toISOString().split("T")[0]);
    query.set("guests", guests.toString());

    // Update current URL with new params
    router.push(`${pathname}?${query.toString()}`);
  };

  // Hide booking widget on complete-booking page
  const isCompleteBookingPage = pathname.includes("/complete-booking");

  return (
    <header className="w-full bg-white border-b border-gray-200 text-[#1a1a1a]">
      {/* 1. Top Bar: Navigation Links */}
      <div className="hidden md:flex justify-end px-6 md:px-16 py-3 text-xs font-poppins uppercase tracking-widest border-b border-gray-100">
        <div className="flex gap-8 opacity-70">
          <Link
            href="/booking/over-view"
            className={`${
              isActive("/booking/over-view")
                ? "opacity-100 font-bold border-b border-black pb-0.5"
                : "hover:opacity-100 transition-opacity"
            }`}
          >
            Overview
          </Link>
          <Link
            href="/booking/gallery"
            className={`${
              isActive("/booking/gallery")
                ? "opacity-100 font-bold border-b border-black pb-0.5"
                : "hover:opacity-100 transition-opacity"
            }`}
          >
            Gallery
          </Link>
          <Link
            href="/booking/accommodations"
            className={`${
              isActive("/booking/accommodations")
                ? "opacity-100 font-bold border-b border-black pb-0.5"
                : "hover:opacity-100 transition-opacity"
            }`}
          >
            Accommodations
          </Link>
          <Link
            href="/booking/events"
            className={`${
              isActive("/booking/events")
                ? "opacity-100 font-bold border-b border-black pb-0.5"
                : "hover:opacity-100 transition-opacity"
            }`}
          >
            Events
          </Link>
        </div>
      </div>

      {/* 2. Middle Bar: Brand & Info */}
      <div className="bg-white px-6 md:px-16 py-4 flex justify-between items-center">
        {/* Brand */}
        <div className="flex flex-col">
          <Link
            href="/"
            className="font-serif text-2xl md:text-3xl leading-none"
          >
            The Avanya
          </Link>
          <div className="flex gap-1 mt-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <span key={i} className="text-[10px] text-[#BEA585] mx-px">
                ★
              </span>
            ))}
          </div>
        </div>

        {/* Right Info */}
        <div className="hidden md:flex gap-6 text-xs font-poppins font-medium tracking-wide">
          <a
            href="https://google.com/maps/place/Asterisks+Inc+%7C+Creative+Digital+Studio/data=!4m2!3m1!1s0x0:0xff94bacf06626aa5?sa=X&ved=1t:2428&ictx=111"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:opacity-70 transition-opacity"
          >
            <MapPin size={14} />
            <span className="underline">VIEW MAP</span>
          </a>
          <a
            href="tel:+919966701124"
            className="flex items-center gap-2 hover:opacity-70 transition-opacity"
          >
            <Phone size={14} />
            <span>+91 9966701124</span>
          </a>
        </div>
      </div>

      {/* 3. Bottom Bar: Booking Widget */}
      {!isCompleteBookingPage && (
        <div className="bg-white border-t border-gray-100 px-6 md:px-16 py-4 shadow-sm">
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Dates */}
            <div className="flex-1 w-full md:w-auto flex flex-col gap-1 border-b md:border-b-0 md:border-r border-gray-200 pb-2 md:pb-0 md:pr-6 cursor-pointer hover:bg-gray-50 transition-colors rounded px-2 py-1">
              <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                Dates
              </span>
              <div className="flex items-center gap-2">
                <input
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  className="font-poppins text-sm font-medium bg-transparent outline-none w-full cursor-pointer"
                  onChange={(e) => setCheckIn(e.target.valueAsDate)}
                />
                <span className="text-gray-400">→</span>
                <input
                  type="date"
                  min={
                    checkIn
                      ? checkIn.toISOString().split("T")[0]
                      : new Date().toISOString().split("T")[0]
                  }
                  disabled={!checkIn}
                  className="font-poppins text-sm font-medium bg-transparent outline-none w-full cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
                  onChange={(e) => setCheckOut(e.target.valueAsDate)}
                />
              </div>
            </div>

            {/* Rooms & Guests */}
            <div className="flex-1 w-full md:w-auto flex flex-col gap-1 border-b md:border-b-0 md:border-r border-gray-200 pb-2 md:pb-0 md:px-6 cursor-pointer hover:bg-gray-50 transition-colors rounded px-2 py-1">
              <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                Guests
              </span>
              <div className="flex items-center justify-between">
                <input
                  type="number"
                  min={1}
                  max={10}
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value) || 1)}
                  className="font-poppins text-sm font-medium bg-transparent outline-none w-full cursor-pointer"
                />
                <ChevronDown size={14} className="opacity-40" />
              </div>
            </div>

            {/* CTA */}
            <button
              onClick={handleViewRates}
              className="bg-[#4A4A4A] text-white px-8 py-3 rounded-full text-xs font-bold font-poppins uppercase tracking-wider hover:bg-[#333] transition-colors whitespace-nowrap w-full md:w-auto cursor-pointer"
            >
              View Rates
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
