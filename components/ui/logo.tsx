import Image from "next/image";
import Link from "next/link";
import React from "react";

interface LogoProps {
  width: number;
  height: number;
}

const Logo: React.FC<LogoProps> = (props) => {
  return (
    <Link href={"/"} className="w-fit flex justify-center">
      <Image
        src="/logo.svg"
        alt="logo"
        width={props.width}
        height={props.height}
        className="transition-all duration-300"
      />
    </Link>
  );
};

export default Logo;
