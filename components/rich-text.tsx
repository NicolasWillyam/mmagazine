import { urlFor } from "@/lib/createClient";
import Image from "next/image";
import Link from "next/link";

export const RichText = {
  types: {
    image: ({ value }: any) => {
      return (
        <img className="w-full h-full my-8" src={urlFor(value).url()} alt="" />
      );
    },
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="ml-10 py-5 list-disc space-y-5">{children}</ul>
    ),
  },
  number: ({ children }: any) => (
    <ol className="mt-lg list-decimal">{children}</ol>
  ),
  block: {
    normal: ({ children }: any) => (
      <p className="w-full text-justify leading-[25px] font-light py-8 px-4 sm:px-0">
        {children}
      </p>
    ),
    center: ({ children }: any) => (
      <p className="text-base font-light text-center">{children}</p>
    ),
    h1: ({ children }: any) => (
      <h1 className="text-4xl py-10 font-bold">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-3xl py-10 font-bold">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-2xl py-10 font-bold">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-2xl py-10 font-bold">{children}</h4>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-blue-600 border-l-4 pl-5 py-5 my-5">
        {children}
      </blockquote>
    ),
  },

  marks: {
    link: ({ children, value }: any) => {
      const rel = !value.href.startWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <Link href={value.href} rel={rel} className="underline">
          {children}
        </Link>
      );
    },
  },
};
