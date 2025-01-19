import {DocumentTextIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: (input) => input.toLowerCase().replace(/\s+/g, "-").slice(0, 200)
      },
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: {type: 'author'},
    }),
    // time to read
    defineField({
      name: 'timeToRead',
      type: 'number',
      description: 'Time to read in minutes',
    }),
    
    // card realted data like title, description, image, tags, categories, publishedAt
    defineField({
      name: 'cardData',
      type: 'object',
      description: 'Card data for the post used on the blog page',
      fields: [
        defineField({name: 'title', type: 'string'}),
        defineField({name: 'description', type: 'text'}),
        defineField({name: 'image', description: 'image for the post card', type: 'image'}),
        defineField({name: 'categories', type: 'array', of: [{type: 'reference', to: {type: 'category'}}]}),
      ],
    }),

    defineField({
      name: 'mainImage',
      type: 'image',
      description: 'main image for the post used on the blog page',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }
      ]
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [defineArrayMember({type: 'reference', to: {type: 'category'}})],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
    }),
    // // tags
    // defineField({
    //   name: 'tags',
    //   type: 'array',
    //   of: [{type: 'string'}],
    // }),
    //related categories
    defineField({
      name: 'relatedCategories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    // related posts
    defineField({
      name: 'relatedPosts',
      type: 'array',
      of: [{type: 'reference', to: {type: 'post'}}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
