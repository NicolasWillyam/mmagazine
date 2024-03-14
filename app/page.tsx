import Header from "@/components/header";
import React from "react";
import homebanner from "../public/homebanner.png";
import runwaybanner from "../public/runwaybanner.png";
import { url } from "inspector";

function page() {
  return (
    <div>
      <Header />
      <div
        style={{
          backgroundImage: `url(${homebanner.src})`,
          width: "100%",
          height: "800px",
        }}
        className="bg-cover bg-no-repeat bg-center relative"
      >
        <div className="w-full text-center absolute text-white -bottom-24">
          <div className="w-1/3 px-4  mx-auto text-center">
            <p className="text-sm font-medium underline underline-offset-2">
              STYLE
            </p>
            <p
              style={{ lineHeight: "56px" }}
              className="text-4xl font-semibold my-2.5"
            >
              QUIET LUXURY: Định nghĩa, sự bắt đầu và sức ảnh hưởng tới phong
              cách phái đẹp
            </p>
            <p>13.3.2024 by M Fashion Team</p>
          </div>
          <div className="w-full px-10">
            <div className="px-8 py-6 bg-white mt-8 grid grid-cols-3 gap-16">
              <div className="flex items-start gap-4">
                <div
                  style={{
                    width: "140px",
                    height: "110px",
                  }}
                  className="min-w-[140px] bg-cover bg-center bg-[url('https://www.lofficielvietnam.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F56778%2F1710350998-imageonline-co-noisedimage.png%3Fauto%3Dformat%252Ccompress%26cs%3Dsrgb&w=3840&q=75')]"
                ></div>
                <div className="grid grid-cols-1 gap-2.5 text-black text-left max-w-[290px]">
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
                <div className="grid grid-cols-1 gap-2.5 text-black text-left max-w-[290px]">
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
                <div className="grid grid-cols-1 gap-2.5 text-black text-left max-w-[290px]">
                  <p className="text-sm underline underline-offset-2">STYLE</p>
                  <p className="text-lg leading-snug">
                    Gương mặt mới của Versace Icons gọi tên nam diễn viên chính
                    "Oppenheimer" - Cillian Murphy
                  </p>
                  <p className="text-sm font-normal">03.14.2024 by Anthea</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto text-black  mt-24">
        <div className="py-16">
          <p
            style={{ letterSpacing: "8%" }}
            className="text-center text-2xl mb-16"
          >
            OSCARS 2024
          </p>
          <div className="w-fit grid grid-cols-3 gap-16 mx-auto">
            <div>
              <div
                style={{
                  background: "#D9D9D9",
                  width: "340px",
                  height: "340px",
                }}
                className="max-w-[340px] max-h-[340px]"
              ></div>
              <div className="grid grid-cols-1 mt-4 gap-2.5 text-black text-left max-w-[290px]">
                <p className="text-sm underline underline-offset-2 my-1">
                  TV, MUSIC & FILM
                </p>
                <p className="text-xl leading-snug">
                  Nữ kiến trúc sư đầu tiên của Việt Nam giành giải thưởng Moira
                  Gemmill
                </p>
                <p className="text-sm font-normal">03.10.2024 by Celia</p>
              </div>
            </div>

            <div>
              <div
                style={{
                  background: "#D9D9D9",
                  width: "340px",
                  height: "340px",
                }}
                className="max-w-[340px] max-h-[340px]"
              ></div>
              <div className="grid grid-cols-1 mt-4 gap-2.5 text-black text-left max-w-[290px]">
                <p className="text-sm underline underline-offset-2 my-1">
                  TV, MUSIC & FILM
                </p>
                <p className="text-xl leading-snug">
                  Nữ kiến trúc sư đầu tiên của Việt Nam giành giải thưởng Moira
                  Gemmill
                </p>
                <p className="text-sm font-normal">03.10.2024 by Celia</p>
              </div>
            </div>

            <div>
              <div
                style={{
                  background: "#D9D9D9",
                  width: "340px",
                  height: "340px",
                }}
                className="max-w-[340px] max-h-[340px]"
              ></div>
              <div className="grid grid-cols-1 mt-4 gap-2.5 text-black text-left max-w-[290px]">
                <p className="text-sm underline underline-offset-2 my-1">
                  TV, MUSIC & FILM
                </p>
                <p className="text-xl leading-snug">
                  Nữ kiến trúc sư đầu tiên của Việt Nam giành giải thưởng Moira
                  Gemmill
                </p>
                <p className="text-sm font-normal">03.10.2024 by Celia</p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16">
          <p
            style={{ letterSpacing: "8%" }}
            className="text-center text-2xl mb-16 uppercase"
          >
            style
          </p>
          <div className="w-fit grid grid-cols-3 gap-16 mx-auto">
            <div>
              <div
                style={{
                  background: "#D9D9D9",
                  width: "340px",
                  height: "340px",
                }}
                className="max-w-[340px] max-h-[340px]"
              ></div>
              <div className="grid grid-cols-1 mt-4 gap-2.5 text-black text-left max-w-[290px]">
                <p className="text-sm underline underline-offset-2 my-1">
                  TV, MUSIC & FILM
                </p>
                <p className="text-xl leading-snug">
                  Nữ kiến trúc sư đầu tiên của Việt Nam giành giải thưởng Moira
                  Gemmill
                </p>
                <p className="text-sm font-normal">03.10.2024 by Celia</p>
              </div>
            </div>

            <div>
              <div
                style={{
                  background: "#D9D9D9",
                  width: "340px",
                  height: "340px",
                }}
                className="max-w-[340px] max-h-[340px]"
              ></div>
              <div className="grid grid-cols-1 mt-4 gap-2.5 text-black text-left max-w-[290px]">
                <p className="text-sm underline underline-offset-2 my-1">
                  TV, MUSIC & FILM
                </p>
                <p className="text-xl leading-snug">
                  Nữ kiến trúc sư đầu tiên của Việt Nam giành giải thưởng Moira
                  Gemmill
                </p>
                <p className="text-sm font-normal">03.10.2024 by Celia</p>
              </div>
            </div>

            <div>
              <div
                style={{
                  background: "#D9D9D9",
                  width: "340px",
                  height: "340px",
                }}
                className="max-w-[340px] max-h-[340px]"
              ></div>
              <div className="grid grid-cols-1 mt-4 gap-2.5 text-black text-left max-w-[290px]">
                <p className="text-sm underline underline-offset-2 my-1">
                  TV, MUSIC & FILM
                </p>
                <p className="text-xl leading-snug">
                  Nữ kiến trúc sư đầu tiên của Việt Nam giành giải thưởng Moira
                  Gemmill
                </p>
                <p className="text-sm font-normal">03.10.2024 by Celia</p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16">
          <p
            style={{ letterSpacing: "8%" }}
            className="text-center text-2xl mb-16 uppercase"
          >
            BUSINESS OF FASHION
          </p>
          <div className="w-fit grid grid-cols-2 gap-16 mx-auto">
            <div>
              <div
                style={{
                  background: "#D9D9D9",
                }}
                className="w-full h-[550px]"
              ></div>
              <div className="grid grid-cols-1 mt-4 gap-2.5 text-black text-left w-3/4">
                <p className="text-lg underline underline-offset-2 my-1">
                  BUSINESS
                </p>
                <p className="text-2xl leading-snug">
                  Nữ kiến trúc sư đầu tiên của Việt Nam giành giải thưởng Moira
                  Gemmill
                </p>
                <p className="text-sm font-normal">03.10.2024 by Celia</p>
              </div>
            </div>

            <div>
              <div
                style={{
                  background: "#D9D9D9",
                }}
                className="w-full h-[550px]"
              ></div>
              <div className="grid grid-cols-1 mt-4 gap-2.5 text-black text-left w-3/4">
                <p className="text-lg underline underline-offset-2 my-1">
                  BUSINESS
                </p>
                <p className="text-2xl leading-snug">
                  Nữ kiến trúc sư đầu tiên của Việt Nam giành giải thưởng Moira
                  Gemmill
                </p>
                <p className="text-sm font-normal">03.10.2024 by Celia</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <p className="text-center text-2xl mb-4">RUNWAY</p>
        <div
          style={{
            backgroundImage: `url(${runwaybanner.src})`,
            width: "100%",
            height: "480px",
          }}
          className="bg-cover bg-no-repeat bg-center px-12 py-8"
        >
          <div className="flex flex-col justify-end h-full w-1/2 ">
            <div className="grid grid-cols-1 mt-4 gap-2.5 text-white text-left w-full">
              <p className="text-lg underline underline-offset-2 my-1">
                BUSINESS
              </p>
              <p className="text-5xl leading-snug">
                Nữ kiến trúc sư đầu tiên của Việt Nam giành giải thưởng Moira
                Gemmill
              </p>
              <p className="text-sm font-normal">03.10.2024 by Celia</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto text-black">
        <div className="py-16">
          <p
            style={{ letterSpacing: "8%" }}
            className="text-center text-2xl mb-16"
          >
            OSCARS 2024
          </p>
          <div className="w-fit grid grid-cols-3 gap-16 mx-auto">
            <div>
              <div
                style={{
                  background: "#D9D9D9",
                  width: "340px",
                  height: "340px",
                }}
                className="max-w-[340px] max-h-[340px]"
              ></div>
              <div className="grid grid-cols-1 mt-4 gap-2.5 text-black text-left max-w-[290px]">
                <p className="text-sm underline underline-offset-2 my-1">
                  TV, MUSIC & FILM
                </p>
                <p className="text-xl leading-snug">
                  Nữ kiến trúc sư đầu tiên của Việt Nam giành giải thưởng Moira
                  Gemmill
                </p>
                <p className="text-sm font-normal">03.10.2024 by Celia</p>
              </div>
            </div>

            <div>
              <div
                style={{
                  background: "#D9D9D9",
                  width: "340px",
                  height: "340px",
                }}
                className="max-w-[340px] max-h-[340px]"
              ></div>
              <div className="grid grid-cols-1 mt-4 gap-2.5 text-black text-left max-w-[290px]">
                <p className="text-sm underline underline-offset-2 my-1">
                  TV, MUSIC & FILM
                </p>
                <p className="text-xl leading-snug">
                  Nữ kiến trúc sư đầu tiên của Việt Nam giành giải thưởng Moira
                  Gemmill
                </p>
                <p className="text-sm font-normal">03.10.2024 by Celia</p>
              </div>
            </div>

            <div>
              <div
                style={{
                  background: "#D9D9D9",
                  width: "340px",
                  height: "340px",
                }}
                className="max-w-[340px] max-h-[340px]"
              ></div>
              <div className="grid grid-cols-1 mt-4 gap-2.5 text-black text-left max-w-[290px]">
                <p className="text-sm underline underline-offset-2 my-1">
                  TV, MUSIC & FILM
                </p>
                <p className="text-xl leading-snug">
                  Nữ kiến trúc sư đầu tiên của Việt Nam giành giải thưởng Moira
                  Gemmill
                </p>
                <p className="text-sm font-normal">03.10.2024 by Celia</p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16">
          <p
            style={{ letterSpacing: "8%" }}
            className="text-center text-2xl mb-16 uppercase"
          >
            style
          </p>
          <div className="w-fit grid grid-cols-3 gap-16 mx-auto">
            <div>
              <div
                style={{
                  background: "#D9D9D9",
                  width: "340px",
                  height: "340px",
                }}
                className="max-w-[340px] max-h-[340px]"
              ></div>
              <div className="grid grid-cols-1 mt-4 gap-2.5 text-black text-left max-w-[290px]">
                <p className="text-sm underline underline-offset-2 my-1">
                  TV, MUSIC & FILM
                </p>
                <p className="text-xl leading-snug">
                  Nữ kiến trúc sư đầu tiên của Việt Nam giành giải thưởng Moira
                  Gemmill
                </p>
                <p className="text-sm font-normal">03.10.2024 by Celia</p>
              </div>
            </div>

            <div>
              <div
                style={{
                  background: "#D9D9D9",
                  width: "340px",
                  height: "340px",
                }}
                className="max-w-[340px] max-h-[340px]"
              ></div>
              <div className="grid grid-cols-1 mt-4 gap-2.5 text-black text-left max-w-[290px]">
                <p className="text-sm underline underline-offset-2 my-1">
                  TV, MUSIC & FILM
                </p>
                <p className="text-xl leading-snug">
                  Nữ kiến trúc sư đầu tiên của Việt Nam giành giải thưởng Moira
                  Gemmill
                </p>
                <p className="text-sm font-normal">03.10.2024 by Celia</p>
              </div>
            </div>

            <div>
              <div
                style={{
                  background: "#D9D9D9",
                  width: "340px",
                  height: "340px",
                }}
                className="max-w-[340px] max-h-[340px]"
              ></div>
              <div className="grid grid-cols-1 mt-4 gap-2.5 text-black text-left max-w-[290px]">
                <p className="text-sm underline underline-offset-2 my-1">
                  TV, MUSIC & FILM
                </p>
                <p className="text-xl leading-snug">
                  Nữ kiến trúc sư đầu tiên của Việt Nam giành giải thưởng Moira
                  Gemmill
                </p>
                <p className="text-sm font-normal">03.10.2024 by Celia</p>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16">
          <p
            style={{ letterSpacing: "8%" }}
            className="text-center text-2xl mb-16 uppercase"
          >
            BUSINESS OF FASHION
          </p>
          <div className="w-fit grid grid-cols-2 gap-16 mx-auto">
            <div>
              <div
                style={{
                  background: "#D9D9D9",
                  width: "560px",
                  height: "560px",
                }}
                className="max-w-[560px] max-h-[560px]"
              ></div>
              <div className="grid grid-cols-1 mt-4 gap-2.5 text-black text-left w-3/4">
                <p className="text-lg underline underline-offset-2 my-1">
                  BUSINESS
                </p>
                <p className="text-2xl leading-snug">
                  Nữ kiến trúc sư đầu tiên của Việt Nam giành giải thưởng Moira
                  Gemmill
                </p>
                <p className="text-sm font-normal">03.10.2024 by Celia</p>
              </div>
            </div>

            <div>
              <div
                style={{
                  background: "#D9D9D9",
                  width: "560px",
                  height: "560px",
                }}
                className="max-w-[560px] max-h-[560px]"
              ></div>
              <div className="grid grid-cols-1 mt-4 gap-2.5 text-black text-left w-3/4">
                <p className="text-lg underline underline-offset-2 my-1">
                  BUSINESS
                </p>
                <p className="text-2xl leading-snug">
                  Nữ kiến trúc sư đầu tiên của Việt Nam giành giải thưởng Moira
                  Gemmill
                </p>
                <p className="text-sm font-normal">03.10.2024 by Celia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
