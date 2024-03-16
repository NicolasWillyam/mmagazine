import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  isScrolled: boolean;
}
const Logo: React.FC<Props> = (props) => {
  if (props.isScrolled === true)
    return (
      <Link href={"/"}>
        <Image
          className="text-white -mt-1"
          src={"/logo.png"}
          alt="logo-image"
          width={24}
          height={24}
        />
      </Link>
    );
  else
    return (
      <Link href={"/"}>
        <Image
          className="text-white"
          src={"logo.svg"}
          alt="logo-image"
          width={100}
          height={100}
        />
      </Link>
    );
};

const LogoBlack: React.FC<Props> = (props) => {
  if (props.isScrolled === true)
    return (
      <Link href={"/"}>
        <Image
          className="text-white -mt-1"
          src={"/logo.png"}
          alt="logo-image"
          width={24}
          height={24}
        />
      </Link>
    );
  else
    return (
      <Link href={"/"}>
        <Image
          className="text-white"
          src={"/logo.png"}
          alt="logo-image"
          width={100}
          height={100}
        />
      </Link>
    );
};

export { Logo, LogoBlack };
