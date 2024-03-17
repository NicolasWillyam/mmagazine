import React from "react";
import { Logo } from "./logo";
import Link from "next/link";
import Image from "next/image";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "../styles/fonts.css";

function Footer() {
  return (
    <div className="w-full bg-black text-white">
      <div className="max-w-[1440px] mx-auto py-8 text-center">
        <Link href={"/"}>
          <p
            style={{ fontFamily: "UVNMotMoi" }}
            className="text-[160px] -mt-8 leading-none"
          >
            M
          </p>
          <p className="-mt-3.5 text-[5px] mr-16 ml-1">MYSENSE</p>
        </Link>
        <div className="w-fit mx-auto text-center flex items-center my-8 gap-2">
          <Link href={"/"}>
            <AiFillFacebook size={24} />
          </Link>
          <Link href={"/"}>
            <AiFillInstagram size={24} />
          </Link>
          <Link href={"/"}>
            <FaPinterestP size={24} />
          </Link>
          <Link href={"/"}>
            <FaLinkedin size={24} />
          </Link>
        </div>
        <div>
          <ul className="w-fit mx-auto justify-center flex gap-y-4 items-center gap-4 sm:gap-6 text-xs uppercase">
            <Link href={"/"}>
              <li className="sm:border-b-[2px] border-b-[1px] border-white py-2">
                ABOUT
              </li>
            </Link>
            <Link href={"/"}>
              <li className="sm:border-b-[2px] border-b-[1px] border-white py-2">
                CONTACT
              </li>
            </Link>
            <Link href={"/"}>
              <li className="sm:border-b-[2px] border-b-[1px] border-white py-2">
                PRIVACY POLICY
              </li>
            </Link>
            <Link href={"/"}>
              <li className="sm:border-b-[2px] border-b-[1px] border-white py-2">
                COOKIE POLICY
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
