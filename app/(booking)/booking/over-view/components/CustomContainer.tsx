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
    className={`w-full px-2 md:px-28 ${noRightPadding ? "pr-0 md:pr-0" : ""
      } ${className}`}
  >
    {children}
  </div>
);

export default CustomContainer;
