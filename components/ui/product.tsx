import Link from "next/link";
import React, { ReactNode } from "react";
import { GoArrowUpRight } from "react-icons/go";

const ProductCard = () => {
  return (
    <div className="w-56 ">
      <div className="w-full h-72 bg-cover bg-no-repeat duration-700 bg-center bg-[url('https://images.lvrcdn.com/Big/c/p/74I/G1N/026/34b698ad-ad7c-4ddd-a49e-c90028617a5620231201195948.JPG')] hover:bg-[url('https://images.lvrcdn.com/Big/c/p/76I/05L/009/ca4c038c-293f-41bf-8abb-e49c7916549520231201195955.JPG')]"></div>
      <div className="mt-4 text-left pr-4">
        <p className="font-bold text-lg">SAINT LAURENT</p>
        <p className="text-sm">Túi SAINT LAURENT da trơn size 5 và 7</p>
        <div className="mt-2 flex items-end ">
          <p className="font-bold text-lg">12.345.000</p>
          <p className="text-xs ml-1 mb-1">vnđ</p>
        </div>
        <Link href={"/"}>
          <div className="flex items-end text-sm underline underline-offset-4 font-medium ">
            Net-a-poter
            <GoArrowUpRight size={16} />
          </div>
        </Link>
      </div>
      <Link href={"#"}>
        <button className="w-full py-1.5 text-xs uppercase border-black border-[1px] mt-6">
          Liên hệ người mua sắm cá nhân
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
