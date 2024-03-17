import Link from "next/link";
import React from "react";

interface ArticleContent {
  imgLink: string;
  name: string;
  time: string;
  author: string;
  category: string;
}

const Article: React.FC<ArticleContent> = (props) => {
  return (
    <Link href={"/"}>
      <div
        style={{
          backgroundImage: `url(${props.imgLink})`,
        }}
        className="w-full h-[300px] sm:h-[380px] bg-cover bg-center bg-gray-500"
      ></div>
      <div className="grid grid-cols-1 gap-2.5 text-black text-left w-full p-4 sm:mt-4 sm:px-0">
        <p className="text-base font-normal underline underline-offset-2 my-1 uppercase">
          {props.category}
        </p>
        <p className="text-[22px] leading-snug">{props.name}</p>
        <p className="text-sm font-normal">
          {props.time} by {props.author}
        </p>
      </div>
    </Link>
  );
};

interface ArticleLayoutProps {
  children: React.ReactNode;
}

function ArticleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="w-full grid sm:grid-cols-3 gap-5">{children}</div>;
}

function ArticleTitle({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <p
      style={{ letterSpacing: "2.5px" }}
      className="text-center uppercase text-[26px] font-[400] mb-16"
    >
      {children}
    </p>
  );
}

function ArticleSection({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="sm:py-16 py-8 2xl:mx-0 sm:mx-8">{children}</div>;
}

export { Article, ArticleLayout, ArticleTitle, ArticleSection };
