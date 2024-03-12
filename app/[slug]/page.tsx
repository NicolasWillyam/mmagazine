import { PageHeaderTitle } from "@/components/header-title";
import { ArticleCard, ArticleLayout } from "@/components/ui/article";
import { Button } from "@/components/ui/button";
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

function Page() {
  return (
    <div className="pb-20">
      <div className=" bg-white">
        <PageHeaderTitle>Thời Trang</PageHeaderTitle>
        <div
          className={`w-full h-10 border-y flex items-center justify-center gap-10 uppercase text-sm  
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
      </div>
      <div className="w-full max-w-[1440px] px-4  pt-4 pb-28 text-center">
        <p className="text-xl font-semibold uppercase">tin tức mới nhất</p>
        <ArticleLayout>
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </ArticleLayout>
        <Button className="mt-16">XEM THÊM</Button>
      </div>
    </div>
  );
}

export default Page;
