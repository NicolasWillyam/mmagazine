import Image from "next/image";
import React from "react";
import backgroundImage from "../../public/sign-in-banner.png";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

function SignUp() {
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
          <Image src={"/logo.svg"} alt="logo" width={80} height={100} />
          <div className="max-w-lg">
            <p className="text-3xl">Tạo tài khoản mới</p>
            <p className="text-sm font-light mt-4">
              Bạn có thể dùng tài khoản M Magazine để đăng nhập vào các website
              khác của MYSENSE
            </p>
            <p className="text-sm font-light mt-4">
              Bạn đang tạo tài khoản mới với email: <br />
              <span className="font-medium">abcxyz@gmail.com</span>
            </p>
            <div className="my-6">
              <ul className="grid grid-col-1 gap-2.5 text-sm">
                <li className="flex items-start gap-2.5  font-light">
                  <Checkbox className="mt-0.5" />

                  <p>Có, tôi muốn nhận bản tin hàng ngày của M.</p>
                </li>
                <li className="flex items-start gap-2.5  font-light">
                  <Checkbox className="mt-0.5" />

                  <p>
                    Đăng kí đển nhận Email từ M về các sản phẩm, chương trình
                    khuyến mãi và dịch vụ của M.
                  </p>
                </li>
                <li className="flex items-start gap-2.5 font-light">
                  <Checkbox className="mt-0.5" />
                  <p>
                    Đăng kí đển nhận Email tiếp thị từ M về các ưu đãi và khuyến
                    mãi đặc biệt dành cho thương hiệu khác của MYSENSE và các
                    đối tác tiếp thị của chúng tôi.
                  </p>
                </li>
              </ul>
            </div>

            <p className="text-sm font-light text-black/70">
              Bằng cách tạo một tài khoản, bạn đồng ý với{" "}
              <span className="underline underline-offset-2">
                <Link href={"/"}>Điều khoản sử dụng</Link>
              </span>{" "}
              cũng như{" "}
              <span className="underline underline-offset-2">
                <Link href={"/"}>Chính sách quyền riêng tư</Link>
              </span>{" "}
              và{" "}
              <span className="underline underline-offset-2">
                <Link href={"/"}>Tuyên bố về cookie</Link>
              </span>{" "}
              của chúng tôi .
            </p>
            <div className="mt-6 w-full text-center">
              <Button variant={"dark"}>TẠO TÀI KHOẢN</Button>
              <Link href={"/sign-in"}>
                <button className="mt-6 underline underline-offset-2 uppercase text-sm">
                  QUAY LẠI
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
