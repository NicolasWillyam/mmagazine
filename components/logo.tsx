import Image from "next/image";
import React from "react";

interface Props {
  isScrolled: boolean;
}
const Logo: React.FC<Props> = (props) => {
  if (props.isScrolled === true)
    return (
      <div>
        <Image
          className="text-white -mt-2"
          src={"/logo.png"}
          alt="logo-image"
          width={32}
          height={32}
        />
      </div>
    );
  else
    return (
      <div>
        <Image
          className="text-white"
          src={"logo.svg"}
          alt="logo-image"
          width={100}
          height={100}
        />
      </div>
    );
};

export default Logo;
