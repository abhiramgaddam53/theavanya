"use client";

import Link from "next/link";
import Image from "next/image";
import { villas } from "@/app/data/villas";

export default function AccommodationsPage() {
    return (
        <div className="bg-[#f9f9f9] min-h-screen py-16 px-6 md:px-16">
            <div className="max-w-[1400px] mx-auto">
                <h1 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-6 text-center">Our Accommodations</h1>
                <p className="text-center font-poppins text-[#1a1a1a]/70 max-w-2xl mx-auto mb-16">
                    Discover a sanctuary where luxury meets nature. Choose from our exclusive collection of villas and residences, each designed to offer privacy, comfort, and breathtaking views.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {villas.map((villa) => (
                        <div key={villa.id} className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                            {/* Image */}
                            <Link href={`/booking/accommodations/${villa.slug}`} className="block relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src={villa.imageSrc}
                                    alt={villa.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                            </Link>

                            {/* Content */}
                            <div className="p-8">
                                <h3 className="font-serif text-2xl md:text-3xl text-[#1a1a1a] mb-3 group-hover:text-[#BEA585] transition-colors">
                                    <Link href={`/booking/accommodations/${villa.slug}`}>
                                        {villa.title}
                                    </Link>
                                </h3>
                                <p className="font-poppins text-sm text-[#1a1a1a]/60 line-clamp-2 md:line-clamp-3 mb-6 leading-relaxed">
                                    {villa.description}
                                </p>

                                <div className="flex justify-between items-center pt-6 border-t border-gray-100">
                                    <div className="flex flex-col">
                                        <span className="font-poppins text-xs text-[#1a1a1a]/50 uppercase tracking-wider">Starting From</span>
                                        <span className="font-poppins font-semibold text-lg text-[#1a1a1a]">{villa.price}</span>
                                    </div>
                                    <Link
                                        href={`/booking/accommodations/${villa.slug}`}
                                        className="bg-[#1a1a1a] text-white px-6 py-3 rounded-full text-xs font-poppins font-medium uppercase tracking-wide hover:bg-[#333] transition-colors"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
