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
  const [guestName, setGuestName] = useState("");
const [guestPhone, setGuestPhone] = useState("");
const [guestEmail, setGuestEmail] = useState("");

  const roomName = searchParams.get("roomName") || "Junior Suite King";
  const villaName = searchParams.get("villa") || "The Avanya";
  const priceString = searchParams.get("price") || "473.75";
  const image = searchParams.get("image") || "/miscellaneous/resort.jpg";
const checkInDate = new Date("Mon, Dec 15 2025");
const checkOutDate = new Date("Tue, Dec 18 2025");

const checkIn = checkInDate.toISOString();
const checkOut = checkOutDate.toISOString();

  // Extract numeric price for total if needed, or just display string
  const price = priceString.replace(/[^0-9.]/g, "");
const handleConfirmBooking = async () => {
  try {
    const res = await fetch("/api/booking/confirm", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        guestName,
        guestPhone,
        guestEmail,
        checkIn,
        checkOut,
        roomName,
        total:priceString, // {{5}}
      }),
    });

    const data = await res.json();

    if (!data.ok) {
      alert("Booking saved but confirmation failed");
      return;
    }

    alert("Booking confirmed & message sent ✅");
  } catch (err) {
    console.error(err);
    alert("Something went wrong");
  }
};
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
                <Input label="First Name" placeholder="Jane" value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}/>
                <Input label="Last Name" placeholder="Doe" value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}/>
                <Input
                  label="Email Address"
                  type="email"
                  placeholder="jane@example.com"
                  value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                />
                <Input
                  label="Mobile Number"
                  type="number"
                  placeholder="1234567890"
                  value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
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
                onClick={handleConfirmBooking}
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
