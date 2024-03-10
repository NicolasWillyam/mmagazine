import { ArticleCard, ArticleLayout } from "@/components/ui/article";
import { ProductCard, ProductLayout } from "@/components/ui/product";
import React from "react";

function Page() {
  return (
    <div className="w-full">
      <div className=""></div>
      <div className="w-full h-[80vh] bg-cover bg-center bg-no-repeat bg-[url('https://assets.vogue.com/photos/65e8fa5676a7153ca83e0520/16:9/w_1920%2Cc_limit/PARIS-STREETSTYLE-PHILOH-DAY8-%25201.jpg')]"></div>
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="pt-8 pb-24 text-center">
          <div className="grid grid-cols-1 gap-4">
            <p className="text-xs uppercase ">M MAGAZINE</p>
            <p className="font-bold text-xl">
              Kết nối với M - Bắt kịp nhịp đập thời trang, làm đẹp và phong cách
              sống
            </p>
            <p className="text-xs uppercase">THỜI TRANG</p>
            <p className="text-sm font-medium">
              Khám phá thế giới thời trang đầy màu sắc
            </p>
          </div>
        </div>

        <div className="w-full pt-4 pb-28 text-center border-t">
          <p className="text-xl font-semibold uppercase">tin tức mới nhất</p>
          <ArticleLayout>
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </ArticleLayout>
        </div>

        <div className="w-full pt-4 pb-28 text-center border-t">
          <p className="text-xl font-semibold uppercase">
            Lựa chọn hoàn hảo cho tháng 3
          </p>

          <ProductLayout>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </ProductLayout>
        </div>

        <div className="w-full pt-4 pb-28 text-center border-t">
          <p className="text-xl font-semibold uppercase">tin tức mới nhất</p>
          <ArticleLayout>
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </ArticleLayout>
        </div>

        <div className="w-full pt-4 pb-28 text-center border-t">
          <p className="text-xl font-semibold uppercase">
            Lựa chọn hoàn hảo cho tháng 3
          </p>

          <ProductLayout>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </ProductLayout>
        </div>

        <div className="w-full pt-4 pb-28 text-center border-t">
          <p className="text-xl font-semibold uppercase">tin tức mới nhất</p>
          <ArticleLayout>
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </ArticleLayout>
        </div>

        <div className="w-full pt-4 pb-28 text-center border-t">
          <p className="text-xl font-semibold uppercase">
            Lựa chọn hoàn hảo cho tháng 3
          </p>

          <ProductLayout>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </ProductLayout>
        </div>

        <div className="w-full pt-4 pb-28 text-center border-t">
          <p className="text-xl font-semibold uppercase">tin tức mới nhất</p>
          <ArticleLayout>
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
          </ArticleLayout>
        </div>

        <div className="w-full pt-4 pb-28 text-center border-t">
          <p className="text-xl font-semibold uppercase">
            Lựa chọn hoàn hảo cho tháng 3
          </p>

          <ProductLayout>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </ProductLayout>
        </div>

        <div className="w-full pt-4 pb-28 text-center border-t">
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

          <button className="border-[1.5px] border-black mt-14 hover:bg-black hover:text-white duration-500">
            <p className="uppercase text-sm px-28 py-3">XEM THÊM</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
