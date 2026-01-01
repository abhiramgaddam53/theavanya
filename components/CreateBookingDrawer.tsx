"use client";

import React, { useEffect, useState } from "react";

interface CreateBookingDrawerProps {
  trigger: React.ReactNode;
}

type Step = 1 | 2 | 3 | 4;

export function CreateBookingDrawer({ trigger }: CreateBookingDrawerProps) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>(1);

  // core booking state (simplified)
  const [guestName, setGuestName] = useState("");
const [guestPhone, setGuestPhone] = useState("");
const [guestEmail, setGuestEmail] = useState("");

  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");
  const [nights, setNights] = useState<number>(1);
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [purpose, setPurpose] = useState<string>("");

  const [roomType, setRoomType] = useState<string>("");
  const [roomNo, setRoomNo] = useState<string>("");
  const [rate, setRate] = useState<number>(3500);
  const [extraBed, setExtraBed] = useState<boolean>(false);
  const [specialReq, setSpecialReq] = useState<string>("");

  const [total, setTotal] = useState<number>(0);
  const [advance, setAdvance] = useState<number>(0);
  const [paymentStatus, setPaymentStatus] = useState<string>("Unpaid");
  const [paymentMode, setPaymentMode] = useState<string>("");
  const [txnId, setTxnId] = useState<string>("");

  const [bookingSource, setBookingSource] = useState<string>("Walk-in");
  const [handledBy, setHandledBy] = useState<string>("Current Staff");
  const [vip, setVip] = useState<boolean>(false);
  const [guestStatus, setGuestStatus] = useState<string>("Expected");
  const [sendConfirmation, setSendConfirmation] = useState<boolean>(true);

  // lock body scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
