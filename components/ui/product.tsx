import Link from "next/link";
import React, { ReactNode } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const ProductCard = () => {
  return (
    <div className="w-56 ">
      <div className="w-full h-72 bg-cover bg-no-repeat duration-700 bg-center bg-[url('https://images.lvrcdn.com/Big/c/p/74I/G1N/026/34b698ad-ad7c-4ddd-a49e-c90028617a5620231201195948.JPG')] hover:bg-[url('https://images.lvrcdn.com/Big/c/p/76I/05L/009/ca4c038c-293f-41bf-8abb-e49c7916549520231201195955.JPG')]"></div>
      <div className="mt-4 text-left pr-4">
        <p className="font-bold text-base">SAINT LAURENT</p>
        <p className="text-sm font-light">Wide leg cotton pants</p>
        <div className="mt-2 flex items-center ">
          <p className="font-medium text-base">12.345.000</p>
          <p className="text-xs ml-1 ">vnđ</p>
        </div>
        <Link href={"/"}>
          <div className="flex items-center text-sm">
            Max Mara
            <GoArrowUpRight size={14} />
          </div>
        </Link>
      </div>
      <Link href={"#"}>
        <button className="w-full py-1.5 text-[10px] uppercase border-black border-[1px] mt-2">
          <div className="flex items-center justify-center gap-1">
            <span className="mt-0.5">Liên hệ người mua sắm cá nhân</span>
            <HiOutlineShoppingBag size={16} />
          </div>
        </button>
      </Link>
    </div>
  );
};

interface ProductLayoutProps {
  children: ReactNode;
}

const ProductLayout: React.FC<ProductLayoutProps> = ({ children }) => {
  return (
    <div className="flex gap-2.5 px-auto w-fit mx-auto mt-6">{children}</div>
  );
};

export { ProductCard, ProductLayout };
