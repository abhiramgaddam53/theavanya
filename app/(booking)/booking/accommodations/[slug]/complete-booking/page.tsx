"use client";

import Input from "@/components/Input";
import Select from "@/components/Select";
import BookingSummaryCard from "./components/BookingSummaryCard";
import Button from "@/components/Button";
import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import PreloaderPayment from "@/components/PreloaderPayment";

// Interface for the receipt data
interface BookingData {
  confirmationNumber: string;
  reservationPin: string;
  guestName: string;
  roomType: string;
  roomNo: string;
  checkIn: string;
  checkOut: string;
  total: string;
}

function CompleteBookingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // --- STATE MANAGEMENT (From Snippet 1) ---
  const [paymentMethod, setPaymentMethod] = useState("card");
  
  // Split name state to handle the two inputs in the new UI
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  
  const [guestPhone, setGuestPhone] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  
  const [bookingData, setBookingData] = useState<BookingData | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isBooking, setIsBooking] = useState(false);

  // --- DATA DERIVATION (From Snippet 1) ---
  const roomName = searchParams.get("roomName") || "Junior Suite King";
  const villaName = searchParams.get("villa") || "The Avanya";
  const priceString = searchParams.get("price") || "473.75";
  const image = searchParams.get("image") || "/miscellaneous/resort.jpg";
  
  // Dates setup
  const checkInDate = new Date("Mon, Dec 15 2025");
  const checkOutDate = new Date("Tue, Dec 18 2025");
  
  const confirmationNumber = `${Math.floor(Math.random() * 90000) + 10000}`;
  const reservationPin = Math.floor(100000 + Math.random() * 900000).toString();
  
  const checkInFormatted = checkInDate.toLocaleDateString('en-GB', {
    weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'
  });
  const checkOutFormatted = checkOutDate.toLocaleDateString('en-GB', {
    weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'
  });

  // --- LOGIC HANDLERS (From Snippet 1) ---
  const handleConfirmBooking = async () => {
    if (isLoading) return;

    setIsLoading(true);
    setIsBooking(true);

    const fullName = `${firstName} ${lastName}`.trim();

    try {
      const res = await fetch("/api/booking/confirm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          guestName: fullName,
          guestPhone,
          guestEmail,
          checkIn: checkInDate.toISOString(),
          checkOut: checkOutDate.toISOString(),
          roomType: roomName,
          total: priceString,
        }),
      });

      const data = await res.json();

      if (data.ok) {
        setBookingData({
          confirmationNumber,
          reservationPin,
          guestName: fullName,
          roomType: roomName,
          roomNo: "TBD",
          checkIn: checkInFormatted,
          checkOut: checkOutFormatted,
          total: priceString,
        });
        setShowConfirmation(true);
      } else {
        alert("Booking failed: " + (data.error || "Unknown error"));
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setIsLoading(false);
      setIsBooking(false);
    }
  };

  const closeConfirmation = () => {
    setShowConfirmation(false);
    router.push("/");
  };

  // Scroll Lock Effect
  useEffect(() => {
    if (showConfirmation) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      if (scrollY) window.scrollTo(0, parseInt(scrollY) * -1);
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };
  }, [showConfirmation]);

  return (
    <>
      {/* --- PRELOADER --- */}
      {isLoading && <PreloaderPayment isBooking={isBooking} />}

      {/* --- CONFIRMATION MODAL (From Snippet 1) --- */}
      {showConfirmation && bookingData && (
        // <div
        //   className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6"
        //   onClick={closeConfirmation}
        // >
        //   <div
        //     className="bg-white w-full max-w-[1150px] max-h-[95vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 shadow-2xl border-0 mx-auto relative"
        //     onClick={(e) => e.stopPropagation()}
        //     style={{ borderRadius: '8px' }}
        //   >
        //     <button
        //       onClick={closeConfirmation}
        //       title="Go Back To Home"
        //       className="absolute top-4 right-6 z-10 hover:bg-white flex items-center justify-center text-gray-600 hover:text-gray-900 text-xl font-bold transition-all duration-200 hover:scale-105 active:scale-95"
        //     >
        //       <img src="/logos/exit.png" alt="" style={{ height: '25px' }} />
        //     </button>

        //     {/* Header Section */}
        //     <div className="bg-gradient-to-r from-amber-50 to-orange-50/50 border-b border-amber-200/50 p-6 pt-10 pb-8 relative">
        //       <img src="/logos/Black.png" alt="Avanya Hotel" className="absolute top-4 left-6 w-28 h-auto img-logo-class" />
        //       <div className="text-center pt-4">
        //         <h1 className="font-sans text-2xl font-bold text-gray-900 mb-1">Your reservation is confirmed!</h1>
        //         <div className="bg-white border-2 border-amber-200 rounded-xl px-4 py-2 inline-block shadow-sm">
        //           <span className="font-mono text-lg font-bold text-gray-800">{bookingData.confirmationNumber}</span>
        //         </div>
        //       </div>
        //     </div>

        //     {/* Receipt Details */}
        //     <div className="border-b border-gray-200 p-6 bg-gradient-to-b from-white/80 to-gray-50/50">
        //       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        //         <div className="space-y-4 pt-2">
        //           <div className="grid grid-cols-2 gap-4 text-sm">
        //             <div><div className="text-xs uppercase font-bold text-gray-500 mb-1">Name</div><div className="font-semibold text-gray-900">{bookingData.guestName}</div></div>
        //             <div><div className="text-xs uppercase font-bold text-gray-500 mb-1">Room Type</div><div className="font-semibold text-gray-900">{bookingData.roomType}</div></div>
        //             <div><div className="text-xs uppercase font-bold text-gray-500 mb-1">Check-in</div><div className="font-semibold text-gray-900">{bookingData.checkIn}</div></div>
        //             <div><div className="text-xs uppercase font-bold text-gray-500 mb-1">Check-out</div><div className="font-semibold text-gray-900">{bookingData.checkOut}</div></div>
        //           </div>
        //           <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
        //             <div><div className="text-xs uppercase font-bold text-gray-500 mb-1">Guests</div><div className="font-semibold text-gray-900">1 Adult</div></div>
        //             <div className="text-right"><div className="text-xs uppercase font-bold text-gray-500 mb-1">Amount</div><div className="text-2xl font-bold text-gray-900">{bookingData.total}</div></div>
        //           </div>
        //         </div>
        //         <div className="relative">
        //           <img src={image} alt={bookingData.roomType} className="w-full h-48 lg:h-56 object-cover rounded-xl shadow-lg border-4 border-white" />
        //           <div className="absolute top-3 right-3 bg-white/90 px-3 py-1 rounded-full text-xs font-bold text-gray-700 shadow-sm">{villaName}</div>
        //         </div>
        //       </div>
        //     </div>

        //     {/* Footer Info */}
        //     <div className="border-b border-gray-200 p-6 bg-gray-50/50">
        //       <div className="text-xs text-gray-600 mb-2 font-medium uppercase tracking-wide">Special Requests</div>
        //       <div className="text-sm text-gray-700">If you have any special requests, please call +91 99667 01124</div>
        //     </div>
        //     <div className="p-6 bg-white border-b border-gray-100">
        //       <div className="text-xs font-medium uppercase tracking-wide text-gray-500 mb-3">Hotel</div>
        //       <div className="text-sm text-gray-700 font-semibold">Avanya Resort, Mumbai, India</div>
        //     </div>
        //   </div>
        // </div>
        <div
  className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6"
  onClick={closeConfirmation}
>
  <div
    className="bg-white w-full max-w-[1150px] max-h-[95vh] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 shadow-2xl border-0 mx-auto relative"
    onClick={(e) => e.stopPropagation()}
    style={{ borderRadius: '8px' }}
  >
    <button
      onClick={closeConfirmation}
      title="Go Back To Home"
      className="absolute top-4 right-6 z-10 hover:bg-white flex items-center justify-center text-gray-600 hover:text-gray-900 text-xl transition-all duration-200 hover:scale-105 active:scale-95"
    >
      <img src="/logos/exit.png" alt="" style={{ height: '25px' }} />
    </button>

    {/* Header Section */}
    <div className="bg-gradient-to-r from-amber-50 to-orange-50/50 border-b border-amber-200/50 p-6 pt-10 pb-8 relative">
      <img src="/logos/Black.png" alt="Avanya Hotel" className="absolute top-4 left-6 w-28 h-auto img-logo-class" />
      <div className="text-center pt-4">
        {/* Playfair Display, Regular */}
        <h1 className="font-serif text-3xl text-gray-900 mb-1">
          Your reservation is confirmed!
        </h1>
        <div className="bg-white border border-amber-200 rounded-xl px-4 py-2 inline-block shadow-sm">
          {/* Poppins, Regular */}
          <span className="font-poppins text-lg text-gray-800">
            {bookingData.confirmationNumber}
          </span>
        </div>
      </div>
    </div>

    {/* Receipt Details */}
    <div className="border-b border-gray-200 p-6 bg-gradient-to-b from-white/80 to-gray-50/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        <div className="space-y-4 pt-2">
          {/* Stay Details */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <div className="font-poppins text-xs uppercase tracking-wide text-gray-500 mb-1">Name</div>
              <div className="font-serif text-gray-900">{bookingData.guestName}</div>
            </div>
            <div>
              <div className="font-poppins text-xs uppercase tracking-wide text-gray-500 mb-1">Room Type</div>
              <div className="font-serif text-gray-900">{bookingData.roomType}</div>
            </div>
            <div>
              <div className="font-poppins text-xs uppercase tracking-wide text-gray-500 mb-1">Check-in</div>
              <div className="font-serif text-gray-900">{bookingData.checkIn}</div>
            </div>
            <div>
              <div className="font-poppins text-xs uppercase tracking-wide text-gray-500 mb-1">Check-out</div>
              <div className="font-serif text-gray-900">{bookingData.checkOut}</div>
            </div>
          </div>

          {/* Guests & Amount */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
            <div>
              <div className="font-poppins text-xs uppercase tracking-wide text-gray-500 mb-1">Number of Guests</div>
              <div className="font-serif text-gray-900">1 Adult</div>
            </div>
            <div className="text-right">
              <div className="font-poppins text-xs uppercase tracking-wide text-gray-500 mb-1">Amount</div>
              <div className="font-serif text-2xl text-gray-900">{bookingData.total}</div>
            </div>
          </div>
        </div>
        <div className="relative">
          <img
            src={image}
            alt={bookingData.roomType}
            className="w-full h-48 lg:h-56 object-cover rounded-xl shadow-lg border-4 border-white"
          />
          <div className="absolute top-3 right-3 bg-white/90 px-3 py-1 rounded-full font-poppins text-xs text-gray-700 shadow-sm">
            {villaName}
          </div>
        </div>
      </div>
    </div>

    {/* Special Requests */}
    <div className="border-b border-gray-200 p-6 bg-gray-50/50">
      <div className="font-poppins text-xs text-gray-600 mb-2 uppercase tracking-wide">Special Requests</div>
      <div className="font-poppins text-sm text-gray-700">
        If you have any special requests, please call +91 99667 01124
      </div>
    </div>

    {/* Hotel Address */}
    <div className="p-6 bg-white border-b border-gray-100">
      <div className="font-poppins text-xs uppercase tracking-wide text-gray-500 mb-3">Hotel</div>
      <div className="font-poppins text-sm text-gray-700 space-y-1">
        <div>Avanya Resort</div>
        <div>Charni Road, Mumbai</div>
        <div>Maharashtra 400004, India</div>
      </div>
    </div>
  </div>
</div>
      )}

      {/* --- MAIN UI (From Snippet 2) --- */}
      <main className="min-h-screen px-2 py-16 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="font-serif pl-4 md:pl-0 text-3xl md:text-6xl text-[#1a1a1a] mb-12">
            Complete Your Booking
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
            
            {/* Mobile Summary Card */}
            <div className="relative lg:hidden">
              <BookingSummaryCard
                image={image}
                roomName={roomName}
                description={`${villaName}`}
                dates={`Mon, Dec 15 2025 – \nTue, Dec 18 2025`}
                guests="1 Room: 2 Adults"
                rateCode="Standard Rate"
                total={priceString}
                currency="INR"
              />
            </div>

            {/* LEFT COLUMN - FORMS */}
            <div className="lg:col-span-8 flex flex-col gap-16">
              
              {/* 1. Guest Information */}
              <section className="bg-white/50 border border-[#1a1a1a]/5 p-4 md:p-10 backdrop-blur-sm">
                <div className="flex md:flex-row justify-between items-center mb-8">
                  <h2 className="font-poppins text-3xl text-[#1a1a1a]">Guest Information</h2>
                  <button className="font-poppins hidden text-xs font-bold uppercase tracking-wider text-[#1a1a1a] underline hover:opacity-70">
                    Sign In for Faster Booking
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                  <Input 
                    label="First Name" 
                    placeholder="Jane" 
                    value={firstName} 
                    onChange={(e) => setFirstName(e.target.value)} 
                  />
                  <Input 
                    label="Last Name" 
                    placeholder="Doe" 
                    value={lastName} 
                    onChange={(e) => setLastName(e.target.value)} 
                  />
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="jane@example.com"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                  />
                  <Input
                    label="Mobile Number"
                    type="tel"
                    placeholder="1234567890"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                  />
                  <Input label="Member Number" placeholder="Optional" />
                  <Select
                    label="Country/Region"
                    options={[
                      { value: "in", label: "India" },
                      { value: "usa", label: "United States" },
                      { value: "uk", label: "United Kingdom" },
                      { value: "au", label: "Australia" },
                      { value: "ca", label: "Canada" },
                      { value: "de", label: "Germany" },
                      { value: "fr", label: "France" },
                      { value: "sg", label: "Singapore" },
                      { value: "jp", label: "Japan" },
                      { value: "cn", label: "China" },
                      { value: "ae", label: "United Arab Emirates" },
                      { value: "sa", label: "Saudi Arabia" },
                      { value: "it", label: "Italy" },
                      { value: "es", label: "Spain" },
                      { value: "br", label: "Brazil" }
                    ]}
                  />
                  <div className="hidden md:block"></div> {/* Spacer */}
                  <Input label="City" placeholder="New York" />
                  <Select
                    label="State/Province"
                    options={[
                      { value: "ap", label: "Andhra Pradesh" },
                      { value: "ar", label: "Arunachal Pradesh" },
                      { value: "as", label: "Assam" },
                      { value: "br", label: "Bihar" },
                      { value: "cg", label: "Chhattisgarh" },
                      { value: "ga", label: "Goa" },
                      { value: "gj", label: "Gujarat" },
                      { value: "hr", label: "Haryana" },
                      { value: "hp", label: "Himachal Pradesh" },
                      { value: "jh", label: "Jharkhand" },
                      { value: "ka", label: "Karnataka" },
                      { value: "kl", label: "Kerala" },
                      { value: "mp", label: "Madhya Pradesh" },
                      { value: "mh", label: "Maharashtra" },
                      { value: "mn", label: "Manipur" },
                      { value: "ml", label: "Meghalaya" },
                      { value: "mz", label: "Mizoram" },
                      { value: "nl", label: "Nagaland" },
                      { value: "od", label: "Odisha" },
                      { value: "pb", label: "Punjab" },
                      { value: "rj", label: "Rajasthan" },
                      { value: "sk", label: "Sikkim" },
                      { value: "tn", label: "Tamil Nadu" },
                      { value: "ts", label: "Telangana" },
                      { value: "tr", label: "Tripura" },
                      { value: "up", label: "Uttar Pradesh" },
                      { value: "ut", label: "Uttarakhand" },
                      { value: "wb", label: "West Bengal" },
                    ]}
                  />
                  <Input label="Zip Code" placeholder="10001" />
                </div>

                <div className="mt-8 flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="email-confirmation"
                    className="accent-[#BEA585] w-4 h-4 cursor-pointer"
                  />
                  <label
                    htmlFor="email-confirmation"
                    className="font-poppins text-sm text-[#1a1a1a]/80 cursor-pointer"
                  >
                    Send my receipt and confirmation by SMS/Email
                  </label>
                </div>
              </section>

              {/* 2. Payment Information */}
              <section className="bg-white/50 border border-[#1a1a1a]/5 p-4 md:p-10 backdrop-blur-sm">
                <h2 className="font-poppins text-3xl text-[#1a1a1a] mb-8">
                  Payment Information
                </h2>

                <div className="flex gap-1 md:gap-6 mb-10 border-b border-[#1a1a1a]/10 pb-6">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={paymentMethod === "card"}
                      onChange={() => setPaymentMethod("card")}
                      className="accent-[#1a1a1a] w-4 h-4"
                    />
                    <span className="font-poppins text-xs font-medium uppercase tracking-wide">
                      Pay Using Credit/Debit Card
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
                    <input
                      type="radio"
                      name="payment"
                      value="clicktopay"
                      checked={paymentMethod === "clicktopay"}
                      onChange={() => setPaymentMethod("clicktopay")}
                      className="accent-[#1a1a1a] w-4 h-4"
                    />
                    <span className="font-poppins text-xs font-medium uppercase tracking-wide">
                      Click To Pay
                    </span>
                  </label>
                </div>

                {paymentMethod === "card" && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                    <Input label="Credit/Debit Card Number" placeholder="0000 0000 0000 0000" />
                    <div className="grid grid-cols-2 gap-4">
                      <Select label="Expiration Month" options={[{ value: "01", label: "01 - Jan" }, { value: "12", label: "12 - Dec" }]} />
                      <Select label="Expiration Year" options={[{ value: "2025", label: "2025" }, { value: "2026", label: "2026" }]} />
                    </div>
                    <Input label="Billing Zip Code" placeholder="10001" />
                  </div>
                )}

                <div className="mt-8 bg-[#BEA585]/10 p-4 border-l-2 border-[#BEA585]">
                  <p className="font-poppins text-xs text-[#1a1a1a]/70 leading-relaxed">
                    To ensure that you receive this special rate, we will charge your credit card a prepayment of {priceString}.
                  </p>
                </div>

                <div className="mt-8 border-t hidden border-[#1a1a1a]/10 pt-6">
                  <button className="flex justify-between items-center w-full group">
                    <span className="font-poppins text-sm font-bold uppercase tracking-wider text-[#1a1a1a]">Are you a travel agent?</span>
                    <span className="text-xl group-hover:rotate-45 transition-transform duration-300">+</span>
                  </button>
                </div>
              </section>

              {/* 3. Room Requests (Hidden) */}
              <section className="bg-white/50 border hidden border-[#1a1a1a]/5 p-4 md:p-6 backdrop-blur-sm cursor-pointer hover:bg-white/60 transition-colors">
                <div className="flex justify-between items-center">
                  <span className="font-poppins text-sm font-bold uppercase tracking-wider text-[#1a1a1a]">Room Requests And Accessibility</span>
                  <span className="text-xl">+</span>
                </div>
              </section>

              {/* 4. Membership Join (Hidden) */}
              <section className="bg-white/50 hidden border border-[#1a1a1a]/5 p-4 md:p-10 backdrop-blur-sm">
                <div className="mb-8">
                  <h3 className="font-poppins text-2xl text-[#1a1a1a] mb-2">You selected an exclusive member rate.</h3>
                </div>
                {/* ... fields omitted since section is hidden ... */}
              </section>

              {/* 5. Cancellation & Book */}
              <section>
                <h3 className="font-poppins text-xl text-[#1a1a1a] mb-4">Cancellation Policy</h3>
                <p className="font-poppins text-xs leading-relaxed text-[#1a1a1a]/70 mb-6">
                  You may cancel your reservation for no charge before 11:59 PM hotel time on December 1, 2025...
                </p>

                <div className="flex items-center gap-3 mb-8">
                  <input type="checkbox" className="accent-[#BEA585] w-4 h-4" />
                  <label className="font-poppins text-xs text-[#1a1a1a]/80">
                    I have read and accept the <span className="underline cursor-pointer">Terms and Conditions</span> and <span className="underline cursor-pointer">Privacy Policy</span>.
                  </label>
                </div>

                <Button
                  text="Book Now"
                  variant="outline-dark"
                  className="w-full md:w-auto px-12 py-4 bg-[#1a1a1a] text-black hover:bg-[#1a1a1a]/90 hover:text-white"
                  onClick={handleConfirmBooking}
                />
              </section>
            </div>

            {/* RIGHT COLUMN - STICKY SUMMARY (Desktop) */}
            <div className="lg:col-span-4 relative hidden lg:block">
              <BookingSummaryCard
                image={image}
                roomName={roomName}
                description={`${villaName}`}
                dates={`Mon, Dec 15 2025 – \nTue, Dec 18 2025`}
                guests="1 Room: 2 Adults"
                rateCode="Standard Rate"
                total={priceString}
                currency="INR"
              />
            </div>

          </div>
        </div>
      </main>
    </>
  );
}

export default function CompleteBookingPage() {
  return (
    <Suspense>
      <CompleteBookingContent />
    </Suspense>
  );
}