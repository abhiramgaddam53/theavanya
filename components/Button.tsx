import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: "primary" | "secondary" | "outline-light" | "outline-dark" | "outline-rounded-dark" | "underline-dark" | "underline-white" | "link-arrow" | "glass";
    size?: "sm" | "md" | "lg" | "none";
    text: string;
    href?: string;
    marquee?: boolean;
    rounded?: boolean;
}

export default function Button({
    className = "",
    variant = "primary",
    size = "md",
    text,
    href,
    marquee = false,
    rounded = false,
    ...props
}: ButtonProps) {

    const baseStyles = "font-poppins font-medium transition-colors duration-300 cursor-pointer inline-flex items-center justify-center tracking-widest relative overflow-hidden group";

    // Border Radius Logic
    const radiusClass = rounded ? "rounded-full" : "rounded-sm";

    const variants = {
        primary: `bg-white text-black hover:bg-gray-200 border border-transparent ${radiusClass}`,
        "outline-light": `bg-transparent border border-[#F5F2EA] text-[#F5F2EA] hover:bg-[#F5F2EA] hover:text-black ${radiusClass}`,
        "outline-dark": `bg-transparent border border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white ${radiusClass}`,
        "outline-rounded-dark": "bg-transparent border border-[#1a1a1a]/30 text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white rounded-full",
        "underline-dark": "bg-transparent border-b border-black text-black hover:opacity-70 rounded-none !px-0 !py-1 h-auto",
        "underline-white": "bg-transparent border-b border-white text-white hover:opacity-70 rounded-none !px-0 !py-1 h-auto",
        "link-arrow": "bg-transparent text-gray-600 hover:text-black p-0 !tracking-widest text-[10px] gap-2 !justify-start",
        "glass": "bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30 rounded-sm",
        "secondary": `bg-transparent border-none text-[#1a1a1a] hover:opacity-70 ${radiusClass}`,
    };

    const sizes = {
        sm: "px-4 py-2 text-[10px]",
        md: "px-6 py-3 text-xs",
        lg: "px-8 py-4 text-sm",
        none: "p-0 text-md",
    };

    const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    // Content Rendering (Marquee vs Normal)
    const content = marquee ? (
        <div className="relative overflow-hidden w-full max-w-[200px] h-full flex items-center">
            <div className="flex whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused] w-max">
                <span className="pr-4">{text}</span>
                <span className="pr-4">{text}</span>
            </div>
            {/* Gradient fades for marquee edges */}
            <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-white/10 to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-white/10 to-transparent pointer-events-none z-10" />
        </div>
    ) : (
        <>
            {text}
            {variant === "link-arrow" && <span>→</span>}
        </>
    );

    if (href) {
        return (
            <Link href={href} className={combinedClasses} {...(props as any)}>
                {content}
            </Link>
        );
    }

    return (
        <button className={combinedClasses} {...props}>
            {content}
        </button>
    );
}
