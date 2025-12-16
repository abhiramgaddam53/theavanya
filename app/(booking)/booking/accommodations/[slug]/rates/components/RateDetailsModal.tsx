"use client";

import Modal from "@/components/Modal";

interface RateDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    rateName: string;
    price: string;
}

export default function RateDetailsModal({ isOpen, onClose, rateName, price }: RateDetailsModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title="Rate Details">
            <div className="space-y-6">
                <div>
                    <h3 className="font-serif text-2xl text-[#1a1a1a] mb-2">{rateName}</h3>
                    <span className="font-poppins text-lg font-bold text-[#1a1a1a]">{price} <span className="text-sm font-normal text-gray-500">/ Night</span></span>
                </div>

                <div className="bg-[#BEA585]/10 p-4 border-l-2 border-[#BEA585] rounded-r-md">
                    <p className="font-poppins text-sm text-[#1a1a1a]/80 leading-relaxed">
                        Exclusive member rate included. You are saving 10% on the standard flexible rate.
                    </p>
                </div>

                <div className="space-y-4">
                    <h4 className="font-poppins text-sm font-bold uppercase tracking-wider text-[#1a1a1a]">Rate Inclusions</h4>
                    <ul className="space-y-2">
                        <li className="flex items-start gap-3 text-sm font-poppins text-[#1a1a1a]/70">
                            <span className="text-green-600">✓</span>
                            Complimentary Breakfast for 2
                        </li>
                        <li className="flex items-start gap-3 text-sm font-poppins text-[#1a1a1a]/70">
                            <span className="text-green-600">✓</span>
                            High-speed Wi-Fi Access
                        </li>
                        <li className="flex items-start gap-3 text-sm font-poppins text-[#1a1a1a]/70">
                            <span className="text-green-600">✓</span>
                            Flexible Cancellation (up to 24h before arrival)
                        </li>
                    </ul>
                </div>

                <div className="border-t border-[#1a1a1a]/10 pt-4">
                    <h4 className="font-poppins text-sm font-bold uppercase tracking-wider text-[#1a1a1a] mb-2">Cancellation Policy</h4>
                    <p className="text-xs font-poppins text-[#1a1a1a]/60 leading-relaxed">
                        You may cancel your reservation for no charge before 11:59 PM hotel time on the day prior to arrival.
                    </p>
                </div>
            </div>
        </Modal>
    );
}
