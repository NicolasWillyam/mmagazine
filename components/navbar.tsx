"use client";
import React, { useState, useEffect } from "react";
import { FiUser } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import Logo from "./ui/logo";

interface Props {
  isScrolled: boolean;
  imageWidth: number;
}

const Navbar: React.FC<Props> = (props) => {
  return (
    <div
      className={`w-full border-b transition-all duration-300 ${
        props.isScrolled ? "h-16" : "h-28"
      }`}
    >
      <div className="w-full px-6 mx-auto h-full grid grid-cols-3">
        <div></div>
        <div className="w-full flex items-center justify-center">
          <Logo width={props.imageWidth} height={props.imageWidth} />
        </div>
        <div className="flex items-center ml-auto gap-4">
          <Link href={"/sign-in"}>
            <div className="flex items-center gap-2">
              <FiUser size={20} />
              <div className="text-sm uppercase hover:underline hover:underline-offset-4">
                ĐĂNG NHẬP
              </div>
            </div>
          </Link>
          <IoSearchOutline size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
