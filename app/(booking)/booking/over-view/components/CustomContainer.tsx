import React from "react";

interface CustomContainerProps {
  children: React.ReactNode;
  className?: string;
  noRightPadding?: boolean;
}

const CustomContainer: React.FC<CustomContainerProps> = ({
  children,
  className = "",
  noRightPadding = false,
}) => (
  <div
    className={`w-full px-4 md:pl-[91px] ${
      noRightPadding ? "md:pr-0" : "md:pr-[91px]"
    } ${className}`}
  >
    {children}
  </div>
);

export default CustomContainer;
