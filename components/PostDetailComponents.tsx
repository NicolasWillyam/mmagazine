'use client'
import Date from 'components/PostDate'
import { Category } from 'lib/sanity.queries'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export function CategoryNameComponent({ category }: { category: Category }) {
  return (
    <Link href={`/${category.slug}`}>
      <p className="uppercase text-sm sm:text-lg epilogue-300">
        {category.name}
      </p>
    </Link>
  )
}

export function TitleComponent({
  slug,
  title,
  description,
}: {
  slug: string
  title: string
  description: string
}) {
  return (
    <Link href={`/posts/${slug}`}>
      <p className="text-[20px] leading-[24px] sm:text-2xl sm:leading-[30px] md:text-xl xl:text-2xl xl:leading-[30px] ">
        {title}
      </p>
      <p className="my-3 sm:hidden">{description}</p>
    </Link>
  )
}

export function PostedComponent({
  date,
  author,
}: {
  date: string
  author: string
}) {
  return (
    <p className="text-sm">
      <span>
        <Date dateString={date} />
      </span>{' '}
      by <span>{author}</span>
    </p>
  )
}

export function PostDetails({
  category,
  title,
  description,
  slug,
  date,
  author,
}: {
  category: Category
  title: string
  description: string
  slug: string
  date: string
  author: string
}) {
  return (
    <>
      <CategoryNameComponent category={category} />
      <TitleComponent title={title} description={description} slug={slug} />
      <PostedComponent date={date} author={author} />
    </>
  )
}
