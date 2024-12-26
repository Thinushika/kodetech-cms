import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'general',
  title: 'General Informations',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'logoDark',
      title: 'Logo Dark',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'logoLight',
      title: 'Logo Light',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'contactNumbers',
      title: 'Contact Numbers',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'socialLink',
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
      name: 'sectorCount',
      title: 'Sector Count',
      type: 'number',
    }),
    defineField({
      name: 'countryCount',
      title: 'Country Count',
      type: 'number',
    }),
  ],
})
