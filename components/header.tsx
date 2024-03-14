"use client";
import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import Logo from "./logo";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [imageWidth, setImageWidth] = useState(70);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 100) {
        setIsScrolled(true);
        setImageWidth(35); // Change width to 50 when scrolling down
      } else {
        setIsScrolled(false);
        setImageWidth(70); // Change width to 70 when scrolling up
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      className={`w-full fixed top-0 0 z-10 ${
        isScrolled
          ? "h-[58px] bg-white text-black shadow-md"
          : "h-36 text-white"
      }`}
    >
      <div className="h-full px-8 flex items-start justify-between py-4">
        <div className="w-20 flex items-center gap-2">
          <FiMenu size={24} />
          <p className="text font-semibold uppercase">MENU</p>
        </div>
        <Logo isScrolled={isScrolled} />
        <div className="w-20 flex items-center gap-2">
          <p className="text font-semibold uppercase">vietnam</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
