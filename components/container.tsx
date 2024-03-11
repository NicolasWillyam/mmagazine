"use client";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";
import Header from "./header";
import Footer from "./footer";

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  const pathname = usePathname();
  if (pathname.startsWith("/sign-in") || pathname.startsWith("/sign-up"))
    return <div>{children}</div>;
  else
    return (
      <div>
        <Header />
        <div className="mt-44">{children}</div>
        <Footer />
      </div>
    );
};

export { Container };
