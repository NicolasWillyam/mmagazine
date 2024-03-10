import Link from "next/link";
import React, { ReactNode } from "react";

const ArticleCard = () => {
  return (
    <Link href={"/"}>
      <div className="text-left">
        <div className="w-full h-[450px] bg-center bg-no-repeat bg-cover bg-[url('https://assets.vogue.com/photos/65ce703b3192a4382aaad694/1:1/w_640,c_limit/311520938_160951953236582_2908051916821870742_n.jpg')]">
          <div className="w-full h-full hover:bg-black/30 duration-500"></div>
        </div>
        <div className="mt-4">
          <p className="text-xs text-[#666666]">THỜI TRANG</p>
          <p className="text-xl font-semibold mt-2 mb-6">
            Beyoncé, Kylie Jenner và Lori Harvey đều mặc trang phục của nhà
            thiết kế người Ghana mới nổi này
          </p>
          <p className="text-xs text-[#666666]">HANNAH JACKSON</p>
        </div>
      </div>
    </Link>
  );
};

interface ArticleLayoutProps {
  children: ReactNode;
}

const ArticleLayout: React.FC<ArticleLayoutProps> = ({ children }) => {
  return <div className="grid grid-cols-4 gap-4 mt-6">{children}</div>;
};
export { ArticleCard, ArticleLayout };
