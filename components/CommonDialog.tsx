"use client";

import { ReactNode } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface CommonDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title?: string;
    description?: string;
    children: ReactNode;
    className?: string;
}

export default function CommonDialog({
    open,
    onOpenChange,
    title,
    description,
    children,
    className,
}: CommonDialogProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent
                className={cn(
                    `
          max-h-[85vh]
          h-[85vh]
          w-[90vw]
          max-w-4xl
          overflow-hidden
          flex
          flex-col
          p-0
          gap-0
          `,
                    className
                )}
            >
                {(title || description) && (
                    <DialogHeader className="flex-shrink-0 border-b p-6">
                        {title && (
                            <DialogTitle className="font-poppins text-[#1a1a1a] text-xl">
                                {title}
                            </DialogTitle>
                        )}
                        {description && (
                            <DialogDescription className="font-poppins">
                                {description}
                            </DialogDescription>
                        )}
                    </DialogHeader>
                )}

                {/* Content decides scrolling */}
                <div className="flex-1 overflow-y-auto min-h-0 p-6">{children}</div>
            </DialogContent>
        </Dialog>
    );
}
