import React from "react";
import { Logo } from "./logo";
import Link from "next/link";
import Image from "next/image";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full bg-black text-white">
      <div className="max-w-[1440px] mx-auto py-8 text-center">
        <Link href={"/"}>
          <Image
            className="text-white mx-auto"
            src={"/logo.svg"}
            alt="logo-image"
            width={100}
            height={100}
          />
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
          <ul className="w-fit mx-auto justify-center sm:flex flex-col items-center gap-6 text-xs uppercase">
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
