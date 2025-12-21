import React from "react";
import Image from "next/image";
import CustomContainer from "../over-view/components/CustomContainer";

// --- Types ---
type GalleryImage = {
  src: string;
  alt: string;
  // Optional overrides for specific curation
  className?: string;
};

type GalleryCategory = {
  id: string;
  title: string;
  description?: string;
  images: GalleryImage[];
};

// --- Mock Data (Masonry Grid Layout) ---
// Uses a mix of big and small cards arranged in alternating patterns
const galleryData: GalleryCategory[] = [
  {
    id: "hotel-view",
    title: "Hotel View",
    description: "A sanctuary in the heart of the city.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
        alt: "Hotel Exterior Night View",
        className: "md:col-span-2 md:row-span-2",
      },
      {
        src: "https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=1000&auto=format&fit=crop",
        alt: "Lobby Entrance",
      },
      {
        src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1000&auto=format&fit=crop",
        alt: "Hotel Garden",
      },
      {
        src: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=1000&auto=format&fit=crop",
        alt: "City View",
      },
      {
        src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=1000&auto=format&fit=crop",
        alt: "Poolside",
      },
      {
        src: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop",
        alt: "Hotel Corridor",
        className: "md:col-span-2",
      },
      {
        src: "https://images.unsplash.com/photo-1578580289821-3e2d1f7ee7e8?q=80&w=1000&auto=format&fit=crop",
        alt: "Exterior View",
      },
      {
        src: "https://images.unsplash.com/photo-1567534880682-cf7e8c1f3a65?q=80&w=1000&auto=format&fit=crop",
        alt: "Entrance Gate",
      },
      {
        src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
        alt: "Lounge Area",
      },
      {
        src: "https://images.unsplash.com/photo-1585399363032-096c5b12dd5c?q=80&w=1000&auto=format&fit=crop",
        alt: "Hotel Night View",
        className: "md:col-span-2 md:row-span-2",
      },
      {
        src: "https://images.unsplash.com/photo-1548068325-e7f9ab1b0eed?q=80&w=1000&auto=format&fit=crop",
        alt: "Front Entrance",
      },
      {
        src: "https://images.unsplash.com/photo-1584094984550-3ea6d7b44e1d?q=80&w=1000&auto=format&fit=crop",
        alt: "Lobby Area",
      },
    ],
  },
  {
    id: "guest-rooms",
    title: "Guest Rooms",
    description: "Designed for comfort and serenity.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop",
        alt: "Deluxe Room King",
      },
      {
        src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000&auto=format&fit=crop",
        alt: "Room Interior",
        className: "md:col-span-2 md:row-span-2",
      },
      {
        src: "https://images.unsplash.com/photo-1591088398332-c518a22717ec?q=80&w=1000&auto=format&fit=crop",
        alt: "Bathroom Detail",
      },
      {
        src: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=1000&auto=format&fit=crop",
        alt: "Room View",
      },
      {
        src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1000&auto=format&fit=crop",
        alt: "Work Desk",
      },
      {
        src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1000&auto=format&fit=crop",
        alt: "Suite Bedroom",
        className: "md:col-span-2",
      },
      {
        src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop",
        alt: "Suite Bathroom",
      },
      {
        src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1000&auto=format&fit=crop",
        alt: "Presidential Suite",
        className: "md:col-span-2 md:row-span-2",
      },
      {
        src: "https://images.unsplash.com/photo-1571403577945-b092c909e637?q=80&w=1000&auto=format&fit=crop",
        alt: "Twin Beds Room",
      },
      {
        src: "https://images.unsplash.com/photo-1618840752926-6b45ce5ef26d?q=80&w=1000&auto=format&fit=crop",
        alt: "Room Lighting",
      },
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
        alt: "Modern Room",
      },
      {
        src: "https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?q=80&w=1000&auto=format&fit=crop",
        alt: "Balcony View",
        className: "md:col-span-2",
      },
      {
        src: "https://images.unsplash.com/photo-1591288377688-6b215d36a0ee?q=80&w=1000&auto=format&fit=crop",
        alt: "Room Comfort",
      },
      {
        src: "https://images.unsplash.com/photo-1582719268335-721e2a938612?q=80&w=1000&auto=format&fit=crop",
        alt: "Sleek Design",
      },
    ],
  },
  {
    id: "suites",
    title: "Suites",
    description: "Elevated luxury with expansive views.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=2070&auto=format&fit=crop",
        alt: "Presidential Suite Living Area",
        className: "md:col-span-2 md:row-span-2",
      },
      {
        src: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=1000&auto=format&fit=crop",
        alt: "Suite Bedroom",
      },
      {
        src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000&auto=format&fit=crop",
        alt: "Suite Bathroom",
      },
      {
        src: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1000&auto=format&fit=crop",
        alt: "Luxury Bedroom",
        className: "md:col-span-2",
      },
      {
        src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1000&auto=format&fit=crop",
        alt: "Suite Interior",
      },
      {
        src: "https://images.unsplash.com/photo-1591088398332-c518a22717ec?q=80&w=1000&auto=format&fit=crop",
        alt: "Luxury Bathroom",
      },
      {
        src: "https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=1000&auto=format&fit=crop",
        alt: "Terrace View",
      },
      {
        src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1000&auto=format&fit=crop",
        alt: "Living Space",
        className: "md:col-span-2 md:row-span-2",
      },
      {
        src: "https://images.unsplash.com/photo-1618840752926-6b45ce5ef26d?q=80&w=1000&auto=format&fit=crop",
        alt: "Bedroom Details",
      },
      {
        src: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1000&auto=format&fit=crop",
        alt: "Suite Elegance",
      },
    ],
  },
  {
    id: "dining",
    title: "Dining",
    description: "Culinary journeys from around the world.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop",
        alt: "Fine Dining Restaurant",
      },
      {
        src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1000&auto=format&fit=crop",
        alt: "Cocktail Bar",
        className: "md:col-span-2 md:row-span-2",
      },
      {
        src: "https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?q=80&w=1000&auto=format&fit=crop",
        alt: "Buffet Spread",
      },
      {
        src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1000&auto=format&fit=crop",
        alt: "Private Dining",
      },
      {
        src: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=1000&auto=format&fit=crop",
        alt: "Chef's Table",
        className: "md:col-span-2",
      },
      {
        src: "https://images.unsplash.com/photo-1504674900836-b8b1402b3de5?q=80&w=1000&auto=format&fit=crop",
        alt: "Fine Cuisine",
      },
      {
        src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1000&auto=format&fit=crop",
        alt: "Sushi Preparation",
      },
      {
        src: "https://images.unsplash.com/photo-1495457871143-830c9ff96f0c?q=80&w=1000&auto=format&fit=crop",
        alt: "Outdoor Dining",
        className: "md:col-span-2 md:row-span-2",
      },
      {
        src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop",
        alt: "Appetizers",
      },
      {
        src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1000&auto=format&fit=crop",
        alt: "Desserts",
      },
      {
        src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1000&auto=format&fit=crop",
        alt: "Beverage Service",
        className: "md:col-span-2",
      },
      {
        src: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop",
        alt: "Plated Dish",
      },
    ],
  },
  {
    id: "wellness",
    title: "Wellness",
    description: "Rejuvenate your mind, body, and soul.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop",
        alt: "Spa Treatment Room",
        className: "md:col-span-2 md:row-span-2",
      },
      {
        src: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=1000&auto=format&fit=crop",
        alt: "Massage Therapy",
      },
      {
        src: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1000&auto=format&fit=crop",
        alt: "Relaxation Area",
      },
      {
        src: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1000&auto=format&fit=crop",
        alt: "Treadmills",
        className: "md:col-span-2",
      },
      {
        src: "https://images.unsplash.com/photo-1574680096141-1cddd32e04ca?q=80&w=1000&auto=format&fit=crop",
        alt: "Weights Area",
      },
      {
        src: "https://images.unsplash.com/photo-1549576528-f5dd8b5f98d5?q=80&w=1000&auto=format&fit=crop",
        alt: "Yoga Studio",
      },
      {
        src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop",
        alt: "Meditation Space",
      },
      {
        src: "https://images.unsplash.com/photo-1534802676527-f126e04e6bda?q=80&w=1000&auto=format&fit=crop",
        alt: "Swimming Pool",
        className: "md:col-span-2 md:row-span-2",
      },
      {
        src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1000&auto=format&fit=crop",
        alt: "Sauna",
      },
      {
        src: "https://images.unsplash.com/photo-1554410260-7a32ee8feda9?q=80&w=1000&auto=format&fit=crop",
        alt: "Gym Equipment",
      },
      {
        src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1000&auto=format&fit=crop",
        alt: "Fitness Classes",
        className: "md:col-span-2",
      },
      {
        src: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?q=80&w=1000&auto=format&fit=crop",
        alt: "Wellness Spa",
      },
    ],
  },
  {
    id: "events",
    title: "Event Spaces",
    description: "Memorable venues for every occasion.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2070&auto=format&fit=crop",
        alt: "Grand Ballroom",
        className: "md:col-span-2 md:row-span-2",
      },
      {
        src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=1000&auto=format&fit=crop",
        alt: "Meeting Room",
      },
      {
        src: "https://images.unsplash.com/photo-1470753937643-efeb931202a9?q=80&w=1000&auto=format&fit=crop",
        alt: "Wedding Setup",
      },
      {
        src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=1000&auto=format&fit=crop",
        alt: "Conference Room",
        className: "md:col-span-2",
      },
      {
        src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop",
        alt: "Banquet Hall",
      },
      {
        src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1000&auto=format&fit=crop",
        alt: "Reception Area",
      },
      {
        src: "https://images.unsplash.com/photo-1519336800662-d16a66e13b61?q=80&w=1000&auto=format&fit=crop",
        alt: "Outdoor Event",
      },
      {
        src: "https://images.unsplash.com/photo-1465146072230-91cabc968266?q=80&w=1000&auto=format&fit=crop",
        alt: "Gala Setup",
        className: "md:col-span-2 md:row-span-2",
      },
      {
        src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=1000&auto=format&fit=crop",
        alt: "Meeting Setup",
      },
      {
        src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop",
        alt: "Event Venue",
      },
    ],
  },
];

