import { Image } from "sanity"

interface InventoryBlog {
  id: string
  name: string
  image: string
  images: string[]
  categories: string[]
  sizes: string[]
  colors: string[]
  price: number
  currency: string
  description: string
  sku: string
}

export interface SanityProduct extends Omit<InventoryBlog, "images"> {
  _id: string
  _createdAt: Date
  slug: string
  images: Image[]
}