const handleConfirmBooking = async () => {
  reset();
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
        roomType,
        total, // {{5}}
      }),
    });

    const data = await res.json();

    if (!data.ok) {
      alert("Booking saved but confirmation failed");
      return;
    }

    alert("Booking confirmed & message sent ✅");
    reset();
  } catch (err) {
    console.error(err);
    alert("Something went wrong");
  }
};

  // auto-calc nights and total
  useEffect(() => {
    if (checkIn && checkOut) {
      const d1 = new Date(checkIn);
      const d2 = new Date(checkOut);
      const diff = Math.max(
        1,
        Math.round((d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24))
      );
      setNights(diff);
    }
  }, [checkIn, checkOut]);

  useEffect(() => {
    const extras = extraBed ? 500 : 0; // example extra
    setTotal(nights * rate + extras);
  }, [nights, rate, extraBed]);

  const reset = () => {
    setStep(1);
    setOpen(false);
  };

  const headerTitle = "Create New Booking";
  const stepTitle =
    step === 1
      ? "Guest Details"
      : step === 2
      ? "Stay Details"
      : step === 3
      ? "Payment Details"
      : "Booking Source & Status";

  return (
    <>
      {/* Trigger */}
      <div
        onClick={() => {
          setStep(1);
          setOpen(true);
        }}
        style={{ display: "inline-block" }}
      >
        {trigger}
      </div>

      {/* Left overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 flex"
          onClick={reset}
        >
          <div className="w-[40%] h-full bg-black/20 backdrop-blur-sm" />
          <div className="w-[60%] h-full" />
        </div>
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[60%]  bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <div>
            <h2
              className="font-[500] text-[24px] leading-[100%] tracking-[-0.05em] text-[#161618]"
              style={{
                fontFamily:
                  'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              {headerTitle}
            </h2>
            <p
              className="font-[500] text-[16px] leading-[100%] tracking-[-0.05em] text-[#48494C] mt-3"
              style={{
                fontFamily:
                  'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
              }}
            >
              {stepTitle}
            </p>
          </div>
          <button
            onClick={reset}
            className="text-gray-400 hover:text-gray-600"
            style={{ fontSize: "32px", lineHeight: 1 }}
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="px-6 py-5 overflow-y-auto h-[calc(100%-64px)]">
          {/* STEP 1: Guest Details */}
          {step === 1 && (
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    type="text"
                    className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                    placeholder="Enter Full Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    type="text"
                    className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                    placeholder="Enter Phone Number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                    placeholder="Enter Email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                    placeholder="Enter Full Address"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nationality <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  placeholder="Enter Nationality"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ID Proof <span className="text-red-500">*</span>
                </label>
                <label className="mt-1 flex items-center w-full rounded-xl border border-gray-300 bg-white overflow-hidden cursor-pointer text-sm">
                  <span className="px-4 py-2 bg-gray-50 text-gray-600 border-r border-gray-200">
                    Choose File
                  </span>
                  <span className="px-4 py-2 text-gray-400 flex-1 truncate">
                    No File Chosen
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/png,image/jpeg"
                  />
                </label>
                <p className="mt-1 text-xs text-gray-400">
                  PNG, JPEG up to 5MB
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  ID Proof Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  placeholder="+91 123456789"
                />
              </div>

              <div className="flex justify-between pt-6 gap-3">
                <button
                  type="button"
                  onClick={reset}
                  className="w-1/3 border border-gray-300 rounded-lg py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 text-sm font-medium"
                >
                  Next: Stay Details
                </button>
              </div>
            </form>
          )}

          {/* STEP 2: Stay Details + Room Assignment */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Check-In DateTime
                  </label>
                  <input
                    type="datetime-local"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Expected Check-Out DateTime
                  </label>
                  <input
                    type="datetime-local"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Nights
                  </label>
                  <input
                    readOnly
                    value={nights}
                    className="mt-1 w-full border border-gray-200 bg-gray-50 rounded-lg px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Adults
                  </label>
                  <input
                    type="number"
                    min={1}
                    value={adults}
                    onChange={(e) => setAdults(Number(e.target.value) || 1)}
                    className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Children
                  </label>
                  <input
                    type="number"
                    min={0}
                    value={children}
                    onChange={(e) => setChildren(Number(e.target.value) || 0)}
                    className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Purpose of Stay
                </label>
                <input
                  type="text"
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  placeholder="Business, Leisure, Event, etc."
                />
              </div>

              <hr className="my-2" />

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Room Type
                  </label>
                  <select
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value)}
                    className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  >
                    <option value="">Select Room Type</option>
                    {/* filter only available categories in real data */}
                    <option value="Canopy Villa">Canopy Villa</option>
                    <option value="Estate Retreat">Estate Retreat</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Room No.
                  </label>
                  <select
                    value={roomNo}
                    onChange={(e) => setRoomNo(e.target.value)}
                    className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  >
                    <option value="">Select Room</option>
                    {/* only Available + Clean rooms here */}
                    <option value="201">201 • Available • Clean</option>
                    <option value="305">305 • Available • Clean</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Rate per Night
                  </label>
                  <input
                    type="number"
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value) || 0)}
                    className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  />
                  <p className="mt-1 text-xs text-gray-400">
                    Pre-filled from room category; override allowed for manager
                  </p>
                </div>
                <div className="flex items-center mt-6 gap-2">
                  <input
                    id="extraBed"
                    type="checkbox"
                    checked={extraBed}
                    onChange={(e) => setExtraBed(e.target.checked)}
                    className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="extraBed"
                    className="text-sm font-medium text-gray-700"
                  >
                    Extra Bed
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Special Requests
                </label>
                <textarea
                  rows={3}
                  value={specialReq}
                  onChange={(e) => setSpecialReq(e.target.value)}
                  className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  placeholder="Any special instructions"
                />
              </div>

              <div className="flex justify-between pt-6 gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="w-1/3 border border-gray-300 rounded-lg py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 text-sm font-medium"
                >
                  Next: Payment Details
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Payment Details */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Nights
                  </label>
                  <input
                    readOnly
                    value={nights}
                    className="mt-1 w-full border border-gray-200 bg-gray-50 rounded-lg px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Rate per Night
                  </label>
                  <input
                    readOnly
                    value={rate}
                    className="mt-1 w-full border border-gray-200 bg-gray-50 rounded-lg px-3 py-2 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Total Amount
                  </label>
                  <input
                    readOnly
                    value={total}
                    className="mt-1 w-full border border-gray-200 bg-gray-50 rounded-lg px-3 py-2 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Advance Paid
                  </label>
                  <input
                    type="number"
                    value={advance}
                    onChange={(e) => {
                      const v = Math.min(
                        total,
                        Math.max(0, Number(e.target.value) || 0)
                      );
                      setAdvance(v);
                    }}
                    className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  />
                  <p className="mt-1 text-xs text-gray-400">
                    Cannot exceed Total Amount
                  </p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Payment Status
                  </label>
                  <select
                    value={paymentStatus}
                    onChange={(e) => setPaymentStatus(e.target.value)}
                    className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  >
                    <option>Unpaid</option>
                    <option>Partially Paid</option>
                    <option>Fully Paid</option>
                    <option>Pay at Checkout</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Payment Mode
                  </label>
                  <select
                    value={paymentMode}
                    onChange={(e) => setPaymentMode(e.target.value)}
                    className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  >
                    <option value="">Select Mode</option>
                    <option>Cash</option>
                    <option>Card</option>
                    <option>UPI</option>
                    <option>Bank Transfer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Transaction ID
                  </label>
                  <input
                    type="text"
                    value={txnId}
                    onChange={(e) => setTxnId(e.target.value)}
                    className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Balance
                </label>
                <input
                  readOnly
                  value={Math.max(0, total - advance)}
                  className="mt-1 w-full border border-gray-200 bg-gray-50 rounded-lg px-3 py-2 text-sm"
                />
              </div>

              <div className="flex justify-between pt-6 gap-3">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-1/3 border border-gray-300 rounded-lg py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setStep(4)}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 text-sm font-medium"
                >
                  Next: Booking Source
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Booking Source & Status */}
          {step === 4 && (
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Booking Source
                </label>
                <select
                  value={bookingSource}
                  onChange={(e) => setBookingSource(e.target.value)}
                  className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                >
                  <option>Walk-in</option>
                  <option>Website</option>
                  <option>OTA</option>
                  <option>Corporate</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Handled By
                </label>
                <input
                  type="text"
                  value={handledBy}
                  onChange={(e) => setHandledBy(e.target.value)}
                  className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  id="vip"
                  type="checkbox"
                  checked={vip}
                  onChange={(e) => setVip(e.target.checked)}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label htmlFor="vip" className="text-sm font-medium text-gray-700">
                  VIP / Priority Guest
                </label>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Guest Status
                </label>
                <select
                  value={guestStatus}
                  onChange={(e) => setGuestStatus(e.target.value)}
                  className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                >
                  <option>Expected</option>
                  <option>Checked-In</option>
                </select>
              </div>

              <div className="flex items-center gap-3">
                <input
                  id="sendConf"
                  type="checkbox"
                  checked={sendConfirmation}
                  onChange={(e) => setSendConfirmation(e.target.checked)}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label
                  htmlFor="sendConf"
                  className="text-sm font-medium text-gray-700"
                >
                  Send Confirmation (SMS / WhatsApp)
                </label>
              </div>

              <div className="flex justify-between pt-6 gap-3">
                <button
                  type="button"
                  onClick={() => setStep(3)}
                  className="w-1/3 border border-gray-300 rounded-lg py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  Back
                </button>
                <button
                  type="button"
                    onClick={handleConfirmBooking}

                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg py-2 text-sm font-medium"
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
