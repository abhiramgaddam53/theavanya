import React from "react";

interface CustomContainerProps {
  children: React.ReactNode;
  className?: string;
}

const CustomContainer: React.FC<CustomContainerProps> = ({
  children,
  className = "",
}) => (
  <div className={`w-full pl-[64px] pr-[64px] ${className}`}>{children}</div>
);

export default CustomContainer;
