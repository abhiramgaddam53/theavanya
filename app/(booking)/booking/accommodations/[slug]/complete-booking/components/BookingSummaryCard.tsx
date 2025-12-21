"use client";

import Image from "next/image";
import { useState } from "react";
import CommonDialog from "@/components/CommonDialog";
import RoomDetailsDialog from "@/components/RoomDetailsDialog";

interface BookingSummaryCardProps {
    image: string;
    roomName: string;
    description: string;
    dates: string;
    guests: string;
    rateCode: string;
    total: string;
    currency: string;
}

export default function BookingSummaryCard({
    image,
    roomName,
    description,
    dates,
    guests,
    rateCode,
    total,
    currency
}: BookingSummaryCardProps) {
    const [isRoomDetailsOpen, setIsRoomDetailsOpen] = useState(false);
    const [isChargesOpen, setIsChargesOpen] = useState(false);

    // Construct mock objects for the reusable dialog
    const roomObject = {
        title: roomName,
        description: description,
        price: total,
        imageSrc: image,
        features: ["High-speed Wi-Fi", "King Bed", "Ocean View", "Butler Service"] // Mock features as they aren't in params
    };

    return (
        <div className="sticky top-2">
            <div className="relative w-full aspect-3/2 overflow-hidden">
                <Image
                    src={image}
                    alt={roomName}
                    fill
                    className="object-cover"
                />
            </div>
            <div className="flex flex-col gap-4 p-6 w-full h-fit">

                {/* 2. Room Title & Details Link */}
                <div className="">
                    <h3 className="font-poppins text-xl font-medium text-[#1a1a1a] leading-tight mb-2">
                        {roomName}, {description}
                    </h3>
                    <button
                        onClick={() => setIsRoomDetailsOpen(true)}
                        className="cursor-pointer text-[#1a1a1a] underline font-poppins text-sm hover:opacity-70 transition-opacity"
                    >
                        Room Details
                    </button>
                    {/* Add Edit Stay Details logic here if needed, keeping it visual for now as per image */}
                </div>

                {/* 3. Info Block */}
                <div className="flex gap-4 font-poppins">
                    <p className="text-sm font-poppins">{dates}</p> |
                    <p className="text-sm font-poppins">{guests}</p>
                    {/* <button className="text-left text-sm underline hover:opacity-70 w-fit">
                        {rateCode}
                    </button> */}
                </div>

                {/* 5. Footer / Totals */}
                <div className="border-t border-[#1a1a1a]/10 flex justify-between pt-4 items-center">
                    <button
                        onClick={() => setIsChargesOpen(true)}
                        className="cursor-pointer font-poppins text-sm underline text-[#1a1a1a]/80 hover:text-[#1a1a1a] transition-colors"
                    >
                        Summary of Charges
                    </button>
                    <div className="text-right">
                        <span className="block font-poppins text-2xl font-medium text-[#1a1a1a]">{total}</span>
                        {/* <span className="block font-poppins text-xs text-[#1a1a1a]/60">{currency} Subtotal</span> */}
                    </div>
                </div>

            </div>

            {/* --- MODALS --- */}

            {/* Room Details Modal */}
            <RoomDetailsDialog
                isOpen={isRoomDetailsOpen}
                onClose={() => setIsRoomDetailsOpen(false)}
                room={roomObject}
                villaImages={[image, "/slider/1.jpg", "/slider/2.jpg"]} // Mock images
            />

            {/* Summary Charges Modal */}
            <CommonDialog
                open={isChargesOpen}
                onOpenChange={setIsChargesOpen}
                title="Summary of Charges"
                className="w-full max-w-lg"
            >
                <div className="font-poppins text-[#1a1a1a] pt-4">
                    <div className="flex justify-between py-2 border-b border-[#1a1a1a]/10">
                        <span>Room Rate (3 Nights)</span>
                        <span>450.00 USD</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-[#1a1a1a]/10">
                        <span>Taxes & Fees</span>
                        <span>23.75 USD</span>
                    </div>
                    <div className="flex justify-between py-4 font-bold text-lg">
                        <span>Total</span>
                        <span>{total}</span>
                    </div>
                </div>
            </CommonDialog>
        </div>
    );
}
