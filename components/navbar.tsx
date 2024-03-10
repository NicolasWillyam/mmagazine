import Image from "next/image";
import React from "react";
import { FiUser } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
function Navbar() {
  return (
    <div className="w-full border-b">
      <div className="w-full max-w-[1440px] px-4 mx-auto h-28 grid grid-cols-3">
        <div></div>
        <div className="w-full flex justify-center">
          <Image src="/logo.svg" alt="logo" width={70} height={70} />
        </div>
        <div className="flex items-center ml-auto gap-4">
          <div className="flex items-center gap-2">
            <FiUser size={20} />
            <div className="text-sm uppercase font-medium">ĐĂNG NHẬP</div>
          </div>
          <IoSearchOutline size={20} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
