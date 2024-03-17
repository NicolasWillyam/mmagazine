import Image from "next/image";
import Link from "next/link";
import React from "react";
import "../styles/fonts.css";

interface Props {
  isScrolled: boolean;
}
const Logo: React.FC<Props> = (props) => {
  return (
    <Link href={"/"}>
      <p
        className={`${
          props.isScrolled
            ? "text-5xl -mt-3 "
            : "text-5xl -mt-3 sm:text-[200px] sm:-mt-8 sm:leading-none"
        }`}
        style={{ fontFamily: "UVNMotMoi" }}
      >
        M
      </p>
      <p
        className={`${
          props.isScrolled
            ? "-mt-1 text-[1.5px] ml-[1px]"
            : "-mt-1 text-[1.5px] ml-[1px] sm:-mt-5 sm:text-[6.5px] sm:ml-0.5"
        }`}
      >
        MYSENSE
      </p>
    </Link>
  );
};

const LogoBlack: React.FC<Props> = (props) => {
  return (
    <Link href={"/"}>
      <p
        className={`transition-all duration-200 ${
          props.isScrolled
            ? "text-5xl -mt-3 "
            : "text-[200px] -mt-8 leading-none"
        }`}
        style={{ fontFamily: "UVNMotMoi" }}
      >
        M
      </p>
      <p>MYSENSE</p>
    </Link>
  );
};

export { Logo, LogoBlack };
