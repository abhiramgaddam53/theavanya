"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ClosedCaptionIcon, X } from "lucide-react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    title?: string;
    className?: string;
}

export default function Modal({ isOpen, onClose, children, title, className = "" }: ModalProps) {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return createPortal(
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white shadow-2xl outline-none ${className}`}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-[#1a1a1a]/10 sticky top-0 bg-white z-10">
                            <h2 className="font-poppins text-xl font-medium text-[#1a1a1a]">{title}</h2>
                            <button
                                onClick={onClose}
                                className="p-2 cursor-pointer hover:bg-[#1a1a1a]/5 rounded-full transition-colors"
                            >
                                <X />
                            </button>
                        </div>

                        <div className="p-6 md:p-8">
                            {children}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>,
        document.body
    );
}
