'use client'
import Date from 'components/PostDate'
import { Category } from 'lib/sanity.queries'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { nameToSlug } from 'utils/function'

export function CategoryNameComponent({ category }: { category: Category }) {
  return (
    <Link href={`/${nameToSlug(category.name)}`}>
      <p className="uppercase text-sm sm:text-lg epilogue hover:text-black/70 duration-300">
        {category.name}
      </p>
    </Link>
  )
}

export function TitleComponent({
  // slug,
  title,
  fontSize,
  // description,
}: {
  // slug: string
  title: string
  fontSize: number
  // description: string
}) {
  return (
    <p className={`text-[${fontSize}px] leading-none sfu-font mt-4`}>{title}</p>
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
      <PostedComponent date={date} author={author} />
    </>
  )
}
