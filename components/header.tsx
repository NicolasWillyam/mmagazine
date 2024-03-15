"use client";
import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import Logo from "./logo";
import { IoMdClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { DesignerList } from "@/public/data";
import Link from "next/link";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuState, setMenuState] = useState(false);

  const ChangeMenuState = () => {
    if (menuState === false) {
      setMenuState(true);
    } else {
      setMenuState(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
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
      <div className="h-full px-8  flex items-start justify-between py-4 z-10">
        <div className="w-24 flex items-center gap-2">
          <FiMenu onClick={ChangeMenuState} size={28} />
          <p className="text font-semibold uppercase">MENU</p>
        </div>
        <Logo isScrolled={isScrolled} />
        <div className="w-24 flex items-center gap-2">
          <p className="text font-semibold uppercase">vietnam</p>
        </div>
      </div>

      <div
        style={{ display: menuState ? "block" : "none" }}
        className="bg-black/50 w-full h-screen absolute top-0 transition-all"
      >
        <div className="w-96 h-screen  bg-white text-black px-8 py-6">
          <div className="pb-8">
            <IoMdClose onClick={ChangeMenuState} size={32} />
          </div>
          <div className="">
            <label htmlFor="" className="w-full flex items-center border-b">
              <input
                type="text"
                placeholder="Search"
                className="w-full outline-none py-4 uppercase placeholder-black"
              />
              <IoSearch size={24} />
            </label>
            <div className="overflow-auto h-screen pt-4">
              <p className="text-xs uppercase">CATEGORIES</p>
              <ul className="grid grid-cols-1 gap-2.5 uppercase mt-4 text-lg">
                {DesignerList.map((item) => (
                  <Link key={item.id} href={"/"}>
                    <li className="hover:underline hover:underline-offset-2">
                      {item.name}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
