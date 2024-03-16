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
        className="w-full h-[349px] bg-cover bg-center bg-gray-500"
      ></div>
      <div className="grid grid-cols-1 mt-4 gap-2.5 text-black text-left w-full">
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

export { Article };
