"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Info, Loader2, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ManageBookingPage() {
  const router = useRouter();
  const [bookingId, setBookingId] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    setIsLoading(true);

    // Simulate API search
    setTimeout(() => {
      setIsLoading(false);
      if (!bookingId || bookingId.length < 5) {
        setError(true);
      } else {
        router.push(`/booking/manage-booking/${bookingId}`);
      }
    }, 1500);
  };

  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-white px-4 relative overflow-hidden">
      
      {/* 1. LOGO OUTSIDE THE BOX */}
      <div className="relative w-40 h-24 mb-8">
        <Image
          src="/logos/Black.png"
          alt="Avanya Logo"
          fill
          className="object-contain"
          priority
        />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[500px] relative z-10"
      >
        
        {/* --- MAIN CARD --- */}
        {/* White bg, Stroke (border), Shadow */}
        <div 
          className="bg-white w-full shadow-2xl border border-gray-200 overflow-hidden relative"
          style={{ borderRadius: '12px' }}
        >
          
          {/* 2. Header Section (Left Aligned, No Gold) */}
          <div className="bg-white border-b border-gray-100 p-8 pt-10 relative text-left">
            <h1 className="font-serif text-3xl text-[#1a1a1a] mb-2">
              Welcome Back
            </h1>
            <p className="font-poppins text-xs text-gray-400 uppercase tracking-widest">
              Manage Your Reservation
            </p>
          </div>

          {/* 3. Body / Form Section */}
          <div className="p-8 bg-white">
            <form onSubmit={handleSearch} className="flex flex-col gap-6">
              
              <div className="space-y-2">
                <label className="font-poppins text-xs font-bold uppercase tracking-widest text-gray-400 pl-1">
                  Booking ID
                </label>
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="e.g. AVN-88291"
                    value={bookingId}
                    required
                    onChange={(e) => {
                      setBookingId(e.target.value);
                      if (error) setError(false);
                    }}
                    className={`
                      w-full p-4 bg-white
                      border rounded-lg outline-none transition-all duration-300
                      font-poppins text-[#1a1a1a] placeholder:text-gray-300
                      text-lg shadow-sm
                      ${error 
                        ? "border-red-300 bg-red-50/10 focus:border-red-400 focus:shadow-red-50" 
                        : "border-gray-200 focus:border-[#1a1a1a] focus:shadow-md"
                      }
                    `}
                  />
                </div>
              </div>

              {/* Manage Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="
                  w-full py-4 rounded-lg
                  bg-[#1a1a1a] text-white
                  font-poppins text-xs font-bold uppercase tracking-[0.15em]
                  hover:bg-[#333] hover:shadow-lg hover:-translate-y-0.5
                  active:scale-[0.99]
                  transition-all duration-300
                  disabled:opacity-70 disabled:cursor-not-allowed
                  flex items-center justify-center gap-2
                  mt-4
                "
              >
                {isLoading ? (
                  <Loader2 className="animate-spin" size={18} />
                ) : (
                  <>
                    Find Booking <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>

            {/* Error Message Section */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: "auto", marginTop: 24 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                  className="overflow-hidden"
                >
                  <div className="bg-red-50 border border-red-100 rounded-lg p-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white border border-red-100 flex items-center justify-center text-red-500 shrink-0 shadow-sm">
                      <Info size={16} strokeWidth={2} />
                    </div>
                    <p className="font-poppins text-xs text-red-600 leading-relaxed">
                      We couldn't find a booking with ID <span className="font-semibold text-[#1a1a1a]">"{bookingId}"</span>. Please check and try again.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer Decoration */}
          <div className="bg-gray-50 border-t border-gray-100 p-6 text-center">
             <p className="font-poppins text-[10px] text-gray-400 tracking-wide">
               Need help? Contact Front Desk at <span className="text-gray-600 font-medium">+91 99667 01124</span>
             </p>
          </div>

        </div>

      </motion.div>
    </main>
  );
}