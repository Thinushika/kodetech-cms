import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'caseStudies',
  title: 'Case Studies',
  type: 'document',
  fields: [
    defineField({
      name: 'caseName',
      title: 'Case Name',
      type: 'string',
    }),
    defineField({
      name: 'projectUrl',
      title: 'Project Url',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'caseName',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'clientLogo',
      title: 'Company Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'mainImage',
      title: 'Laptop image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'tabImage',
      title: 'Tab image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    defineField({
      name: 'feturedText',
      title: 'Fetured Text',
      type: 'string',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
  ],
})
