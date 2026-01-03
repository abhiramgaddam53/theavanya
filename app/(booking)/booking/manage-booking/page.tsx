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
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-[#FAFAFA] px-4 relative overflow-hidden">
      
      {/* --- Background Effects (Consistent with theme) --- */}
      <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-orange-50 rounded-full blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-gray-100 rounded-full blur-[100px] opacity-80 pointer-events-none" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-[500px] relative z-10"
      >
        
        {/* --- MAIN CARD --- */}
        <div 
          className="bg-white w-full shadow-2xl border-0 overflow-hidden relative"
          style={{ borderRadius: '8px' }}
        >
          
          {/* 1. Gradient Header (The "Theme") */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50/50 border-b border-amber-200/50 p-8 pt-10 relative text-center">
             {/* Logo Centered */}
            <div className="relative w-38 h-26 mx-auto mb-4">
              <Image
                src="/logos/Black.png"
                alt="Avanya Logo"
                fill
                className="object-contain opacity-90"
                priority
              />
            </div>
            
            <h1 className="font-serif text-3xl text-gray-900 mb-1">
              Welcome Back
            </h1>
            <p className="font-poppins text-xs text-gray-500 uppercase tracking-widest">
              Manage Your Reservation
            </p>
          </div>

          {/* 2. Body / Form Section */}
          <div className="p-8 bg-white">
            <form onSubmit={handleSearch} className="flex flex-col gap-6">
              
              <div className="space-y-2">
                <label className="font-poppins text-xs font-bold uppercase tracking-wide text-gray-400 pl-1">
                  Booking ID
                </label>
                <div className="relative group">
                  <input
                    type="text"
                    placeholder="e.g. ANV-88291"
                    value={bookingId}
                    required
                    onChange={(e) => {
                      setBookingId(e.target.value);
                      if (error) setError(false);
                    }}
                    className={`
                      w-full p-4 bg-gray-50
                      border rounded-lg outline-none transition-all duration-300
                      font-poppins text-[#1a1a1a] placeholder:text-gray-400
                      text-lg
                      ${error 
                        ? "border-red-300 bg-red-50/30 focus:border-red-400" 
                        : "border-gray-200 focus:border-amber-300 focus:bg-white focus:shadow-md"
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
                  mt-2
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
                  <div className="bg-red-50 border border-red-100 rounded-xl p-4 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white border border-red-100 flex items-center justify-center text-red-500 shrink-0">
                      <Info size={16} strokeWidth={2} />
                    </div>
                    <p className="font-poppins text-xs text-red-600 leading-relaxed">
                      We couldn't find a booking with ID <span className="font-bold">"{bookingId}"</span>. Please check and try again.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Footer Decoration */}
          <div className="bg-gray-50 border-t border-gray-100 p-4 text-center">
             <p className="font-poppins text-[10px] text-gray-400">
               Need help? Contact Front Desk at +91 99667 01124
             </p>
          </div>

        </div>

      </motion.div>
    </main>
  );
}