import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'services',
  title: 'Our Services',
  type: 'document',
  fields: [
    defineField({
      name: 'serviceName',
      title: 'Service Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'serviceName',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Inner Page Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'feturedText',
      title: 'Fetured Text',
      type: 'string',
    }),
    defineField({
      name: 'techStack',
      title: 'Tech Stack',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'techStack',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
            },
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            {
              name: 'link',
              title: 'Link',
              type: 'url',
            },
          ],
        },
      ],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],
})
