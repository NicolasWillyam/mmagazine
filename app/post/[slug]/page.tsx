import { groq } from "next-sanity";
import { Post } from "@/type";
import { client, urlFor } from "@/lib/createClient";
import Image from "next/image";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import post from "@/sanity/schemaTypes/post";
import { RichText } from "@/components/rich-text";
import { Header } from "@/components/header";
import Footer from "@/components/footer";

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 30;

export const generateStaticParams = async () => {
  const query = groq`*[_type == 'post']{
        slug
    }`;
  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug?.slug?.current);
  return slugRoutes?.map((slug) => ({
    slug,
  }));
};

const SlugPage = async ({ params: { slug } }: Props) => {
  const query = groq`*[_type == 'post' && slug.current == $slug][0]{
        ...,
        body,
        post->,
        author->,
        categories[]->
    }`;
  const post: Post = await client.fetch(query, { slug });
  console.log(post.subtitle);

  return (
    <div className="">
      <Header style="dark" />

      <div className="mt-56 max-w-[1044px] mx-auto ">
        <div className=" sm:w-[90%] mx-auto grid grid-cols-1 gap-y-6 py-8 sm:px-0 px-4 sm:text-center">
          {post?.categories.map((item) => (
            <p
              key={item?._id}
              className="sm:text-center uppercase text-lg font-normal underline underline-offset-2"
            >
              {item.title}
            </p>
          ))}

          <p className="sm:text-[55px] text-[25px] sm:leading-[70px] leading-[30px]">
            {post.title}
          </p>
          <p className="sm:text-2xl text-lg sm:leading-[32px] mx-auto">
            {post.subtitle}
          </p>
          <p>
            {post?._createdAt.slice(5, 7) +
              "." +
              post?._createdAt.slice(8, 10) +
              "." +
              post?._createdAt.slice(0, 4)}{" "}
            by {post?.author?.name}
          </p>
        </div>
        <img
          className="w-full h-full my-8"
          src={urlFor(post.mainImage).url()}
          alt=""
        />

        <div className="max-w-[844px] mx-auto">
          <PortableText value={post?.body} components={RichText} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SlugPage;
