import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'kodetech',

  projectId: '41d3oo8n',
  dataset: 'kodetech',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
