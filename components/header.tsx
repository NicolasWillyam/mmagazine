import React from "react";
import { FiMenu } from "react-icons/fi";
import Logo from "./logo";

function Header() {
  return (
    <div className="w-full fixed top-0 h-36 z-10">
      <div className="max-w-[1440px] text-white h-36 px-8 flex items-start justify-between py-4">
        <div className="w-20 flex items-center gap-2">
          <FiMenu size={24} />
          <p className="text font-semibold uppercase">MENU</p>
        </div>
        <Logo />
        <div className="w-20 flex items-center gap-2">
          <p className="text font-semibold uppercase">vietnam</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
