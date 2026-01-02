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
    <main className=" min-h-screen px-2 py-16 md:px-12">
      <div className="max-w-[1400px] mx-auto  ">
        <h1 className="font-serif pl-4 md:pl-0 text-3xl md:text-6xl text-[#1a1a1a] mb-12">
          Complete Your Booking
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
           {/* MOBILE STICKY SUMMARY
            <div className="lg:hidden sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm mb-6">
              <BookingSummaryCard
                image={image}
                roomName={roomName}
                description={villaName}
                dates={`Mon, Dec 15 2025 – \nTue, Dec 18 2025`}
                guests="1 Room: 2 Adults"
                rateCode="Standard Rate"
                total={priceString}
                currency="INR"
              />
            </div> */}
            <div className=" relative lg:hidden">
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
          <div className="lg:col-span-8 flex flex-col gap-16 ">
            {/* 1. Guest Information */}
            <section className="bg-white/50 border border-[#1a1a1a]/5 p-4 md:p-10 backdrop-blur-sm">
              <div className="flex   md:flex-row justify-between items-center mb-8">
                <h2 className="font-poppins text-3xl text-[#1a1a1a]">
                  Guest Information
                </h2>
                <button className="font-poppins hidden text-xs font-bold uppercase tracking-wider text-[#1a1a1a] underline hover:opacity-70">
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

              {/* Payment Methods Toggle */}
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

              <div className="mt-8 border-t hidden border-[#1a1a1a]/10 pt-6">
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
            <section className="bg-white/50 border hidden border-[#1a1a1a]/5 p-4 md:p-6 backdrop-blur-sm cursor-pointer hover:bg-white/60 transition-colors">
              <div className="flex justify-between items-center">
                <span className="font-poppins text-sm font-bold uppercase tracking-wider text-[#1a1a1a]">
                  Room Requests And Accessibility
                </span>
                <span className="text-xl">+</span>
              </div>
            </section>

            {/* 4. Membership Join */}
            <section className="bg-white/50 hidden border border-[#1a1a1a]/5 p-4 md:p-10 backdrop-blur-sm">
              <div className="mb-8">
                <h3 className="font-poppins text-2xl text-[#1a1a1a] mb-2">
                  You selected an exclusive member rate.
                </h3>
                 
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
  