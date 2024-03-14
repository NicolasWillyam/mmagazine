import Image from "next/image";
import React from "react";

function Logo() {
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
}

export default Logo;
