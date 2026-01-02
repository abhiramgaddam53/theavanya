"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import FiltersBar from "./FiltersBar";
import RateCard from "./RateCard";
import FAQSection from "@/components/FAQSection";
import { Villa } from "@/app/data/villas";

interface RatesContentProps {
  villa: Villa;
}

export default function RatesContent({ villa }: RatesContentProps) {
  const searchParams = useSearchParams();
  const checkInParam = searchParams.get("checkIn");
  const checkOutParam = searchParams.get("checkOut");

  const [bedType, setBedType] = useState("all");
  const [accommodationType, setAccommodationType] = useState("all");
  const [priceRange, setPriceRange] = useState("all");

  // Extract available bed types
  const availableBedTypes = useMemo(() => {
    const types = new Set<string>();
    villa.availableRooms.forEach((room) => {
      if (room.features[0]) types.add(room.features[0]);
    });
    return Array.from(types);
  }, [villa.availableRooms]);

  // Parse price helper
  const parsePrice = (priceStr: string) => {
    return parseInt(priceStr.replace(/[^0-9]/g, "")) || 0;
  };

  // Filter logic
  const filteredRooms = useMemo(() => {
    const start = checkInParam ? new Date(checkInParam) : null;
    const end = checkOutParam ? new Date(checkOutParam) : null;

    const roomsWithStatus = villa.availableRooms.map((room) => {
      // Check Date Availability
      let isAvailable = true;
      if (start && end && room.bookedDates) {
        const isBooked = room.bookedDates.some((dateStr) => {
          const bookedDate = new Date(dateStr);
          return bookedDate >= start && bookedDate < end;
        });
        if (isBooked) isAvailable = false;
      }
      return { ...room, isAvailable };
    });

    // Apply other filters AND Availability Filter (User Request: "don't show the rates for it")
    const filtered = roomsWithStatus.filter((room) => {
      // 1. Availability Filter
      if (!room.isAvailable) return false;

      // Bed Type Filter
      if (bedType !== "all" && room.features[0] !== bedType) return false;

      // Accommodation Type Filter
      if (accommodationType !== "all" && room.type !== accommodationType)
        return false;

      // Price Range Filter
      if (priceRange !== "all") {
        const price = parsePrice(room.price);
        if (priceRange === "low" && price >= 50000) return false;
        if (priceRange === "mid" && (price < 50000 || price > 80000))
          return false;
        if (priceRange === "high" && price <= 80000) return false;
      }

      return true;
    });

    return filtered;
  }, [
    villa.availableRooms,
    bedType,
    accommodationType,
    priceRange,
    checkInParam,
    checkOutParam,
  ]);

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1400px] mx-auto px-6 md:px-16 py-12 md:py-20">
        <div className="mb-4">
          <h3 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] mb-2">
          Pick Your Kind Of Escape
          </h3>
          <p className="font-poppins text-[#1a1a1a]/70 mb-8">
            Select your room and rate
          </p>

          {checkInParam && checkOutParam && (
            <div className="mb-6 bg-white p-3 rounded-md shadow-sm border border-gray-100 inline-block">
              <span className="font-poppins text-xs uppercase tracking-wider text-gray-500 mr-2">
                Dates Selected:
              </span>
              <span className="font-poppins text-sm font-medium">
                {checkInParam} <span className="mx-1">→</span> {checkOutParam}
              </span>
            </div>
          )}
        </div>

        {/* 3. Filters */}
        <FiltersBar
          bedType={bedType}
          setBedType={setBedType}
          availableBedTypes={availableBedTypes}
          accommodationType={accommodationType}
          setAccommodationType={setAccommodationType}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />

        {/* Count Header */}
        <div className="flex justify-between items-center mb-6 px-2">
          <span className="font-poppins text-sm font-medium text-[#1a1a1a]">
            {filteredRooms.length} Room Types Found
          </span>
        </div>

        {/* 4. Rates List */}
        <div className="flex flex-col gap-8 mb-6">
          {filteredRooms.map((room) => (
            <RateCard
              key={room.id}
              room={room}
              villaName={villa.title}
              villaSlug={villa.slug}
              villaImages={villa.images}
              isAvailable={room.isAvailable}
            />
          ))}
          {filteredRooms.length === 0 && (
            <div className="text-center py-20 bg-white rounded-lg border border-dashed border-gray-300">
              <p className="font-poppins text-[#1a1a1a]/60 text-lg">
                No rooms match your selected filters.
              </p>
              <button
                onClick={() => {
                  setBedType("all");
                  setAccommodationType("all");
                  setPriceRange("all");
                }}
                className="mt-4 text-blue-600 underline font-poppins cursor-pointer"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>

        {/* 5. FAQ Section */}
        <FAQSection
          tagline={villa.faqTagline}
          description={villa.faqDescription}
          faqs={villa.faqs}
        />
      </div>
    </div>
  );
}
