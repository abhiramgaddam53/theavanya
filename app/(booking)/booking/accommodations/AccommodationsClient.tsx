"use client";

import Link from "next/link";
import Image from "next/image";
import { villas } from "@/app/data/villas";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import CommonRoomCard from "@/components/RoomCard";

export function AccommodationsClient() {
  const searchParams = useSearchParams();
  const checkInParam = searchParams.get("checkIn");
  const checkOutParam = searchParams.get("checkOut");

  const filteredVillas = useMemo(() => {
    if (!checkInParam || !checkOutParam) {
      return villas;
    }

    const start = new Date(checkInParam);
    const end = new Date(checkOutParam);

    // Map villas to availability status
    const villasWithStatus = villas.map((villa) => {
      // 1. Check Global Villa Blockout
      const isVillaBlocked = villa.bookedDates?.some((dateStr) => {
        const bookedDate = new Date(dateStr);
        return bookedDate >= start && bookedDate < end;
      });

      if (isVillaBlocked) {
        return { ...villa, isAvailable: false };
      }

      // 2. Check if ANY room is available
      // If the villa has no rooms defined, fallback to true (or false depending on logic, assuming true for safe fallback if data missing)
      if (!villa.availableRooms || villa.availableRooms.length === 0) {
        return { ...villa, isAvailable: true };
      }

      const hasAvailableRoom = villa.availableRooms.some((room) => {
        if (!room.bookedDates) return true; // Room has no specific blockouts
        const isRoomBlocked = room.bookedDates.some((dateStr) => {
          const bookedDate = new Date(dateStr);
          return bookedDate >= start && bookedDate < end;
        });
        return !isRoomBlocked;
      });

      return {
        ...villa,
        isAvailable: hasAvailableRoom,
      };
    });

    // Sort: Available first
    return villasWithStatus.sort((a, b) => {
      if (a.isAvailable === b.isAvailable) return 0;
      return a.isAvailable ? -1 : 1;
    });
  }, [checkInParam, checkOutParam]);

  return (
    <>
      {checkInParam && checkOutParam && (
        <div className="mb-8 text-center bg-white p-4 rounded-lg shadow-sm w-fit mx-auto border border-dashed border-[#1a1a1a]/20">
          <p className="font-poppins text-sm">
            Showing availability for{" "}
            <span className="font-bold">{checkInParam}</span> to{" "}
            <span className="font-bold">{checkOutParam}</span>
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredVillas.map((villa) => {
          const isAvailable = (villa as any).isAvailable !== false; // Default true if property undefined

          return (
            <div
              key={villa.id}
              className={`group relative rounded-lg overflow-hidden transition-all duration-300 ${!isAvailable ? "opacity-70 grayscale-[0.5]" : ""
                }`}
            >
              {!isAvailable && (
                <div className="absolute inset-0 z-50 bg-black/40 flex items-center justify-center pointer-events-none">
                  <span className="bg-red-500 text-white px-4 py-2 text-xs font-bold uppercase tracking-widest rounded shadow-md">
                    Sold Out
                  </span>
                </div>
              )}

              <Link href={`/booking/accommodations/${villa.slug}`} className="block">
                <CommonRoomCard
                  image={villa.imageSrc}
                  name={villa.title}
                  price={villa.price}
                  description={villa.description}
                  bed={villa.bed}
                  capacity={villa.capacity}
                  cta="View Details"
                />
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
