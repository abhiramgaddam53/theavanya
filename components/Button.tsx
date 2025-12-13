import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    variant?: "primary" | "outlined";
    size?: "sm" | "md" | "lg";
    text: string;
}

export default function Button({
    className = "",
    variant = "primary",
    size = "md",
    text,
    ...props
}: ButtonProps) {

    const baseStyles = "font-poppins font-medium transition-colors duration-300 cursor-pointer";

    const variants = {
        primary: "bg-white text-black hover:bg-gray-200 border border-transparent",
        outlined: "bg-transparent border border-[#F5F2EA] text-[#F5F2EA] hover:bg-[#F5F2EA] hover:text-black",
    };

    const sizes = {
        sm: "px-2 py-2 text-xs",
        md: "px-4 py-3 text-sm",
        lg: "px-6 py-4 text-base",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {text}
        </button>
    );
}
