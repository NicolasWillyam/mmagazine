import Link from "next/link";
import React from "react";

interface Menu {
  name: string;
  link: string;
  slug: string;
}

const MenuList: Menu[] = [
  { name: "thời trang", link: "/", slug: "thoi-trang" },
  { name: "làm đẹp", link: "/", slug: "lam-dep" },
  { name: "văn hóa", link: "/", slug: "thoi-trang" },
  { name: "Living", link: "/", slug: "thoi-trang" },
  { name: "ruwnay", link: "/", slug: "thoi-trang" },
  { name: "lifestyle", link: "/", slug: "thoi-trang" },
  { name: "shopping", link: "/", slug: "thoi-trang" },
];

function MenuBar() {
  return (
    <div className="w-full h-10 border-b flex items-center justify-center gap-10 uppercase text-sm ">
      {MenuList.map((item) => (
        <button className="h-full uppercase border-y-[3px] border-white hover:border-b-[3px] hover:border-b-black duration-300 ease-in-out">
          <Link href={item.link}>{item.name}</Link>
        </button>
      ))}
    </div>
  );
}

export default MenuBar;
