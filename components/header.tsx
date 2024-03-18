"use client";
import React, { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Logo } from "./logo";
import { IoMdClose } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { DesignerList, MenuList } from "@/public/data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Footer from "./footer";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { FaLinkedin, FaPinterestP } from "react-icons/fa";

interface Style {
  style: string;
}

const Header: React.FC<Style> = (props) => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuState, setMenuState] = useState(false);

  const ChangeMenuState = () => {
    if (menuState === false) {
      setMenuState(true);
    } else {
      setMenuState(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full fixed top-0 0 z-10 ">
      <div
        className={` ${props.style === "light" ? "text-white" : "text-black"}`}
      >
        <div
          className={`${
            isScrolled ? "sm:h-[58px] h-[55px] bg-white/90 text-black" : "h-36 "
          }`}
        >
          <div className="h-full sm:px-8 px-4 flex items-start justify-between py-4 z-10">
            <div className="w-24 flex items-center gap-2 -mt-0.5">
              <FiMenu onClick={ChangeMenuState} size={28} />
              <p className="text-sm sm:text-base font-semibold uppercase">
                MENU
              </p>
            </div>
            <Logo isScrolled={isScrolled} style={props.style} />
            <div className="w-24 flex items-center gap-2">
              <p className="text-sm sm:text-base font-semibold uppercase ml-auto mt-0.5">
                vietnam
              </p>
            </div>
          </div>

          <div
            style={{ display: menuState ? "block" : "none" }}
            className="bg-black/50 w-full h-screen overflow-auto absolute top-0 transition-all"
          >
            <div className="w-80">
              <div className="w-full bg-white text-black px-8 py-6">
                <div className="pb-8">
                  <IoMdClose onClick={ChangeMenuState} size={32} />
                </div>
                <div className="">
                  <label htmlFor="" className="w-full flex items-center pr-4">
                    <input
                      type="text"
                      placeholder="Search"
                      className="w-full text-lg outline-none py-4 pr-2 uppercase placeholder-black"
                    />
                    <IoSearch size={20} />
                  </label>
                  <div className="overflow-y-auto h-full pt-4">
                    <p className="text-xs uppercase font-light">CATEGORIES</p>
                    <ul className="grid grid-cols-1 gap-2.5 uppercase mt-4 text-lg">
                      {MenuList.map((item) => (
                        <Link key={item.id} href={`/${item.id}?=`}>
                          <li className="hover:underline hover:underline-offset-2">
                            {item.name}
                          </li>
                        </Link>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="w-full bg-black text-white">
                <div className="max-w-[1440px] mx-auto p-8">
                  <Link href={"/"}>
                    <svg
                      width="80"
                      height="120"
                      viewBox="0 0 364 522"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className=""
                    >
                      <path
                        d="M280.107 497.987C277.36 498.866 275.855 501.312 276.166 504.352C276.428 506.822 277.766 508.295 281.898 510.717C285.863 513.045 287.32 514.541 287.32 516.323C287.32 517.534 286.388 519.149 285.266 519.933C284.406 520.527 284.072 520.622 282.686 520.598C280.393 520.574 278.53 519.553 276.858 517.391C276.428 516.821 276.285 516.774 275.975 517.011C275.378 517.51 275.569 518.009 276.811 519.197C278.626 520.93 280.274 521.595 282.901 521.619C284.788 521.619 285.194 521.548 286.245 521.002C288.562 519.79 289.756 517.819 289.804 515.111C289.828 513.876 289.708 513.306 289.183 512.261C288.49 510.836 287.463 509.934 284.573 508.2C279.677 505.278 278.483 504.067 278.483 502.119C278.483 501.621 278.697 500.861 278.96 500.433C280.393 498.106 283.737 498.177 286.269 500.647C287.2 501.549 287.248 501.573 287.63 501.146C288.013 500.742 287.989 500.671 287.129 499.839C286.651 499.364 285.72 498.747 285.051 498.462C283.761 497.892 281.181 497.654 280.107 497.987Z"
                        fill="white"
                      />
                      <path
                        d="M337.626 498.106C334.712 499.198 333.351 502.048 334.139 505.373C334.545 507.012 336.169 508.651 339.274 510.48C344.027 513.282 345.03 514.351 344.983 516.465C344.911 518.983 343.024 520.669 340.325 520.598C338.438 520.55 337.005 519.862 335.333 518.151C333.996 516.798 333.972 516.774 333.566 517.225C333.16 517.676 333.184 517.748 334.282 518.912C334.975 519.648 336.002 520.384 336.981 520.859C338.39 521.548 338.773 521.619 340.707 521.619C342.57 521.619 343.024 521.524 344.075 520.978C344.744 520.645 345.58 520.028 345.938 519.6C347.18 518.151 347.371 517.51 347.395 515.111C347.395 511.501 346.846 510.86 340.444 507.036C338.749 506.015 337.077 504.566 336.623 503.687C336.074 502.618 336.193 501.146 336.91 500.219C338.534 498.082 341.424 498.224 344.003 500.599C345.006 501.526 345.078 501.549 345.46 501.122C345.842 500.718 345.795 500.647 344.863 499.816C344.338 499.317 343.382 498.723 342.785 498.462C341.304 497.82 338.844 497.654 337.626 498.106Z"
                        fill="white"
                      />
                      <path
                        d="M227.171 498.206C227.028 498.372 227.362 499.251 228.795 502.315C229.249 503.289 229.607 504.12 229.607 504.191C229.607 504.239 229.894 504.904 230.228 505.64C230.825 506.899 231.16 507.706 232.067 509.725C232.258 510.177 232.665 511.079 232.951 511.744C233.262 512.385 233.907 513.834 234.408 514.927L235.292 516.922L236.056 515.283C236.462 514.381 236.82 513.478 236.844 513.24C236.868 512.884 231.876 501.412 230.682 499.156C230.204 498.23 230.181 498.206 228.747 498.135C227.959 498.087 227.243 498.135 227.171 498.206Z"
                        fill="white"
                      />
                      <path
                        d="M247.545 498.294C247.474 498.461 247.45 503.733 247.474 510.004L247.545 521.404H249.098H250.65V509.766V498.128L249.146 498.057C248.095 498.009 247.617 498.081 247.545 498.294Z"
                        fill="white"
                      />
                      <path
                        d="M254.267 498.229C254.148 498.395 260.716 510.057 261.289 510.674C261.48 510.912 262.961 508.584 262.937 508.038C262.937 507.824 261.671 505.497 260.143 502.884L257.324 498.134L255.868 498.063C255.055 498.015 254.339 498.086 254.267 498.229Z"
                        fill="white"
                      />
                      <path
                        d="M270.686 498.199C270.447 498.366 267.939 502.38 263.807 509.22L261.992 512.236L262.04 516.82L262.112 521.404H263.664H265.217L265.336 516.749L265.455 512.118L268.895 506.417C270.806 503.306 272.669 500.266 273.027 499.696C274.006 498.152 273.935 498.009 272.334 498.009C271.57 498.009 270.83 498.104 270.686 498.199Z"
                        fill="white"
                      />
                      <path
                        d="M292.221 498.296C292.15 498.463 292.126 503.735 292.15 510.006L292.221 521.406L298.67 521.477C302.229 521.501 305.358 521.477 305.668 521.406C305.955 521.335 306.194 521.121 306.194 520.931C306.194 520.622 305.453 520.575 301.202 520.575C298.455 520.575 296.043 520.504 295.828 520.432C295.493 520.314 295.446 519.601 295.446 514.97V509.649H299.984C304.355 509.649 304.522 509.626 304.522 509.174C304.522 508.723 304.331 508.699 300.055 508.652L295.565 508.581V503.83V499.08L300.891 499.009C305.812 498.961 306.218 498.914 306.146 498.534C306.074 498.154 305.501 498.13 299.196 498.059C293.822 498.011 292.293 498.059 292.221 498.296Z"
                        fill="white"
                      />
                      <path
                        d="M310.246 510.006V522H310.963H311.679V512.001V502.025L320.54 512.001C327.61 519.981 329.521 522 329.975 522H330.548V510.006V498.011H329.832H329.115L329.067 507.156L328.996 516.323L320.803 507.156L312.635 498.011H311.44H310.246V510.006Z"
                        fill="white"
                      />
                      <path
                        d="M350.026 498.293C349.954 498.46 349.93 503.732 349.954 510.003L350.026 521.403L356.69 521.475C363.186 521.522 363.998 521.451 363.998 520.786C363.998 520.667 361.753 520.572 359.007 520.572C356.26 520.572 353.847 520.501 353.633 520.43C353.298 520.311 353.25 519.598 353.25 514.967V509.646H357.788C362.159 509.646 362.327 509.623 362.327 509.171C362.327 508.72 362.135 508.696 357.86 508.649L353.37 508.578V503.827V499.077L358.696 499.006C361.61 498.982 363.998 498.863 363.998 498.768C363.998 498.08 363.282 498.008 356.785 498.008C351.674 498.008 350.098 498.08 350.026 498.293Z"
                        fill="white"
                      />
                      <path
                        d="M224.549 511.12L224.621 521.404H226.173H227.726L227.797 514.516L227.845 507.629L226.364 504.256C225.528 502.403 224.788 500.86 224.668 500.86C224.573 500.86 224.525 505.491 224.549 511.12Z"
                        fill="white"
                      />
                      <path
                        d="M242.567 503.781C241.922 505.23 239.964 509.672 238.22 513.614C236.453 517.557 235.02 520.953 235.02 521.143C235.02 521.452 235.306 521.523 236.453 521.523C237.671 521.523 237.933 521.452 238.22 520.977C238.411 520.692 239.82 517.652 241.325 514.232L244.096 508.009V504.541C244.096 502.641 244.024 501.097 243.929 501.097C243.809 501.097 243.212 502.309 242.567 503.781Z"
                        fill="white"
                      />
                      <path
                        d="M104.065 0L176.039 352.266L261.308 0H363.998V7.495H322.28V477.638H363.998V485.133H224.175V477.638H265.434V7.495L148.533 490.584H144.407L46.76 7.495V477.638H89.853V485.133H0V477.638H41.718V7.495H0V0H104.065Z"
                        fill="white"
                      />
                    </svg>
                  </Link>
                  <div>
                    <ul className="w-fit text-left my-8 items-center text-sm uppercase">
                      <Link href={"/"}>
                        <li className="w-fit border-b-[1px] border-transparent hover:border-white py-1">
                          ABOUT
                        </li>
                      </Link>
                      <Link href={"/"}>
                        <li className="w-fit border-b-[1px] border-transparent hover:border-white py-1">
                          CONTACT
                        </li>
                      </Link>
                    </ul>
                  </div>
                  <p className="text-sm uppercase">Follow us</p>
                  <div className="w-fit text-center flex items-center mt-2 mb-8 gap-2.5">
                    <Link href={"/"}>
                      <AiFillFacebook size={24} />
                    </Link>
                    <Link href={"/"}>
                      <AiFillInstagram size={24} />
                    </Link>
                    <Link href={"/"}>
                      <FaPinterestP size={24} />
                    </Link>
                    <Link href={"/"}>
                      <FaLinkedin size={24} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Header };
