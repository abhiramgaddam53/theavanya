import CustomContainer from "./CustomContainer";
import { villas } from "@/app/data/villas";
import Link from "next/link";
import CommonRoomCard from "@/components/RoomCard";
import Button from "@/components/Button";

const RoomsSection = () => {
  return (
    <section className="bg-white py-6 md:py-24 min-h-screen w-full flex items-center justify-center">
      <CustomContainer>

        <div className="max-w-[1400px] mx-auto">

          {/* Section Heading */}
          <div className="mb-8">
            <h2 className="font-serif text-3xl md:text-5xl tracking-tighter text-[#1a1a1a] leading-tight">
            Three Stays,<br></br> One Quiet Little World.

            </h2>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
            {villas.slice(0, 3).map((room) => (
              <Link href={`/booking/accommodations/${room.slug}/rates`} key={room.id} className="block group">
                <CommonRoomCard
                  image={room.imageSrc}
                  name={room.title}
                  price={room.price}
                  description={room.description}
                  cta={room.cta}
                  bed={room.bed}
                  capacity={room.capacity}
                />
              </Link>
            ))}
          </div>

          {/* See All Button */}
          <div className="flex justify-center mt-16">
            <Button
              text="See All Rooms"
              variant="link-arrow"
              size="none"
              href="/booking/accommodations"
            />
          </div>

        </div>
      </CustomContainer>

    </section>
  );
};

export default RoomsSection;
