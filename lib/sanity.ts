import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'y9go1tpw',
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: true,
})
