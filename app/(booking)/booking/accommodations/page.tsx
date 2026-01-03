import { Suspense } from "react";
import { AccommodationsClient } from "./AccommodationsClient";

export const dynamic = "force-dynamic";

export default function AccommodationsPage() {
  return (
    <div className="bg-[#f9f9f9] min-h-screen py-16 px-6 md:px-28">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="font-serif  text-3xl md:text-5xl text-[#1a1a1a] mb-6 text-center">
          Our Accommodations
        </h1>
        <p className="text-center font-poppins text-[#1a1a1a]/70 max-w-5xl mx-auto mb-16">
          Discover a sanctuary where luxury meets nature. Choose from our
          exclusive collection of villas and residences, each designed to offer
          privacy, comfort, and breathtaking views.
        </p>

        <Suspense
          fallback={
            <div className="text-center py-12">Loading accommodations...</div>
          }
        >
          <AccommodationsClient />
        </Suspense>
      </div>
    </div>
  );
}
