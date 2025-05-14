import type React from "react";

interface ContentWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function ContentWrapper({
  children,
  className = "",
}: ContentWrapperProps) {
  return (
    <div className={`pt-[100px] md:pt-[120px] pb-16 min-h-screen ${className}`}>
      {children}
    </div>
  );
}
