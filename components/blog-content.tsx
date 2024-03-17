"use client";
import { urlFor } from "@/lib/createClient";
import { urlForImage } from "@/sanity/lib/image";
import { Post } from "@/type";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  posts: Post[];
}

const BlogContent = ({ posts }: Props) => {
  const date = "2024-03-15";
  console.log(
    "date",
    date.slice(5, 7) + "." + date.slice(8, 10) + "." + date.slice(0, 4)
  );

  return (
    <div>
      <div className="pb-16">
        <p
          style={{ letterSpacing: "8%" }}
          className="text-center text-2xl mb-16 uppercase"
        >
          NEWS THIS WEEK
        </p>
        <div className="w-full grid sm:grid-cols-3 gap-5">
          {posts?.map((post) => (
            <Link href={`/post/${post?.slug?.current}`} key={post?._id}>
              <div
                style={{
                  backgroundImage: `url('${urlFor(post?.mainImage).url()}')`,
                }}
                className="w-full h-[380px] bg-cover bg-center bg-gray-500"
              ></div>
              <div className="grid grid-cols-1 gap-2.5 text-black text-left w-full p-4 sm:mt-4 sm:px-0">
                {post?.categories?.map((item) => (
                  <p
                    key={item?._id}
                    className="text-base font-normal underline underline-offset-2 my-1 uppercase"
                  >
                    {item?.title}
                  </p>
                ))}
                <p className="text-[22px] leading-snug">{post.title}</p>
                <p className="text-sm font-normal">
                  {post?._createdAt.slice(5, 7) +
                    "." +
                    post?._createdAt.slice(8, 10) +
                    "." +
                    post?._createdAt.slice(0, 4)}{" "}
                  by {post?.author?.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
