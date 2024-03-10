import Link from "next/link";
import React from "react";
import { IoLogoFacebook } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <div className="w-full bg-black pt-16 text-white">
      <div className="max-w-4xl mx-auto flex items-start gap-12 pb-16">
        <div className="w-fit">
          <p className="text-sm uppercase mb-4">
            BẠN ĐÃ LÀ THÀNH VIÊN? ĐĂNG KÝ NGAY ĐỂ NHẬN TIN TỨC MỚI NHẤT
          </p>
          <div className="w-full flex items-end text-xs gap-4">
            <label
              className="w-full border-b py-1 mb-1.5 border-white"
              htmlFor=""
            >
              <input
                type="text"
                placeholder="EMAIL"
                className="w-full text-sm bg-transparent outline-none"
              />
            </label>
            <button className="w-32 text-xs border-white border-[1px] px-4 py-2.5">
              ĐĂNG KÝ
            </button>
          </div>

          <div className="mt-10 flex items-center">
            <p className="uppercase text-xs mr-16">KẾT NỐI</p>
            <div className="flex items-center gap-4">
              <Link href={"/"}>
                <IoLogoFacebook size={24} />
              </Link>
              <Link href={"/"}>
                <AiFillInstagram size={24} />
              </Link>
              <Link href={"/"}>
                <FaPinterest size={24} />
              </Link>
              <Link href={"/"}>
                <FaLinkedin size={24} />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-auto grid grid-cols-2 gap-12">
          <div className="">
            <div className="grid grid-cols-1 gap-6">
              <div className="text-sm uppercase">DỊCH VỤ KHÁCH HÀNG</div>
              <Link href={"/"}>
                <div className="uppercase text-xs font-light hover:underline hover:underline-offset-2">
                  CÂU HỎI THƯỜNG GẶP
                </div>
              </Link>
              <Link href={"/"}>
                <div className="uppercase text-xs font-light hover:underline hover:underline-offset-2">
                  TUYỂN DỤNG
                </div>
              </Link>
              <Link href={"/"}>
                <div className="uppercase text-xs font-light hover:underline hover:underline-offset-2">
                  VỊ TRÍ ĐANG TUYỂN DỤNG
                </div>
              </Link>
            </div>
          </div>

          <div className="">
            <div className="grid grid-cols-1 gap-6">
              <div className="text-sm uppercase">M MAGAZINE</div>
              <Link href={"/"}>
                <div className="uppercase text-xs font-light hover:underline hover:underline-offset-2">
                  VỀ CHÚNG TÔI
                </div>
              </Link>
              <Link href={"/"}>
                <div className="uppercase text-xs font-light hover:underline hover:underline-offset-2">
                  ĐIỀU KHOẢN SỬ DỤNG
                </div>
              </Link>
              <Link href={"/"}>
                <div className="uppercase text-xs font-light hover:underline hover:underline-offset-2">
                  CHÍNH SÁCH RIÊNG TƯ
                </div>
              </Link>
              <Link href={"/"}>
                <div className="uppercase text-xs font-light hover:underline hover:underline-offset-2">
                  LIÊN HỆ
                </div>
              </Link>
              <Link href={"/"}>
                <div className="uppercase text-xs font-light hover:underline hover:underline-offset-2">
                  SITEMAP
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-center text-xs py-4 font-light border-t border-white/20">
        ©2024 CÔNG TY TNHH MYSENSE - VAT.NO: 10982992 - 104 MAI THỊ LỰU, PHƯỜNG
        ĐAKAO, QUẬN 1, TPHCM
      </div>
    </div>
  );
}

export default Footer;