// --- Components ---

const SectionHeader = ({
  title,
  description,
}: {
  title: string;
  description?: string;
}) => (
  <div className="flex flex-col items-center justify-center mb-4 md:mb-6 lg:mb-8 text-center">
    <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl xl:text-5xl mb-3 md:mb-4 font-medium font-poppins">
      {title}
    </h2>
    {description && (
      <p className="font-serif text-sm md:text-base text-[#1a1a1a] mb-4 md:mb-6">
        {description}
      </p>
    )}
  </div>
);

const GallerySection = ({ category }: { category: GalleryCategory }) => {
  const { images } = category;

  return (
    <section
      id={category.id}
      className="mb-16 md:mb-32 last:mb-0 scroll-mt-16 md:scroll-mt-32"
    >
      <SectionHeader
        title={category.title}
        description={category.description}
      />

      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[250px] md:auto-rows-[300px]">
        {images.map((image, index) => {
          // Set default aspect ratio and size
          let sizes =
            "(max-width: 768px) 100vw, (max-width: 1200px) 25vw, 400px";

          // Apply custom grid span if specified
          let spanClass = "col-span-1 row-span-1";
          if (image.className) {
            spanClass = image.className;
            // Update sizes for larger images
            if (image.className.includes("col-span-2")) {
              sizes =
                "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px";
            }
          }

          return (
            <div
              key={index}
              className={`relative overflow-hidden bg-gray-100 rounded-lg ${spanClass}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                sizes={sizes}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white pt-12 md:pt-32 pb-16 md:pb-32">
      <CustomContainer>
        <div className="flex flex-col">
          {galleryData.map((category) => (
            <GallerySection key={category.id} category={category} />
          ))}
        </div>
      </CustomContainer>
    </div>
  );
}
