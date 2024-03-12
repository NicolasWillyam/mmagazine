import Link from "next/link";
import React from "react";

interface Menu {
  id: number;
  name: string;
  link: string;
  slug: string;
}

interface Props {
  isScrolled: boolean;
}

const MenuList: Menu[] = [
  { id: 1, name: "thời trang", link: "/", slug: "thoi-trang" },
  { id: 1, name: "làm đẹp", link: "/", slug: "lam-dep" },
  { id: 1, name: "văn hóa", link: "/", slug: "van-hoa" },
  { id: 1, name: "Living", link: "/", slug: "living" },
  { id: 1, name: "ruwnay", link: "/", slug: "runway" },
  { id: 1, name: "lifestyle", link: "/", slug: "lifestyle" },
  { id: 1, name: "shopping", link: "/", slug: "shopping" },
];

{
  /* <div
      className={`w-full text-center bg-black text-white text-xs flex items-center justify-center transition-all duration-300 ${
        props.isScrolled ? "h-0" : "h-6"
      }`} */
}

const MenuBar: React.FC<Props> = (props) => {
  return (
    <div
      className={`w-full h-10 border-b flex items-center justify-center gap-10 uppercase text-sm  ${
        props.isScrolled ? "hidden" : "h-10"
      }`}
    >
      {MenuList.map((item) => (
        <button
          key={item.id}
          className="h-full uppercase border-y-[3px] border-white hover:border-b-[3px] hover:border-b-black duration-300 ease-in-out"
        >
          <Link href={`/${item.slug}`}>{item.name}</Link>
        </button>
      ))}
    </div>
  );
};

export { MenuBar, MenuList };
