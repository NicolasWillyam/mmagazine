import { MenuIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'category',
  title: 'Category',
  icon: MenuIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    // defineField({
    //   name: 'description',
    //   title: 'Description',
    //   type: 'text',
    // }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    // defineField({
    //   name: 'picture',
    //   title: 'Picture',
    //   type: 'image',
    //   fields: [
    //     {
    //       name: 'alt',
    //       type: 'string',
    //       title: 'Alternative text',
    //       description: 'Important for SEO and accessiblity.',
    //     },
    //   ],
    //   options: { hotspot: true },
    //   //   validation: (rule) => rule.required(),
    // }),
  ],
})
