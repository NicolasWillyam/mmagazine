import BlogContent from "@/components/blog-content";
import Footer from "@/components/footer";
import { Header } from "@/components/header";
import { client } from "@/lib/createClient";
import { groq } from "next-sanity";
import React from "react";

const query = groq`*[_type == 'post'] {
  ...,
  author->,
  categories[]->
} | order(author,_createdAt asc)`;

export default async function Page() {
  const posts = await client.fetch(query);
  return (
    <div>
      <Header style="dark" />
      <div className="max-w-[1200px]  mx-auto text-black  mt-48">
        <BlogContent posts={posts} />
      </div>
      <Footer />
    </div>
  );
}
