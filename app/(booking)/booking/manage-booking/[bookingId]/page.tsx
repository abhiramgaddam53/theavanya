"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";

// Mock Data
const BOOKING = {
  id: "AVN-88291",
  guestName: "Jane Doe",
  roomType: "Junior Suite King",
  checkIn: "Mon, 15 Dec 2025",
  checkOut: "Tue, 18 Dec 2025",
  guests: "1 Adult",
  total: "₹473.75",
  image: "/miscellaneous/resort.jpg", // Ensure this path exists
  villaName: "The Avanya"
};

const CANCEL_REASONS = [
  "Change of plans",
  "Found a better price",
  "Personal emergency",
  "Booking created by mistake",
  "Other"
];

export default function BookingDetailsPage() {
  const [status, setStatus] = useState<"active" | "cancelled">("active");
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);
  const [selectedReason, setSelectedReason] = useState("");
  const [customReason, setCustomReason] = useState("");

  const handleCancelBooking = () => {
    // API Call logic would go here
    setStatus("cancelled");
    setIsCancelModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-white py-12 px-4 flex flex-col items-center justify-start relative">
      
      {/* 1. LOGO OUTSIDE THE BOX */}
      <div className="relative w-32 h-20 mb-8">
        <Image 
          src="/logos/Black.png" 
          alt="Avanya Logo" 
          fill 
          className="object-contain" 
          priority 
        />
      </div>

      <div className="w-full max-w-[1150px] relative">
        
        {/* --- Main Card --- */}
        <div
          className="bg-white w-full shadow-2xl border border-gray-200 relative overflow-hidden transition-all duration-500"
          style={{ borderRadius: '12px' }}
        >
          {/* 2. Header Section (Left Aligned, No Gold) */}
          <div className={`
              border-b p-8 pb-6 relative transition-colors duration-500
              ${status === 'active' 
                  ? 'bg-white border-gray-100' 
                  : 'bg-gray-50 border-gray-200'
              }
          `}>
            <div className="text-left">
              <h1 className="font-serif text-3xl text-[#1a1a1a] mb-3">
                {status === 'active' ? "Manage Your Reservation" : "Reservation Cancelled"}
              </h1>
              
              <div className={`
                  border rounded-lg px-3 py-1.5 inline-block
                  ${status === 'active' ? 'border-[#1a1a1a]/20 bg-gray-50' : 'border-gray-300 bg-transparent'}
              `}>
                <span className={`font-poppins text-sm tracking-wide ${status === 'active' ? 'text-[#1a1a1a]' : 'text-gray-400 line-through'}`}>
                  Booking ID: <span className="font-semibold">{BOOKING.id}</span>
                </span>
              </div>
            </div>
          </div>

          {/* 3. Details Body (Image Left, Data Right) */}
          <div className={`
              border-b border-gray-100 p-8 bg-white transition-opacity duration-500
              ${status === 'cancelled' ? 'opacity-50 grayscale' : 'opacity-100'}
          `}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              
              {/* Left: Image (Swapped position) */}
              <div className="relative h-full min-h-[300px] w-full order-2 lg:order-1">
                <img
                  src={BOOKING.image}
                  alt={BOOKING.roomType}
                  className="w-full h-full object-cover rounded-lg shadow-md border border-gray-100"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-4 py-1.5 rounded-full border border-gray-100 font-poppins text-xs font-medium text-[#1a1a1a] shadow-sm">
                  {BOOKING.villaName}
                </div>
              </div>

              {/* Right: Text Details (Swapped position) */}
              <div className="space-y-8 pt-2 order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-y-8 gap-x-4 text-sm">
                  <div>
                    <div className="font-poppins text-xs uppercase tracking-widest text-gray-400 mb-2">Guest Name</div>
                    <div className="font-serif text-xl text-[#1a1a1a]">{BOOKING.guestName}</div>
                  </div>
                  <div>
                    <div className="font-poppins text-xs uppercase tracking-widest text-gray-400 mb-2">Room Type</div>
                    <div className="font-serif text-xl text-[#1a1a1a]">{BOOKING.roomType}</div>
                  </div>
                  <div>
                    <div className="font-poppins text-xs uppercase tracking-widest text-gray-400 mb-2">Check-in</div>
                    <div className="font-serif text-xl text-[#1a1a1a]">{BOOKING.checkIn}</div>
                  </div>
                  <div>
                    <div className="font-poppins text-xs uppercase tracking-widest text-gray-400 mb-2">Check-out</div>
                    <div className="font-serif text-xl text-[#1a1a1a]">{BOOKING.checkOut}</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-100">
                  <div>
                    <div className="font-poppins text-xs uppercase tracking-widest text-gray-400 mb-2">Guests</div>
                    <div className="font-serif text-xl text-[#1a1a1a]">{BOOKING.guests}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-poppins text-xs uppercase tracking-widest text-gray-400 mb-2">Total Paid</div>
                    <div className="font-serif text-3xl text-[#1a1a1a]">{BOOKING.total}</div>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* 4. Footer Info */}
          <div className="bg-gray-50 p-8 flex flex-col md:flex-row justify-between gap-6 md:items-center">
               <div className="font-poppins text-xs text-gray-400">
                   If you need assistance, call +91 99667 01124
               </div>
               <div className="md:text-right">
                   <div className="font-poppins text-xs uppercase tracking-widest text-gray-400 mb-1">Hotel Address</div>
                   <div className="font-poppins text-sm text-gray-600">Avanya Resort, Charni Road, Mumbai</div>
              </div>
          </div>
        </div>

        {/* 5. Cancel Button (Outside Box, Bottom Right) */}
        {status === 'active' && (
            <div className="flex justify-end mt-4">
                <button
                    onClick={() => setIsCancelModalOpen(true)}
                    className="
                        px-6 py-3 rounded-lg
                        text-red-500 font-poppins bg-red-100 text-xs font-bold uppercase tracking-widest
                        hover:bg-red-300 hover:text-red-600 
                        transition-all duration-300
                    "
                >
                    Cancel Booking
                </button>
            </div>
        )}

      </div>


      {/* --- CANCELLATION MODAL --- */}
      <AnimatePresence>
        {isCancelModalOpen && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                    onClick={() => setIsCancelModalOpen(false)}
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                />

                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                    className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
                >
                    <div className="bg-white border-b border-gray-100 p-6 flex justify-between items-center">
                        <h3 className="font-serif text-2xl text-[#1a1a1a]">Cancel Booking</h3>
                        <button onClick={() => setIsCancelModalOpen(false)} className="p-2 hover:bg-gray-50 rounded-full transition-colors">
                            <X size={20} className="text-gray-400" />
                        </button>
                    </div>

                    <div className="p-6">
                        <p className="font-poppins text-sm text-gray-500 mb-6">
                            Please select a reason for cancellation. This action cannot be undone.
                        </p>

                        <div className="space-y-3 mb-6">
                            {CANCEL_REASONS.map((reason) => (
                                <label 
                                    key={reason}
                                    className={`
                                        flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all
                                        ${selectedReason === reason 
                                            ? 'bg-[#1a1a1a] border-[#1a1a1a] text-white shadow-lg' 
                                            : 'bg-white border-gray-200 hover:border-gray-300 text-gray-600'
                                        }
                                    `}
                                >
                                    <input 
                                        type="radio" 
                                        name="cancelReason" 
                                        value={reason}
                                        checked={selectedReason === reason}
                                        onChange={(e) => setSelectedReason(e.target.value)}
                                        className="hidden"
                                    />
                                    {selectedReason === reason ? <Check size={16} /> : <div className="w-4 h-4 rounded-full border border-gray-300" />}
                                    <span className="font-poppins text-sm">{reason}</span>
                                </label>
                            ))}
                        </div>

                        <AnimatePresence>
                            {selectedReason === "Other" && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    className="overflow-hidden mb-6"
                                >
                                    <textarea
                                        placeholder="Please tell us more..."
                                        value={customReason}
                                        onChange={(e) => setCustomReason(e.target.value)}
                                        className="w-full p-4 font-poppins text-sm border border-gray-200 rounded-xl outline-none focus:border-black bg-gray-50 h-24 resize-none transition-colors"
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <button
                            onClick={handleCancelBooking}
                            disabled={!selectedReason || (selectedReason === "Other" && !customReason)}
                            className="w-full py-4 rounded-xl bg-red-600 text-white border font-poppins text-xs font-bold uppercase tracking-widest hover:bg-red-700 hover:shadow-lg hover:shadow-red-100 disabled:opacity-50 disabled:cursor-not-allowed  transition-all "
                         >
                            Confirm Cancellation
                        </button>
                    </div>
                </motion.div>
            </div>
        )}
      </AnimatePresence>
    </main>
  );
}