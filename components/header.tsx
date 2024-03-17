"use client";
import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Logo, LogoBlack } from "./logo";
import { IoMdClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { DesignerList, MenuList } from "@/public/data";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Style {
  style: string;
}

const Header: React.FC<Style> = (props) => {
  const pathname = usePathname();
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

      if (scrollPosition > 10) {
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

  if (props.style === "light") {
    return (
      <div
        className={`w-full fixed top-0 0 z-10 ${
          isScrolled
            ? "sm:h-[58px] h-[55px] bg-white text-black shadow-md"
            : "h-36 text-white"
        }`}
      >
        <div className="h-full sm:px-8 px-4 flex items-start justify-between py-4 z-10">
          <div className="w-24 flex items-center gap-2 -mt-0.5">
            <FiMenu onClick={ChangeMenuState} size={28} />
            <p className="text-sm sm:text-base font-semibold uppercase">MENU</p>
          </div>
          <Logo isScrolled={isScrolled} />
          <div className="w-24 flex items-center gap-2">
            <p className="text-sm sm:text-base font-semibold uppercase ml-auto mt-0.5">
              vietnam
            </p>
          </div>
        </div>

        <div
          style={{ display: menuState ? "block" : "none" }}
          className="bg-black/50 w-full h-screen absolute top-0 transition-all"
        >
          <div className="w-80 h-screen  bg-white text-black px-8 py-6">
            <div className="pb-8">
              <IoMdClose onClick={ChangeMenuState} size={32} />
            </div>
            <div className="">
              <label htmlFor="" className="w-full flex items-center">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full text-lg outline-none py-4 pr-2 uppercase placeholder-black"
                />
                <IoSearch size={24} />
              </label>
              <div className="overflow-auto h-screen pt-4">
                <p className="text-xs uppercase font-light">CATEGORIES</p>
                <ul className="grid grid-cols-1 gap-2.5 uppercase mt-4 text-lg">
                  {MenuList.map((item) => (
                    <Link key={item.id} href={`/${item.id}?=`}>
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
  } else {
    return (
      <div
        className={`w-full fixed top-0 0 bg-white text-black z-10  ${
          isScrolled ? "h-[55px] sm:h-[58px] shadow-md" : "h-36 "
        }`}
      >
        <div className="h-full sm:px-8 px-4  flex items-start justify-between py-4 z-10">
          <div className="w-24 flex items-center gap-2 -mt-0.5">
            <FiMenu onClick={ChangeMenuState} size={28} />
            <p className="text-sm sm:text-base font-semibold uppercase">MENU</p>
          </div>
          <LogoBlack isScrolled={isScrolled} />
          <div className="w-24 flex items-center gap-2">
            <p className="text-sm sm:text-base ml-auto font-semibold uppercase mt-1 sm:mt-0 mt-0.5">
              vietnam
            </p>
          </div>
        </div>

        <div
          style={{ display: menuState ? "block" : "none" }}
          className="bg-black/50 w-full h-screen absolute top-0 transition-all"
        >
          <div className="w-80 h-screen  bg-white text-black px-8 py-6">
            <div className="pb-8">
              <IoMdClose onClick={ChangeMenuState} size={32} />
            </div>
            <div className="">
              <label htmlFor="" className="w-full flex items-center">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full text-lg outline-none py-4 pr-2 uppercase placeholder-black"
                />
                <IoSearch size={24} />
              </label>
              <div className="overflow-auto h-screen pt-4">
                <p className="text-xs uppercase font-light">CATEGORIES</p>
                <ul className="grid grid-cols-1 gap-2.5 uppercase mt-4 text-lg">
                  {MenuList.map((item) => (
                    <Link key={item.id} href={`/${item.id}?=`}>
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
};

export { Header };
