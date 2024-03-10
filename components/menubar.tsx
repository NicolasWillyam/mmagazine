import Link from "next/link";
import React from "react";

interface Menu {
  id: number;
  name: string;
  link: string;
  slug: string;
}

const MenuList: Menu[] = [
  { id: 1, name: "thời trang", link: "/", slug: "thoi-trang" },
  { id: 1, name: "làm đẹp", link: "/", slug: "lam-dep" },
  { id: 1, name: "văn hóa", link: "/", slug: "thoi-trang" },
  { id: 1, name: "Living", link: "/", slug: "thoi-trang" },
  { id: 1, name: "ruwnay", link: "/", slug: "thoi-trang" },
  { id: 1, name: "lifestyle", link: "/", slug: "thoi-trang" },
  { id: 1, name: "shopping", link: "/", slug: "thoi-trang" },
];

function MenuBar() {
  return (
    <div className="w-full h-10 border-b flex items-center justify-center gap-10 uppercase text-sm ">
      {MenuList.map((item) => (
        <button
          key={item.id}
          className="h-full uppercase border-y-[3px] border-white hover:border-b-[3px] hover:border-b-black duration-300 ease-in-out"
        >
          <Link href={item.link}>{item.name}</Link>
        </button>
      ))}
    </div>
  );
}

export default MenuBar;
