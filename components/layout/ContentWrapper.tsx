import React from "react";

interface ContentWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function ContentWrapper({
  children,
  className = "",
}: ContentWrapperProps) {
  return (
    <div className={`mt-[100px] md:mt-[120px] pb-16 min-h-screen ${className}`}>
      {children}
    </div>
  );
}
