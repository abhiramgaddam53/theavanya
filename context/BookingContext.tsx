"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface BookingContextType {
    checkIn: Date | null;
    checkOut: Date | null;
    guests: number;
    setCheckIn: (date: Date | null) => void;
    setCheckOut: (date: Date | null) => void;
    setGuests: (num: number) => void;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export function BookingProvider({ children }: { children: ReactNode }) {
    // Default dates: mostly standard for easier demo (e.g. tomorrow)
    const [checkIn, setCheckIn] = useState<Date | null>(null);
    const [checkOut, setCheckOut] = useState<Date | null>(null);
    const [guests, setGuests] = useState(1);

    return (
        <BookingContext.Provider
            value={{
                checkIn,
                checkOut,
                guests,
                setCheckIn,
                setCheckOut,
                setGuests,
            }}
        >
            {children}
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
