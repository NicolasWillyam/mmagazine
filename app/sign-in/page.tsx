import Image from "next/image";
import React from "react";
import backgroundImage from "../../public/sign-in-banner.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Logo from "@/components/ui/logo";

function SignIn() {
  return (
    <div className="grid grid-cols-2">
      <div
        style={{
          // use the src property of the image object
          backgroundImage: `url(${backgroundImage.src})`,
          // other styles
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "45vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></div>
      <div className="flex flex-col items-start justify-center mb-16 pl-8">
        <div className="grid grid-cols-1 gap-8">
          <Logo width={80} height={100} />
          <p className="text-3xl">Đăng nhập hoặc tạo một tài khoản</p>
          <div className="">
            <label htmlFor="">
              <div className="block max-w-lg">
                <div className="w-full">
                  <p className="text-xs font-light">Địa chỉ email</p>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="px-4 py-3.5 border border-black text-sm mt-2 mb-4 w-full outline-none"
                  />
                </div>
                <div className="w-full">
                  <p className="text-xs font-light">Mật Khẩu</p>
                  <input
                    type="password"
                    name=""
                    id=""
                    className="px-4 py-3.5 border border-black text-sm mt-2 mb-4 w-full outline-none"
                  />
                </div>
                <Button variant={"dark"} size={"sm"}>
                  TẠO TÀI KHOẢN VỚI EMAIL
                </Button>
              </div>
            </label>
            <div className="flex items-center justify-center text-sm font-light my-4">
              <hr className="w-full border-[#E0E0E0]" />
              <p className="mx-4">or</p>
              <hr className="w-full border-[#E0E0E0]" />
            </div>
            <div className="grid grid-cols-1 gap-2">
              <Button size={"icon"}>
                <div className="w-full h-12 flex items-center justify-between px-1">
                  <div className="w-10 h-10 bg-white flex items-center justify-center">
                    <Image
                      alt="image"
                      src={"/google-logo.png"}
                      width={24}
                      height={24}
                    />
                  </div>
                  <p>TIẾP TỤC VỚI GOOGLE</p>
                  <div className="w-10 h-10 "></div>
                </div>
              </Button>
              <Button size={"icon"}>
                <div className="w-full h-12 flex items-center justify-between px-1">
                  <div className="w-10 h-10 bg-white flex items-center justify-center">
                    <Image
                      alt="image"
                      src={"/facebook-logo.png"}
                      width={24}
                      height={24}
                    />
                  </div>
                  <p>TIẾP TỤC VỚI FACEBOOK</p>
                  <div className="w-10 h-10 "></div>
                </div>
              </Button>

              {/* <div className="text-center text-sm mt-2 font-light">
                Bạn chưa có tài khoản?{" "}
                <span className="underline underline-offset-2">
                  <Link href={"/sign-up"}>Đăng kí ngay</Link>
                </span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
