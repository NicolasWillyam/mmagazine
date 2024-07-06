import { BookIcon } from '@sanity/icons'
import { format, parseISO } from 'date-fns'
import { defineField, defineType } from 'sanity'

import authorType from './author'
import categoryType from './category'

export default defineType({
  name: 'post',
  title: 'Post',
  icon: BookIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Image caption',
              description: 'Caption displayed below the image.',
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Important for SEO and accessibility.',
            },
          ],
        },
        {
          name: 'video',
          type: 'file',
          title: 'Video',
          description: 'Upload a video file.',
          options: {
            accept: 'video/*', // Specify accepted file types, e.g., 'video/mp4'
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Video Caption',
              description: 'Caption displayed below the video.',
            },
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative text',
              description: 'Important for SEO and accessibility.',
            },
          ],
        },
        {
          type: 'document',
          name: 'product',
          title: 'Product',
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Product Caption',
              description: 'Caption displayed below the image.',
            },
            {
              type: 'array',
              name: 'product',
              title: 'Product',
              of: [
                {
                  type: 'object',
                  name: 'product',
                  title: 'Product Item',
                  fields: [
                    {
                      name: 'type',
                      type: 'string',
                      title: 'Type',
                      options: {
                        list: [
                          // { title: 'Image', value: 'image' },
                          { title: 'Product', value: 'product' },
                          // Add other content types as needed
                        ],
                      },
                    },
                    // {
                    //   name: 'image',
                    //   type: 'image',
                    //   title: 'Image',
                    //   hidden: ({ parent }) => parent.type !== 'image', // Only show if type is 'image'
                    // },
                    // Add fields specific to each type of content item
                    {
                      name: 'image',
                      type: 'image',
                      title: 'Product Image',
                      options: {
                        hotspot: true,
                      },
                      hidden: ({ parent }) => parent.type !== 'product', // Only show if type is 'product'
                    },
                    {
                      name: 'name',
                      type: 'string',
                      title: 'Name',
                      hidden: ({ parent }) => parent.type !== 'product', // Only show if type is 'product'
                    },
                    {
                      name: 'brand',
                      type: 'string',
                      title: 'Brand',
                      hidden: ({ parent }) => parent.type !== 'product', // Only show if type is 'product'
                    },
                    {
                      name: 'price',
                      type: 'number',
                      title: 'Price',
                      hidden: ({ parent }) => parent.type !== 'product', // Only show if type is 'product'
                    },
                    {
                      name: 'product_link',
                      type: 'url',
                      title: 'Product link',
                      description: 'URL product link to the product.',
                      hidden: ({ parent }) => parent.type !== 'product', // Only show if type is 'product'
                    },
                    {
                      name: 'order_link',
                      type: 'url',
                      title: 'Order link',
                      description: 'URL order link to the product.',
                      hidden: ({ parent }) => parent.type !== 'product', // Only show if type is 'product'
                    },
                    {
                      name: 'alt',
                      type: 'string',
                      title: 'Alternative text',
                      description: 'Important for SEO and accessibility.',
                      hidden: ({ parent }) => parent.type !== 'product', // Only show if type is 'product'
                    },
                    // Add more fields as needed for other content types
                  ],
                },
              ],
            },
          ],
        },

        // {
        //   type: 'object',
        //   name: 'productCard',
        //   title: 'Product Card',
        //   fields: [
        //     {
        //       name: 'image',
        //       type: 'image',
        //       title: 'Product Image',
        //       options: {
        //         hotspot: true,
        //       },
        //     },
        //     {
        //       name: 'link',
        //       type: 'url',
        //       title: 'Product Link',
        //       description: 'URL link to the product.',
        //     },
        //   ],
        // },
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: authorType.name }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: categoryType.name }],
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      category: 'category.title', // Fetching category title
      date: 'date',
      media: 'coverImage',
    },
    prepare({ title, media, author, date, category }) {
      const subtitles = [
        author && `by ${author}`,
        category && `in ${category}`, // Displaying category in preview
        date && `on ${format(parseISO(date), 'LLL d, yyyy')}`,
      ].filter(Boolean)

      return { title, media, subtitle: subtitles.join(' ') }
    },
  },
})
