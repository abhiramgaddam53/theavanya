import { villas } from "@/app/data/villas";
import { notFound } from "next/navigation";
import CommonRoomCard from "@/components/RoomCard";
import Button from "@/components/Button";
import Link from "next/link";
import HeroCarousel from "./HeroCarousel";
import FAQSection from "@/components/FAQSection";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function VillaPage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const { checkIn, checkOut } = await searchParams;

  const villa = villas.find((v) => v.slug === slug);

  if (!villa) {
    notFound();
  }

  const checkInDate = typeof checkIn === "string" ? new Date(checkIn) : null;
  const checkOutDate = typeof checkOut === "string" ? new Date(checkOut) : null;

  return (
    <main className="w-full bg-primary-bg">
      {/* Hero Section */}
      <HeroCarousel images={villa.images} title={villa.title} />

      {/* Content Section */}
      <section className="w-full bg-primary-bg py-24 px-28">
        <div className="max-w-[1400px] mx-auto">
          {/* Intro / Description */}
          <div className="mb-20 max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl tracking-tighter text-[#1a1a1a] leading-tight mb-6">
              Experience the {villa.title}
            </h2>
            <p className="font-poppins text-lg font-light text-gray-600 leading-relaxed">
              {villa.description}
            </p>
          </div>

          {/* Facilities Section */}
          {villa.facilities && villa.facilities.length > 0 && (
            <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-8 border-y border-[#1a1a1a]/10 py-12">
              {villa.facilities.map((facility, index) => (
                <div
                  key={index}
                  className={`flex flex-col gap-4 px-6 ${index !== 2 ? "md:border-r border-[#1a1a1a]/10" : ""
                    }`}
                >
                  <h4 className="font-serif text-2xl text-[#1a1a1a] italic">
                    {facility.title}
                  </h4>
                  <p className="font-poppins text-sm text-[#1a1a1a]/70 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* Available Rooms Header */}
          <div className="mb-8">
            <h3 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] tracking-tight">
            Pick Your Kind Of Escape
            </h3>
            {checkInDate && checkOutDate && (
              <p className="mt-2 text-sm font-poppins text-gray-500">
                Checking availability for{" "}
                <span className="font-medium text-black">
                  {checkInDate.toLocaleDateString()}
                </span>{" "}
                -{" "}
                <span className="font-medium text-black">
                  {checkOutDate.toLocaleDateString()}
                </span>
              </p>
            )}
          </div>

          {/* Rooms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
            {villa.availableRooms.map((room) => {
              let isAvailable = true;
              if (checkInDate && checkOutDate && room.bookedDates) {
                const isBooked = room.bookedDates.some((dateStr) => {
                  const bookedDate = new Date(dateStr);
                  return bookedDate >= checkInDate && bookedDate < checkOutDate;
                });
                if (isBooked) isAvailable = false;
              }

              if (!isAvailable) return null;

              return (
                <Link
                  key={room.id}
                  href={`/booking/accommodations/${villa.slug}/rates?checkIn=${checkIn || ""
                    }&checkOut=${checkOut || ""}`}
                  className="block group"
                >
                  <CommonRoomCard
                    image={room.imageSrc}
                    name={room.title}
                    price={room.price}
                    description={room.description}
                    bed={room.features[0]}
                    capacity={room.features[1]}
                    cta="View Details"
                  />
                </Link>
              );
            })}
            {/* Fallback if all are filtered out? Optional but good UX. */}
          </div>

          {/* Back Button */}
          <div className="mt-12 flex justify-center">
            <Button
              text="Back to Villas"
              variant="link-arrow"
              size="none"
              href="/booking/accommodations"
            />
          </div>
        </div>

        {/* FAQ Section */}
        {villa.faqs && villa.faqs.length > 0 && (
          <FAQSection
            tagline="Frequently Asked Questions"
            description="Find answers to common questions about your stay at this villa."
            faqs={villa.faqs}
          />
        )}
      </section>
    </main>
  );
}
