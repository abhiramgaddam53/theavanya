"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, Check } from "lucide-react";

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
  const router = useRouter();
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
    <main className="min-h-screen bg-[#FAFAFA] py-12 px-4 flex justify-center items-start">
      
      {/* --- Main Card (Styled exactly like your snippet) --- */}
      <div
        className="bg-white w-full max-w-[1150px] shadow-2xl border-0 relative overflow-hidden transition-all duration-500"
        style={{ borderRadius: '8px' }}
      >
        {/* Exit Button */}
        <button
          onClick={() => router.push("/booking/manage-booking")}
          title="Go Back To Home"
          className="absolute top-4 right-6 z-10 hover:bg-white/50 rounded-full p-2 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
        >
          <img src="/logos/exit.png" alt="Close" style={{ height: '25px' }} />
        </button>

        {/* 1. Header Section */}
        <div className={`
            border-b p-6 pt-10 pb-8 relative transition-colors duration-500
            ${status === 'active' 
                ? 'bg-gradient-to-r from-amber-50 to-orange-50/50 border-amber-200/50' 
                : 'bg-gray-100 border-gray-200 grayscale'
            }
        `}>
          {/* <img 
            src="/logos/Black.png" 
            alt="Avanya Hotel" 
            className="absolute top-4 left-6 w-28 h-auto img-logo-class opacity-80" 
          /> */}
          
          <div className="text-center pt-4">
            {/* Playfair Display, Regular */}
            <h1 className="font-serif text-3xl text-gray-900 mb-2">
              {status === 'active' ? "Manage Your Reservation" : "Reservation Cancelled"}
            </h1>
            
            {/* Status Pill */}
            <div className={`
                border rounded-xl px-4 py-2 inline-block shadow-sm bg-white
                ${status === 'active' ? 'border-amber-200' : 'border-gray-300'}
            `}>
              <span className={`font-poppins text-lg ${status === 'active' ? 'text-gray-800' : 'text-red-500 line-through'}`}>
                {BOOKING.id}
              </span>
            </div>
          </div>
        </div>

        {/* 2. Details Body */}
        <div className={`
            border-b border-gray-200 p-6 bg-gradient-to-b from-white/80 to-gray-50/50 transition-opacity duration-500
            ${status === 'cancelled' ? 'opacity-60' : 'opacity-100'}
        `}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            {/* Left: Text Details */}
            <div className="space-y-6 pt-2">
              
              {/* Grid Data */}
              <div className="grid grid-cols-2 gap-6 text-sm">
                <div>
                  <div className="font-poppins text-xs uppercase tracking-wide text-gray-500 mb-1">Name</div>
                  <div className="font-serif text-xl text-gray-900">{BOOKING.guestName}</div>
                </div>
                <div>
                  <div className="font-poppins text-xs uppercase tracking-wide text-gray-500 mb-1">Room Type</div>
                  <div className="font-serif text-xl text-gray-900">{BOOKING.roomType}</div>
                </div>
                <div>
                  <div className="font-poppins text-xs uppercase tracking-wide text-gray-500 mb-1">Check-in</div>
                  <div className="font-serif text-xl text-gray-900">{BOOKING.checkIn}</div>
                </div>
                <div>
                  <div className="font-poppins text-xs uppercase tracking-wide text-gray-500 mb-1">Check-out</div>
                  <div className="font-serif text-xl text-gray-900">{BOOKING.checkOut}</div>
                </div>
              </div>

              {/* Guests & Amount */}
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-200">
                <div>
                  <div className="font-poppins text-xs uppercase tracking-wide text-gray-500 mb-1">Number of Guests</div>
                  <div className="font-serif text-xl text-gray-900">{BOOKING.guests}</div>
                </div>
                <div className="text-right">
                  <div className="font-poppins text-xs uppercase tracking-wide text-gray-500 mb-1">Amount Paid</div>
                  <div className="font-serif text-3xl text-gray-900">{BOOKING.total}</div>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative h-full min-h-[200px] w-full">
              <img
                src={BOOKING.image}
                alt={BOOKING.roomType}
                className={`
                    w-full h-56 lg:h-full object-cover rounded-xl shadow-lg border-4 border-white
                    ${status === 'cancelled' ? 'grayscale' : ''}
                `}
              />
              <div className="absolute top-3 right-3 bg-white/90 px-3 py-1 rounded-full font-poppins text-xs text-gray-700 shadow-sm">
                {BOOKING.villaName}
              </div>
            </div>
          </div>
        </div>

        {/* 3. Actions / Cancellation Section */}
        {status === 'active' ? (
             <div className="p-6 bg-white border-b border-gray-100 flex justify-end">
                <button
                    onClick={() => setIsCancelModalOpen(true)}
                    className="
                        px-8 py-3 rounded-lg
                        border border-red-100 bg-red-50 text-red-600
                        font-poppins text-xs uppercase tracking-widest
                        hover:bg-red-100 hover:border-red-200 transition-colors
                    "
                >
                    Cancel Booking
                </button>
             </div>
        ) : (
            <div className="p-6 bg-red-50 border-b border-red-100">
                <div className="flex items-center gap-3 text-red-700">
                    <div className="w-2 h-2 rounded-full bg-red-500" />
                    <span className="font-poppins text-sm">
                        This booking was cancelled on {new Date().toLocaleDateString()}. Refund processed.
                    </span>
                </div>
            </div>
        )}

        {/* 4. Special Requests */}
        <div className="border-b border-gray-200 p-6 bg-gray-50/50">
          <div className="font-poppins text-xs text-gray-600 mb-2 uppercase tracking-wide">Special Requests</div>
          <div className="font-poppins text-sm text-gray-700">
            If you have any special requests, please call +91 99667 01124
          </div>
        </div>

        {/* 5. Hotel Address */}
        <div className="p-6 bg-white">
          <div className="font-poppins text-xs uppercase tracking-wide text-gray-500 mb-3">Hotel</div>
          <div className="font-poppins text-sm text-gray-700 space-y-1">
            <div>Avanya Resort</div>
            <div>Charni Road, Mumbai</div>
            <div>Maharashtra 400004, India</div>
          </div>
        </div>
      </div>


      {/* --- CANCELLATION MODAL --- */}
      <AnimatePresence>
        {isCancelModalOpen && (
            <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
                {/* Backdrop */}
                <motion.div 
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }} 
                    exit={{ opacity: 0 }}
                    onClick={() => setIsCancelModalOpen(false)}
                    className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                />

                {/* Modal Card */}
                <motion.div
                    initial={{ scale: 0.95, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.95, opacity: 0, y: 20 }}
                    className="relative bg-white w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden"
                >
                    {/* Modal Header */}
                    <div className="bg-gradient-to-r from-gray-50 to-white border-b border-gray-100 p-6 flex justify-between items-center">
                        <h3 className="font-serif text-2xl text-gray-900">Cancel Booking</h3>
                        <button onClick={() => setIsCancelModalOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <X size={20} className="text-gray-400" />
                        </button>
                    </div>

                    {/* Modal Body */}
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
                                            ? 'bg-gray-900 border-gray-900 text-white shadow-md' 
                                            : 'bg-white border-gray-100 hover:border-gray-200 text-gray-600'
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

                        {/* Custom Text Area */}
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
                                        className="w-full p-4 font-poppins text-sm border border-gray-200 rounded-xl outline-none focus:border-amber-200 bg-gray-50 h-24 resize-none"
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Confirm Button */}
                        <button
                            onClick={handleCancelBooking}
                            disabled={!selectedReason || (selectedReason === "Other" && !customReason)}
                            className="
                                w-full py-4 rounded-xl
                                bg-red-600 text-white
                                font-poppins text-xs font-bold uppercase tracking-widest
                                hover:bg-red-700 hover:shadow-lg hover:shadow-red-100
                                disabled:opacity-50 disabled:cursor-not-allowed
                                transition-all
                            "
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