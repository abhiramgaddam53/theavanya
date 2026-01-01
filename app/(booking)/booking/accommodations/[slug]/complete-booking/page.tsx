"use client";

import Input from "@/components/Input";
import Select from "@/components/Select";
import BookingSummaryCard from "./components/BookingSummaryCard";
import Button from "@/components/Button";
import { useState } from "react";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function CompleteBookingContent() {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const searchParams = useSearchParams();

  const roomName = searchParams.get("roomName") || "Junior Suite King";
  const villaName = searchParams.get("villa") || "The Avanya";
  const priceString = searchParams.get("price") || "473.75";
  const image = searchParams.get("image") || "/miscellaneous/resort.jpg";

  // Extract numeric price for total if needed, or just display string
  const price = priceString.replace(/[^0-9.]/g, "");

  return (
    <main className=" min-h-screen py-16 px-12">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="font-poppins text-5xl md:text-6xl text-[#1a1a1a] mb-12">
          Complete Your Booking
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
          {/* LEFT COLUMN - FORMS */}
          <div className="lg:col-span-8 flex flex-col gap-16">
            {/* 1. Guest Information */}
            <section className="bg-white/50 border border-[#1a1a1a]/5 p-8 md:p-10 backdrop-blur-sm">
              <div className="flex justify-between items-center mb-8">
                <h2 className="font-poppins text-3xl text-[#1a1a1a]">
                  Guest Information
                </h2>
                <button className="font-poppins text-xs font-bold uppercase tracking-wider text-[#1a1a1a] underline hover:opacity-70">
                  Sign In for Faster Booking
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                <Input label="First Name" placeholder="Jane" />
                <Input label="Last Name" placeholder="Doe" />
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="jane@example.com"
                />
                <Input label="Member Number" placeholder="Optional" />
                <Select
                  label="Country/Region"
                  options={[
                    { value: "usa", label: "United States" },
                    { value: "uk", label: "United Kingdom" },
                    { value: "in", label: "India" },
                  ]}
                />
                <div className="hidden md:block"></div> {/* Spacer */}
                <Input label="City" placeholder="New York" />
                <Select
                  label="State/Province"
                  options={[
                    { value: "ny", label: "New York" },
                    { value: "ca", label: "California" },
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
            <section className="bg-white/50 border border-[#1a1a1a]/5 p-8 md:p-10 backdrop-blur-sm">
              <h2 className="font-poppins text-3xl text-[#1a1a1a] mb-8">
                Payment Information
              </h2>

              {/* Payment Methods Toggle */}
              <div className="flex gap-6 mb-10 border-b border-[#1a1a1a]/10 pb-6">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                    className="accent-[#1a1a1a] w-4 h-4"
                  />
                  <span className="font-poppins text-sm font-medium uppercase tracking-wide">
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
                  <span className="font-poppins text-sm font-medium uppercase tracking-wide">
                    Click To Pay
                  </span>
                </label>
              </div>

              {/* Card Details */}
              {paymentMethod === "card" && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                  <Input
                    label="Credit/Debit Card Number"
                    placeholder="0000 0000 0000 0000"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <Select
                      label="Expiration Month"
                      options={[
                        { value: "01", label: "01 - Jan" },
                        { value: "12", label: "12 - Dec" },
                      ]}
                    />
                    <Select
                      label="Expiration Year"
                      options={[
                        { value: "2025", label: "2025" },
                        { value: "2026", label: "2026" },
                      ]}
                    />
                  </div>
                  <Input label="Billing Zip Code" placeholder="10001" />
                </div>
              )}

              <div className="mt-8 bg-[#BEA585]/10 p-4 border-l-2 border-[#BEA585]">
                <p className="font-poppins text-xs text-[#1a1a1a]/70 leading-relaxed">
                  To ensure that you receive this special rate, we will charge
                  your credit card a prepayment of {priceString}.
                </p>
              </div>

              <div className="mt-8 border-t border-[#1a1a1a]/10 pt-6">
                <button className="flex justify-between items-center w-full group">
                  <span className="font-poppins text-sm font-bold uppercase tracking-wider text-[#1a1a1a]">
                    Are you a travel agent?
                  </span>
                  <span className="text-xl group-hover:rotate-45 transition-transform duration-300">
                    +
                  </span>
                </button>
              </div>
            </section>

            {/* 3. Room Requests (Accordion Placeholder) */}
            <section className="bg-white/50 border border-[#1a1a1a]/5 p-6 backdrop-blur-sm cursor-pointer hover:bg-white/60 transition-colors">
              <div className="flex justify-between items-center">
                <span className="font-poppins text-sm font-bold uppercase tracking-wider text-[#1a1a1a]">
                  Room Requests And Accessibility
                </span>
                <span className="text-xl">+</span>
              </div>
            </section>

            {/* 4. Membership Join */}
            <section className="bg-white/50 border border-[#1a1a1a]/5 p-8 md:p-10 backdrop-blur-sm">
              <div className="mb-8">
                <h3 className="font-poppins text-2xl text-[#1a1a1a] mb-2">
                  You selected an exclusive member rate.
                </h3>
                <p className="font-poppins text-sm text-[#1a1a1a]/70">
                  Sign in or create a password to join Avanya Journey.
                </p>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <input
                  type="checkbox"
                  checked
                  readOnly
                  className="accent-[#BEA585] w-4 h-4"
                />
                <label className="font-poppins text-sm font-bold text-[#1a1a1a]">
                  Join Avanya Journey for Free
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 mb-8">
                <Input label="Password" type="password" />
                <Input label="Confirm Password" type="password" />
              </div>

              <div className="flex items-center gap-3 mb-4">
                <input type="checkbox" className="accent-[#BEA585] w-4 h-4" />
                <label className="font-poppins text-xs text-[#1a1a1a]/80">
                  Remember me (Recommended for private computers only)
                </label>
              </div>
            </section>

            {/* 5. Cancellation & Book */}
            <section>
              <h3 className="font-poppins text-xl text-[#1a1a1a] mb-4">
                Cancellation Policy
              </h3>
              <p className="font-poppins text-xs leading-relaxed text-[#1a1a1a]/70 mb-6">
                You may cancel your reservation for no charge before 11:59 PM
                hotel time on December 1, 2025 (14 days before arrival). After
                this time, please note that your prepayment for this special
                rate is non-refundable.
              </p>

              <div className="flex items-center gap-3 mb-8">
                <input type="checkbox" className="accent-[#BEA585] w-4 h-4" />
                <label className="font-poppins text-xs text-[#1a1a1a]/80">
                  I have read and accept the{" "}
                  <span className="underline cursor-pointer">
                    Terms and Conditions
                  </span>{" "}
                  and{" "}
                  <span className="underline cursor-pointer">
                    Privacy Policy
                  </span>
                  .
                </label>
              </div>

              <Button
                text="Book Now"
                variant="outline-dark"
                className="w-full md:w-auto px-12 py-4 bg-[#1a1a1a] text-black hover:bg-[#1a1a1a]/90 hover:text-white"
              />
            </section>
          </div>

          {/* RIGHT COLUMN - STICKY SUMMARY */}
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
  );
}

export default function CompleteBookingPage() {
  return (
    <Suspense>
      <CompleteBookingContent />
    </Suspense>
  );
}

// "use client";

// import Input from "@/components/Input";
// import Select from "@/components/Select";
// import BookingSummaryCard from "./components/BookingSummaryCard";
// import Button from "@/components/Button";
// import { useState, Suspense } from "react";
// import { useSearchParams } from "next/navigation";
// import { CreditCard, ShieldCheck, User, ChevronRight } from "lucide-react"; // Assuming you have lucide-react, if not I'll use text icons

// function CompleteBookingContent() {
//   const [paymentMethod, setPaymentMethod] = useState("card");
//   const searchParams = useSearchParams();

//   const roomName = searchParams.get("roomName") || "Junior Suite King";
//   const villaName = searchParams.get("villa") || "The Avanya";
//   const priceString = searchParams.get("price") || "473.75";
//   const image = searchParams.get("image") || "/miscellaneous/resort.jpg";

//   // Extract numeric price
//   const price = priceString.replace(/[^0-9.]/g, "");

//   return (
//     <main className="min-h-screen bg-[#F8F9FA] pb-32 md:pb-16 pt-6 md:pt-16 px-4 md:px-12">
//       <div className="max-w-[1400px] mx-auto">
//         <h1 className="font-serif text-3xl md:text-5xl text-[#1a1a1a] mb-6 md:mb-10 tracking-tight">
//           Complete Booking
//         </h1>

//         <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 lg:gap-12 relative">
          
//           {/* RIGHT COLUMN - SUMMARY (Mobile: Top Ticket Style, Desktop: Sticky Card) */}
//           <div className="order-1 lg:order-2 lg:col-span-4 h-fit z-10">
//             <div className="sticky top-6">
//               {/* Mobile "Ticket" Visual Hook */}
//               <div className="lg:hidden mb-4 overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100/50">
//                 <div className="h-2 bg-gradient-to-r from-[#BEA585] to-[#9A8466]" />
//                 <BookingSummaryCard
//                   image={image}
//                   roomName={roomName}
//                   description={`${villaName}`}
//                   dates={`Dec 15 – Dec 18, 2025`}
//                   guests="2 Adults"
//                   rateCode="Standard Rate"
//                   total={priceString}
//                   currency="INR"
//                 />
//               </div>

//               {/* Desktop Original View */}
//               <div className="hidden lg:block">
//                 <BookingSummaryCard
//                   image={image}
//                   roomName={roomName}
//                   description={`${villaName}`}
//                   dates={`Mon, Dec 15 2025 – \nTue, Dec 18 2025`}
//                   guests="1 Room: 2 Adults"
//                   rateCode="Standard Rate"
//                   total={priceString}
//                   currency="INR"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* LEFT COLUMN - FORMS */}
//           <div className="order-2 lg:order-1 lg:col-span-8 flex flex-col gap-6">
            
//             {/* 1. Guest Information - Glass & Modern */}
//             <section className="bg-white p-6 md:p-10 rounded-3xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-gray-100 relative overflow-hidden group">
//               <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110 duration-700" />
              
//               <div className="relative z-10 flex flex-col md:flex-row justify-between md:items-center mb-8 gap-2">
//                 <div className="flex items-center gap-3">
//                   <div className="p-2 bg-gray-50 rounded-full text-[#BEA585]">
//                     {/* Icon placeholder if Lucide not installed, uses text */}
//                     <span className="text-xl">👤</span> 
//                   </div>
//                   <h2 className="font-serif text-xl md:text-2xl text-[#1a1a1a]">
//                     Guest Information
//                   </h2>
//                 </div>
//                 <button className="text-xs font-bold uppercase tracking-widest text-[#BEA585] border-b border-[#BEA585]/30 hover:border-[#BEA585] pb-0.5 transition-colors text-left w-fit">
//                   Sign In for Faster Booking
//                 </button>
//               </div>

//               <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
//                 <Input label="First Name" placeholder="Jane" />
//                 <Input label="Last Name" placeholder="Doe" />
//                 <Input label="Email Address" type="email" placeholder="jane@example.com" />
//                 <Input label="Member Number" placeholder="Optional" />
//                 <Select
//                   label="Country/Region"
//                   options={[
//                     { value: "usa", label: "United States" },
//                     { value: "uk", label: "United Kingdom" },
//                     { value: "in", label: "India" },
//                   ]}
//                 />
//                 <div className="hidden md:block"></div>
//                 <Input label="City" placeholder="New York" />
//                 <Select
//                   label="State/Province"
//                   options={[
//                     { value: "ny", label: "New York" },
//                     { value: "ca", label: "California" },
//                   ]}
//                 />
//                 <Input label="Zip Code" placeholder="10001" />
//               </div>
//             </section>

//             {/* 2. Payment Information */}
//             <section className="bg-white p-6 md:p-10 rounded-3xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-gray-100 relative overflow-hidden">
//                <div className="flex items-center gap-3 mb-8">
//                   <div className="p-2 bg-gray-50 rounded-full text-[#BEA585]">
//                     <span className="text-xl">💳</span>
//                   </div>
//                   <h2 className="font-serif text-xl md:text-2xl text-[#1a1a1a]">
//                     Payment Method
//                   </h2>
//                 </div>

//               {/* Modern Toggle Pills */}
//               <div className="flex p-1.5 bg-gray-100/80 rounded-2xl mb-8 w-full md:w-fit">
//                 <button
//                   onClick={() => setPaymentMethod("card")}
//                   className={`flex-1 md:flex-none px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
//                     paymentMethod === "card"
//                       ? "bg-white text-black shadow-sm transform scale-100"
//                       : "text-gray-500 hover:text-black"
//                   }`}
//                 >
//                   Credit Card
//                 </button>
//                 <button
//                   onClick={() => setPaymentMethod("clicktopay")}
//                   className={`flex-1 md:flex-none px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
//                     paymentMethod === "clicktopay"
//                       ? "bg-white text-black shadow-sm transform scale-100"
//                       : "text-gray-500 hover:text-black"
//                   }`}
//                 >
//                   Click To Pay
//                 </button>
//               </div>

//               {/* Card Details with Fade Animation */}
//               <div className={`transition-opacity duration-300 ${paymentMethod === 'card' ? 'opacity-100' : 'opacity-0 hidden'}`}>
//                 {paymentMethod === "card" && (
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
//                     <div className="md:col-span-2">
//                          <Input label="Card Number" placeholder="0000 0000 0000 0000" />
//                     </div>
//                     <Select
//                       label="Exp. Month"
//                       options={[{ value: "01", label: "01 - Jan" }, { value: "12", label: "12 - Dec" }]}
//                     />
//                     <Select
//                       label="Exp. Year"
//                       options={[{ value: "2025", label: "2025" }, { value: "2026", label: "2026" }]}
//                     />
//                     <div className="md:col-span-2">
//                          <Input label="Billing Zip Code" placeholder="10001" />
//                     </div>
//                   </div>
//                 )}
//               </div>

//               <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-[#BEA585]/10 to-transparent border-l-4 border-[#BEA585]">
//                 <p className="font-poppins text-xs text-[#1a1a1a]/80 leading-relaxed">
//                   <span className="font-bold">Note:</span> We will charge your credit card a prepayment of <strong>{priceString}</strong>.
//                 </p>
//               </div>
//             </section>

//             {/* 3. Collapsible Sections (Modern Accordion Look) */}
//             <section className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer group">
//               <div className="p-6 flex justify-between items-center">
//                 <span className="font-poppins text-sm font-bold uppercase tracking-wider text-[#1a1a1a]">
//                   Room Requests & Accessibility
//                 </span>
//                 <span className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 group-hover:bg-[#1a1a1a] group-hover:text-white transition-colors duration-300 text-lg">
//                   +
//                 </span>
//               </div>
//             </section>

//             {/* 4. Join Membership - Highlighted */}
//             <section className="bg-[#1a1a1a] p-6 md:p-10 rounded-3xl shadow-lg text-white relative overflow-hidden">
//                {/* Abstract decorative circle */}
//                <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
               
//               <div className="relative z-10">
//                 <h3 className="font-serif text-xl md:text-2xl mb-2 text-white">
//                   Unlock Exclusive Perks
//                 </h3>
//                 <p className="font-poppins text-sm text-white/60 mb-6">
//                   Sign in or create a password to join Avanya Journey.
//                 </p>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 mb-6">
//                   {/* Custom White Inputs for Dark Bg */}
//                   <div className="flex flex-col gap-2">
//                     <label className="text-[10px] uppercase font-bold tracking-widest text-white/50">Password</label>
//                     <input type="password" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white outline-none focus:border-[#BEA585] transition-colors" />
//                   </div>
//                    <div className="flex flex-col gap-2">
//                     <label className="text-[10px] uppercase font-bold tracking-widest text-white/50">Confirm</label>
//                     <input type="password" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white outline-none focus:border-[#BEA585] transition-colors" />
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-3">
//                     <div className="w-5 h-5 rounded border border-white/30 flex items-center justify-center bg-[#BEA585] text-black">
//                         ✓
//                     </div>
//                     <span className="text-sm font-medium">Join Avanya Journey for Free</span>
//                 </div>
//               </div>
//             </section>

//             {/* 5. Policies */}
//             <section className="px-2">
//               <div className="flex items-start gap-3 mb-6 p-4 rounded-xl bg-white border border-gray-100">
//                 <input type="checkbox" className="accent-[#1a1a1a] w-5 h-5 mt-0.5 rounded cursor-pointer" />
//                 <label className="font-poppins text-xs text-[#1a1a1a]/80 leading-relaxed cursor-pointer">
//                   I agree to the <span className="underline font-bold">Terms</span> and <span className="underline font-bold">Cancellation Policy</span>. (Cancel before Dec 1 for refund).
//                 </label>
//               </div>

//               {/* Desktop Button - Hidden on Mobile */}
//               <div className="hidden md:block">
//                  <Button
//                     text="Confirm Booking"
//                     variant="outline-dark"
//                     className="w-full py-5 bg-[#1a1a1a] text-white rounded-xl shadow-xl hover:scale-[1.01] transition-transform text-sm tracking-widest uppercase font-bold"
//                   />
//               </div>
//             </section>
//           </div>
//         </div>
//       </div>

//       {/* MOBILE STICKY BOTTOM BAR - The "Modern Hook" */}
//       <div className="md:hidden fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-xl border-t border-gray-200 p-4 pb-8 z-50 animate-in slide-in-from-bottom duration-500 shadow-[0_-5px_20px_rgba(0,0,0,0.1)]">
//         <div className="flex items-center justify-between gap-4">
//           <div className="flex flex-col">
//             <span className="text-[10px] uppercase tracking-wider text-gray-500 font-bold">Total Price</span>
//             <div className="flex items-baseline gap-1">
//               <span className="font-serif text-2xl text-[#1a1a1a]">₹{priceString}</span>
//             </div>
//           </div>
//           <button className="flex-1 bg-[#1a1a1a] text-white py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg active:scale-95 transition-transform flex items-center justify-center gap-2">
//             Book Now <span>→</span>
//           </button>
//         </div>
//       </div>

//     </main>
//   );
// }

// export default function CompleteBookingPage() {
//   return (
//     <Suspense>
//       <CompleteBookingContent />
//     </Suspense>
//   );
// }