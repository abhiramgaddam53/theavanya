"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface BookingContextType {
    checkIn: Date | null;
    checkOut: Date | null;
    adults: number;
    children: number;
    guests: number; // Derived: adults + children
    setCheckIn: (date: Date | null) => void;
    setCheckOut: (date: Date | null) => void;
    setAdults: (num: number) => void;
    setChildren: (num: number) => void;
    setGuests: (num: number) => void; // Legacy/Basic setter
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children: childrenProp }: { children: ReactNode }) {
    // Default dates: mostly standard for easier demo (e.g. tomorrow)
    const [checkIn, setCheckIn] = useState<Date | null>(null);
    const [checkOut, setCheckOut] = useState<Date | null>(null);
    const [adults, setAdults] = useState(1);
    const [childrenCount, setChildrenCount] = useState(0);

    const guests = adults + childrenCount;

    const setGuests = (num: number) => {
        setAdults(num);
        setChildrenCount(0);
    };

    return (
        <BookingContext.Provider
            value={{
                checkIn,
                checkOut,
                adults,
                children: childrenCount,
                guests,
                setCheckIn,
                setCheckOut,
                setAdults,
                setChildren: setChildrenCount,
                setGuests,
            }}
        >
            {childrenProp}
        </BookingContext.Provider>
    );
}

export function useBooking() {
    const context = useContext(BookingContext);
    if (!context) {
        throw new Error("useBooking must be used within a BookingProvider");
    }
    return context;
}
