'use client'
import Date from 'components/PostDate'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export function CategoryNameComponent({ category }: { category: string }) {
  return (
    <Link href={`/${category}`}>
      <p className="uppercase text-base sm:text-lg underline underline-offset-2">
        {category}
      </p>
    </Link>
  )
}

export function TitleComponent({
  slug,
  title,
}: {
  slug: string
  title: string
}) {
  return (
    <Link href={`/posts/${slug}`}>
      <p className="text-[20px] leading-[24px] sm:text-2xl sm:leading-[30px]">
        {title}
      </p>
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
  slug,
  date,
  author,
}: {
  category: string
  title: string
  slug: string
  date: string
  author: string
}) {
  return (
    <>
      <CategoryNameComponent category={category} />
      <TitleComponent title={title} slug={slug} />
      <PostedComponent date={date} author={author} />
    </>
  )
}
