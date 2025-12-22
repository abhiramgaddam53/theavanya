'use client';

import React from 'react';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from "@/components/ui/dialog";
import { User } from 'lucide-react';

interface CreateBookingDialogProps {
    children: React.ReactNode;
}

export function CreateBookingDialog({ children }: CreateBookingDialogProps) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent className="sm:max-w-[400px] p-6 bg-white rounded-2xl">
                <div className="flex flex-col items-center gap-6">
                    <DialogTitle className="sr-only">Create Booking</DialogTitle>

                    {/* Avatar */}
                    <div className="relative">
                        <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-200">
                            <img
                                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=250&auto=format&fit=crop"
                                alt="Guest Avatar"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Form Fields */}
                    <div className="w-full space-y-4">
                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-gray-700">Guest name</label>
                            <input
                                type="text"
                                placeholder="Mr. Alexander Martin"
                                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-poppins"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-gray-700">Registration number</label>
                            <input
                                type="text"
                                placeholder="24665"
                                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-poppins"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-gray-700">Check in date</label>
                            <input
                                type="text"
                                placeholder="18/12/23"
                                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-poppins"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-gray-700">Room type</label>
                            <input
                                type="text"
                                placeholder="Single"
                                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-poppins"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-gray-700">Stay</label>
                            <input
                                type="text"
                                placeholder="4 nights"
                                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-poppins"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-gray-700">Discount</label>
                            <input
                                type="text"
                                placeholder="$ 100"
                                className="w-full px-3 py-2.5 border border-gray-300 rounded-lg text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-poppins"
                            />
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}
