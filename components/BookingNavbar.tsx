"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { MapPin, Phone, ChevronDown, Minus, Plus } from "lucide-react";
import { useBooking } from "@/context/BookingContext";
import { useEffect, useRef, useState } from "react";

export default function BookingNavbar() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const {
    checkIn, checkOut, adults, children,
    setCheckIn, setCheckOut, setAdults, setChildren
  } = useBooking();

  const [isGuestOpen, setIsGuestOpen] = useState(false);
  const guestRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => pathname.startsWith(path);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (guestRef.current && !guestRef.current.contains(event.target as Node)) {
        setIsGuestOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Sync URL params to Context on load/change
  useEffect(() => {
    const checkInParam = searchParams.get("checkIn");
    const checkOutParam = searchParams.get("checkOut");
    const adultsParam = searchParams.get("adults");
    const childrenParam = searchParams.get("children");
    const guestsParam = searchParams.get("guests");

    if (checkInParam) setCheckIn(new Date(checkInParam));
    if (checkOutParam) setCheckOut(new Date(checkOutParam));

    if (adultsParam) setAdults(parseInt(adultsParam));
    else if (guestsParam && !adultsParam) setAdults(parseInt(guestsParam));

    if (childrenParam) setChildren(parseInt(childrenParam));
  }, [searchParams, setCheckIn, setCheckOut, setAdults, setChildren]);

  const handleViewRates = () => {
    // Build query params
    const query = new URLSearchParams();
    if (checkIn) query.set("checkIn", checkIn.toISOString().split("T")[0]);
    if (checkOut) query.set("checkOut", checkOut.toISOString().split("T")[0]);
    query.set("adults", adults.toString());
    query.set("children", children.toString());
    query.set("guests", (adults + children).toString());

    // Update current URL with new params
    router.push(`${pathname}?${query.toString()}`);
  };

  // Hide booking widget on complete-booking page
  const isCompleteBookingPage = pathname.includes("/complete-booking");
  const isGallaryPage = pathname.includes("/gallery");

  const checkInRef = useRef<HTMLInputElement>(null);
  const checkOutRef = useRef<HTMLInputElement>(null);

  const handleCheckInChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = e.target.valueAsDate;
    if (date) {
      setCheckIn(date);
      // Reset checkout if it's invalid (before or same as new check-in)
      if (checkOut && date >= checkOut) {
        setCheckOut(null);
      }
      // Automatically open Check-Out picker after a small delay for better UX
      setTimeout(() => {
        checkOutRef.current?.showPicker();
      }, 100);
    }
  };

  return (
    <header className="w-full bg-white border-b border-gray-200 text-[#1a1a1a]">
      {/* 1. Top Bar: Navigation Links */}
      <div className="hidden justify-end px-4 md:px-28 py-3 text-xs font-poppins uppercase tracking-widest border-b border-gray-100">
        <div className="flex gap-8 opacity-70">
          <Link
            href="/booking/over-view"
            className={`${isActive("/booking/over-view")
              ? "opacity-100 font-bold border-b border-black pb-0.5"
              : "hover:opacity-100 transition-opacity"
              }`}
          >
            Overview
          </Link>
          <Link
            href="/booking/gallery"
            className={`${isActive("/booking/gallery")
              ? "opacity-100 font-bold border-b border-black pb-0.5"
              : "hover:opacity-100 transition-opacity"
              }`}
          >
            Gallery
          </Link>
          <Link
            href="/booking/accommodations"
            className={`${isActive("/booking/accommodations")
              ? "opacity-100 font-bold border-b border-black pb-0.5"
              : "hover:opacity-100 transition-opacity"
              }`}
          >
            Accommodations
          </Link>
          <Link
            href="/booking/wellness"
            className={`${isActive("/booking/wellness")
              ? "opacity-100 font-bold border-b border-black pb-0.5"
              : "hover:opacity-100 transition-opacity"
              }`}
          >
            Wellness
          </Link>
        </div>
      </div>

      {/* 2. Middle Bar: Brand & Info */}
      <div className="bg-white px-4 md:px-28 py-4 flex justify-between items-center">
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
        <div className="flex flex-rows items-end md:flex-row md:items-center gap-3 md:gap-6 text-[10px] md:text-xs font-poppins font-medium tracking-wide">
          <a
            href="https://google.com/maps/place/Asterisks+Inc+%7C+Creative+Digital+Studio/data=!4m2!3m1!1s0x0:0xff94bacf06626aa5?sa=X&ved=1t:2428&ictx=111"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 md:gap-2 hover:opacity-70 transition-opacity"
          >
            <MapPin size={14} className="w-4 h-4 md:w-auto md:h-auto" />
            <span className="underline">VIEW MAP</span>
          </a>
          <a
            href="tel:+919966701124"
            className="flex items-center gap-1 md:gap-2 hover:opacity-70 transition-opacity"
          >
            <Phone size={14} className="w-4 h-4 md:w-auto md:h-auto" />
            <span>+91 9966701124</span>
          </a>
        </div>
      </div>

      {/* 3. Bottom Bar: Booking Widget */}
      {(!isCompleteBookingPage && !isGallaryPage) && (
        <div className="bg-white border-t border-gray-100 px-4 md:px-28 py-4 shadow-sm">
          <div className="max-w-[1400px] mx-auto flex flex-wrap md:flex-nowrap items-center justify-between gap-3 md:gap-6">
            
            {/* Dates */}
            {/* <div className="w-[60%] md:w-auto md:flex-1 flex flex-col gap-1 border-r border-gray-200 pr-2 md:pr-6 cursor-pointer hover:bg-gray-50 transition-colors rounded px-2 py-1">
              <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                Dates
              </span>
              <div className="flex items-center gap-1 md:gap-2">
                <input
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                  className="font-poppins text-xs md:text-sm font-medium bg-transparent outline-none w-full cursor-pointer min-w-0"
                  onChange={(e) => setCheckIn(e.target.valueAsDate)}
                  onClick={(e) => (e.target as HTMLInputElement).showPicker()}
                />
                <span className="text-gray-400 text-xs md:text-base">→</span>
                <input
                  type="date"
                  min={
                    checkIn
                      ? checkIn.toISOString().split("T")[0]
                      : new Date().toISOString().split("T")[0]
                  }
                  disabled={!checkIn}
                  className="font-poppins text-xs md:text-sm font-medium bg-transparent outline-none w-full cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 min-w-0"
                  onChange={(e) => setCheckOut(e.target.valueAsDate)}
                  onClick={(e) => (e.target as HTMLInputElement).showPicker()}
                />
              </div>
            </div> */}
            <div className="w-[60%] md:w-auto md:flex-1 flex flex-col gap-1 border-r border-gray-200 pr-2 md:pr-6 cursor-pointer hover:bg-gray-50 transition-colors rounded px-2 py-1">
  <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
    Dates
  </span>
  <div className="flex items-center gap-1 md:gap-2">
    {/* Check-In Input */}
    <input
      ref={checkInRef}
      type="date"
      min={new Date().toISOString().split("T")[0]}
      className="font-poppins text-xs md:text-sm font-medium bg-transparent outline-none w-full cursor-pointer min-w-0"
      onChange={handleCheckInChange}
      onClick={() => checkInRef.current?.showPicker()}
    />
    
    <span className="text-gray-400 text-xs md:text-base">→</span>
    
    {/* Check-Out Input */}
    <input
      ref={checkOutRef}
      type="date"
      min={
        checkIn
          ? new Date(checkIn.getTime() + 86400000).toISOString().split("T")[0] // Check-in + 1 Day
          : new Date().toISOString().split("T")[0]
      }
      disabled={!checkIn}
      className="font-poppins text-xs md:text-sm font-medium bg-transparent outline-none w-full cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 min-w-0"
      onChange={(e) => setCheckOut(e.target.valueAsDate)}
      onClick={() => checkOutRef.current?.showPicker()}
    />
  </div>
</div>

            {/* Rooms & Guests - Updated to Adults & Children */}
            <div
              ref={guestRef}
              className="relative w-[34%] md:w-auto md:flex-1"
            >
              <div
                onClick={() => setIsGuestOpen(!isGuestOpen)}
                className="flex flex-col gap-1 border-r md:border-r border-gray-200 md:border-gray-200 px-2 md:px-6 cursor-pointer hover:bg-gray-50 transition-colors rounded py-1"
              >
                <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase truncate">
                  Guests
                </span>
                <div className="flex items-center justify-between">
                  <span className="font-poppins text-xs md:text-sm font-medium truncate">
                    {adults} Adults, {children} Child
                  </span>
                  <ChevronDown size={14} className={`opacity-40 transition-transform hidden md:block ${isGuestOpen ? 'rotate-180' : ''}`} />
                </div>
              </div>

              {/* Guest Dropdown */}
              {isGuestOpen && (
                <div className="absolute top-full right-0 md:left-6 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 p-4 z-50 animate-in fade-in zoom-in-95 duration-200">
                  {/* Adults */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex flex-col">
                      <span className="font-poppins text-sm font-medium">Adults</span>
                      <span className="text-[10px] text-gray-400">Ages 13+</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => adults > 1 && setAdults(adults - 1)}
                        className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${adults > 1 ? 'border-gray-300 hover:border-black text-black' : 'border-gray-100 text-gray-300 cursor-not-allowed'}`}
                        disabled={adults <= 1}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="font-poppins text-sm font-semibold w-4 text-center">{adults}</span>
                      <button
                        onClick={() => setAdults(adults + 1)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-black transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Children */}
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="font-poppins text-sm font-medium">Children</span>
                      <span className="text-[10px] text-gray-400">Ages 0-12</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => children > 0 && setChildren(children - 1)}
                        className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${children > 0 ? 'border-gray-300 hover:border-black text-black' : 'border-gray-100 text-gray-300 cursor-not-allowed'}`}
                        disabled={children <= 0}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="font-poppins text-sm font-semibold w-4 text-center">{children}</span>
                      <button
                        onClick={() => setChildren(children + 1)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-black transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="w-full border-t border-gray-200 my-2 md:hidden"></div>
            {/* CTA */}
            
            <Link
            href="/booking/accommodations/the-canopy-villa/rates"
            className="w-full md:w-auto bg-[#4A4A4A] text-center text-white px-8 py-3 rounded-full text-xs font-bold font-poppins uppercase tracking-wider hover:bg-[#333] transition-colors whitespace-nowrap cursor-pointer md:mt-0 "
          >
            <button
              onClick={handleViewRates}
              className=""
            >
              View Rates
            </button>
          </Link>
          </div>
        </div>
      )}
    </header>
  );
}
