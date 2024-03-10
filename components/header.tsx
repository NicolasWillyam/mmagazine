"use client";
import React, { useState, useEffect } from "react";
import HeaderTitle from "./header-title";
import Navbar from "./navbar";
import MenuBar from "./menubar";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [imageWidth, setImageWidth] = useState(70);
  let scolling = 0;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      console.log(scrollPosition, scolling);

      if (scrollPosition > scolling) {
        if (scrollPosition > 200) {
          setIsScrolled(true);
          setImageWidth(35); // Change width to 50 when scrolling down
        }
      } else {
        setIsScrolled(false);
        setImageWidth(70); // Change width to 70 when scrolling up
      }
      scolling = scrollPosition;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="w-full fixed top-0 bg-white shadow-md">
      <HeaderTitle isScrolled={isScrolled} />
      <Navbar isScrolled={isScrolled} imageWidth={imageWidth} />
      <MenuBar isScrolled={isScrolled} />
    </div>
  );
}

export default Header;
