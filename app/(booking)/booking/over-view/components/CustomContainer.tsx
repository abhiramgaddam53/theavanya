import React from "react";

interface CustomContainerProps {
  children: React.ReactNode;
  className?: string;
}

const CustomContainer: React.FC<CustomContainerProps> = ({
  children,
  className = "",
}) => (
  <div className={`w-full pl-[78px] pr-[65px] ${className}`}>{children}</div>
);

export default CustomContainer;
