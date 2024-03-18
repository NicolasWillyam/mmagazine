import React from "react";
import homebanner from "../public/homebanner.png";
import runwaybanner from "../public/runwaybanner.png";
import { url } from "inspector";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import category from "@/sanity/schemaTypes/category";
import BlogContent from "@/components/blog-content";
import { Header } from "@/components/header";
import {
  Article,
  ArticleLayout,
  ArticleSection,
  ArticleTitle,
} from "@/components/article";
import article1 from "../public/images/article1.webp";
import article2 from "../public/images/article2.webp";
import article3 from "../public/images/article3.webp";
import article4 from "../public/images/article4.webp";
import Footer from "@/components/footer";

const query = groq`*[_type == 'post'] {
  ...,
  // author->,
  categories[]->
} | order(author,_createdAt asc)`;

export default async function Page() {
  const posts = await client.fetch(query);

  return (
    <div>
      <Header style="light" />
      <div
        style={{
          backgroundImage: `url(${homebanner.src})`,
          width: "100%",
        }}
        className="bg-cover bg-no-repeat bg-center relative h-[300px] sm:h-[500px] xl:h-[800px]"
      >
        <div className="w-full text-center text-white sm:absolute sm:bottom-8 xl:-bottom-16">
          <div className="max-w-[540px] mx-auto text-center hidden sm:block">
            <p className="text-base  underline underline-offset-2">STYLE</p>
            <p className="sm:text-3xl xl:text-[45px] font-medium my-2.5">
              QUIET LUXURY: Định nghĩa, sự bắt đầu và sức ảnh hưởng tới phong
              cách phái đẹp
            </p>
            <p className="font-regular">13.3.2024 by M Fashion Team</p>
          </div>
          <div className="max-w-[1920px] px-8 mt-16 hidden xl:block">
            <div className="px-8 py-6 bg-white grid grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <div
                  style={{
                    width: "140px",
                    height: "110px",
                  }}
                  className="min-w-[140px] bg-cover bg-center bg-[url('https://www.lofficielvietnam.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F56778%2F1710350998-imageonline-co-noisedimage.png%3Fauto%3Dformat%252Ccompress%26cs%3Dsrgb&w=3840&q=75')]"
                ></div>
                <div className="grid grid-cols-1 gap-2.5 text-black text-left w-full">
                  <p className="text-sm underline underline-offset-2">RUNWAY</p>
                  <p className="text-lg leading-snug">
                    Hè này, hãy học cách phối tất cùng giày đế bệt để trở thành
                    tín đồ thời thượng nhất
                  </p>
                  <p className="text-sm font-normal">03.10.2024 by Celia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  style={{
                    width: "140px",
                    height: "110px",
                  }}
                  className="min-w-[140px] bg-cover bg-center bg-[url('https://www.lofficielvietnam.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F56778%2F1710383299-1710357987-bright-davika-mark-tuan-calvin-klein-jeans-ss-2024-2.jpg%3Fauto%3Dformat%252Ccompress%26cs%3Dsrgb&w=1920&q=75')]"
                ></div>
                <div className="grid grid-cols-1 gap-2.5 text-black text-left w-full">
                  <p className="text-sm underline underline-offset-2">STYLE</p>
                  <p className="text-lg leading-snug">
                    Calvin Klein Jeans kết hợp cùng Bright, Davika và Mark Tuan
                    trong chiến dịch quảng bá mới
                  </p>
                  <p className="text-sm font-normal">03.14.2024 by Margot</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div
                  style={{
                    width: "140px",
                    height: "110px",
                  }}
                  className="min-w-[140px] bg-cover bg-center bg-[url('https://www.lofficielvietnam.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F56778%2F1710392428-cillian-murphy-in-atelier-versac.jpeg%3Fauto%3Dformat%252Ccompress%26cs%3Dsrgb&w=3840&q=75')]"
                ></div>
                <div className="grid grid-cols-1 gap-2.5 text-black text-left w-full">
                  <p className="text-sm underline underline-offset-2">STYLE</p>
                  <p className="text-lg leading-snug">
                    Gương mặt mới của Versace Icons gọi tên nam diễn viên chính
                    {'"'}Oppenheimer{'"'} - Cillian Murphy
                  </p>
                  <p className="text-sm font-normal">03.14.2024 by Anthea</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-6">
        <div className=" mx-auto sm:hidden">
          <p className="underline underline-offset-2">STYLE</p>
          <p className="text-lg my-2.5">
            QUIET LUXURY: Định nghĩa, sự bắt đầu và sức ảnh hưởng tới phong cách
            phái đẹp
          </p>
          <p className="text-sm">13.3.2024 by M Fashion Team</p>
        </div>
        <div className="xl:hidden mt-6 sm:mt-0 xl:mt-6">
          <div className="bg-white grid sm:grid-cols-3 gap-6 sm:gap-4">
            <div className="flex sm:block items-center gap-4">
              <div className="h-[100px] w-[140px] sm:w-full sm:h-[170px] bg-cover bg-center bg-[url('https://www.lofficielvietnam.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F56778%2F1710350998-imageonline-co-noisedimage.png%3Fauto%3Dformat%252Ccompress%26cs%3Dsrgb&w=3840&q=75')]"></div>
              <div className="grid grid-cols-1 gap-2.5 text-black text-left w-full sm:p-4">
                <p className="sm:block hidden text-sm sm:text-base underline underline-offset-2">
                  RUNWAY
                </p>
                <p className="text-base sm:text-lg">
                  Hè này, hãy học cách phối tất cùng giày đế bệt để trở thành
                  tín đồ thời thượng nhất
                </p>
                <p className="text-xs sm:text-sm font-normal">
                  03.10.2024 by Celia
                </p>
              </div>
            </div>

            <div className="flex sm:block  items-center gap-4">
              <div className="h-[100px] w-[140px] sm:w-full sm:h-[170px] bg-cover bg-center bg-[url('https://www.lofficielvietnam.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F56778%2F1710383299-1710357987-bright-davika-mark-tuan-calvin-klein-jeans-ss-2024-2.jpg%3Fauto%3Dformat%252Ccompress%26cs%3Dsrgb&w=1920&q=75')]"></div>
              <div className="grid grid-cols-1 gap-2.5 text-black text-left w-full sm:p-4">
                <p className="sm:block hidden text-sm sm:text-base underline underline-offset-2">
                  RUNWAY
                </p>
                <p className="text-base sm:text-lg">
                  Hè này, hãy học cách phối tất cùng giày đế bệt để trở thành
                  tín đồ thời thượng nhất
                </p>
                <p className="text-xs sm:text-sm font-normal">
                  03.10.2024 by Celia
                </p>
              </div>
            </div>

            <div className="flex sm:block  items-center gap-4">
              <div className="h-[100px] w-[140px] sm:w-full sm:h-[170px] bg-cover bg-center bg-[url('https://www.lofficielvietnam.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F56778%2F1710392428-cillian-murphy-in-atelier-versac.jpeg%3Fauto%3Dformat%252Ccompress%26cs%3Dsrgb&w=3840&q=75')]"></div>
              <div className="grid grid-cols-1 gap-2.5 text-black text-left w-full sm:p-4">
                <p className="sm:block hidden text-sm sm:text-base underline underline-offset-2">
                  RUNWAY
                </p>
                <p className="text-base sm:text-lg">
                  Hè này, hãy học cách phối tất cùng giày đế bệt để trở thành
                  tín đồ thời thượng nhất
                </p>
                <p className="text-xs sm:text-sm font-normal">
                  03.10.2024 by Celia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto text-black sm:mt-32">
        <ArticleSection>
          <ArticleTitle>OSCARS 2024</ArticleTitle>
          <ArticleLayout>
            <Article
              imgLink={article1.src}
              category="style"
              name="Lisa, Tóc Tiên, cùng dàn sao hội tụ tại sự kiện khai trương Bulgari Studio"
              time="03.15.2024"
              author="Cara"
            />
            <Article
              imgLink={article2.src}
              category="pop, music & films"
              name="Cillian Murphy - Từ con chiên ngoan đạo đến chủ nhân tượng Oscar ở tuổi 47"
              time="03.12.2024"
              author="Đức Noise"
            />
            <Article
              imgLink={article3.src}
              category="style"
              name="Khám phá tủ đồ lập dị và độc đáo của Emma Stone trong Poor Things"
              time="03.12.2024"
              author="Ngọc Linh"
            />
          </ArticleLayout>
        </ArticleSection>

        <ArticleSection>
          <ArticleTitle>Style</ArticleTitle>
          <ArticleLayout>
            <Article
              imgLink={article1.src}
              category="style"
              name="Lisa, Tóc Tiên, cùng dàn sao hội tụ tại sự kiện khai trương Bulgari Studio"
              time="03.15.2024"
              author="Cara"
            />
            <Article
              imgLink={article2.src}
              category="pop, music & films"
              name="Cillian Murphy - Từ con chiên ngoan đạo đến chủ nhân tượng Oscar ở tuổi 47"
              time="03.12.2024"
              author="Đức Noise"
            />
            <Article
              imgLink={article3.src}
              category="style"
              name="Khám phá tủ đồ lập dị và độc đáo của Emma Stone trong Poor Things"
              time="03.12.2024"
              author="Ngọc Linh"
            />
          </ArticleLayout>
        </ArticleSection>

        <div className="py-16 max-w-[1200px] sm:px-20 mx-auto 2xl:max-w-[1440px] 2xl:px-0">
          <p
            style={{ letterSpacing: "8%" }}
            className="text-center text-2xl mb-16 uppercase"
          >
            BUSINESS OF FASHION
          </p>
          <div className="w-fit grid sm:grid-cols-2 gap-4 sm:gap-16 mx-auto">
            <div>
              <div
                style={{
                  backgroundImage: `url(${article2.src})`,
                }}
                className=" bg-cover bg-center bg-no-repeat w-full 2xl:h-[700px] sm:h-[360px] xl:h-[550px] h-[300px]"
              ></div>
              <div className="grid grid-cols-1 gap-2.5 text-black text-left w-full p-4 sm:mt-4 sm:px-0">
                <p className="text-lg underline underline-offset-2 my-1">
                  BUSINESS
                </p>
                <p className="text-[25px] leading-snug">
                  Nữ kiến trúc sư đầu tiên của Việt Nam giành giải thưởng Moira
                  Gemmill
                </p>
                <p className="text-sm font-normal">03.10.2024 by Celia</p>
              </div>
            </div>

            <div>
              <div
                style={{
                  backgroundImage: `url(${article4.src})`,
                }}
                className=" bg-cover bg-center bg-no-repeat w-full 2xl:h-[700px] sm:h-[360px] xl:h-[550px] h-[300px]"
              ></div>
              <div className="grid grid-cols-1 gap-2.5 text-black text-left w-full p-4 sm:mt-4 sm:px-0">
                <p className="text-lg underline underline-offset-2 my-1">
                  BUSINESS
                </p>
                <p className="text-[25px] leading-snug">
                  Nữ kiến trúc sư đầu tiên của Việt Nam giành giải thưởng Moira
                  Gemmill
                </p>
                <p className="text-sm font-normal">03.10.2024 by Celia</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="my-16">
        <p className="text-center text-2xl mb-4">RUNWAY</p>
        <div
          style={{
            backgroundImage: `url(${runwaybanner.src})`,
            width: "100%",
            height: "480px",
          }}
          className="bg-cover bg-no-repeat bg-center px-4 sm:px-12 py-8"
        >
          <div className="sm:max-w-[1920px] h-full mx-auto">
            <div className="flex flex-col justify-end h-full sm:w-1/2 ">
              <div className="grid grid-cols-1 mt-4 gap-2.5 text-white text-left w-full">
                <p className="text-lg underline underline-offset-2 my-1">
                  BUSINESS
                </p>
                <p className="sm:text-3xl xl:text-5xl text-xl leading-snug">
                  Nữ kiến trúc sư đầu tiên của Việt Nam giành giải thưởng Moira
                  Gemmill
                </p>
                <p className="text-sm font-normal">03.10.2024 by Celia</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto text-black">
        <ArticleSection>
          <ArticleTitle>OSCARS 2024</ArticleTitle>
          <ArticleLayout>
            <Article
              imgLink={article1.src}
              category="style"
              name="Lisa, Tóc Tiên, cùng dàn sao hội tụ tại sự kiện khai trương Bulgari Studio"
              time="03.15.2024"
              author="Cara"
            />
            <Article
              imgLink={article2.src}
              category="pop, music & films"
              name="Cillian Murphy - Từ con chiên ngoan đạo đến chủ nhân tượng Oscar ở tuổi 47"
              time="03.12.2024"
              author="Đức Noise"
            />
            <Article
              imgLink={article3.src}
              category="style"
              name="Khám phá tủ đồ lập dị và độc đáo của Emma Stone trong Poor Things"
              time="03.12.2024"
              author="Ngọc Linh"
            />
          </ArticleLayout>
        </ArticleSection>

        <ArticleSection>
          <ArticleTitle>Style</ArticleTitle>
          <ArticleLayout>
            <Article
              imgLink={article1.src}
              category="style"
              name="Lisa, Tóc Tiên, cùng dàn sao hội tụ tại sự kiện khai trương Bulgari Studio"
              time="03.15.2024"
              author="Cara"
            />
            <Article
              imgLink={article2.src}
              category="pop, music & films"
              name="Cillian Murphy - Từ con chiên ngoan đạo đến chủ nhân tượng Oscar ở tuổi 47"
              time="03.12.2024"
              author="Đức Noise"
            />
            <Article
              imgLink={article3.src}
              category="style"
              name="Khám phá tủ đồ lập dị và độc đáo của Emma Stone trong Poor Things"
              time="03.12.2024"
              author="Ngọc Linh"
            />
          </ArticleLayout>
        </ArticleSection>
      </div>
      <Footer />
    </div>
  );
}
