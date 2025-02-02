import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Sanity project ID from .env
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET, // Sanity dataset from .env
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION, // Sanity API version from .env
  token: process.env.NEXT_PUBLIC_SANITY_AUTH_TOKEN, // Sanity auth token from .env
  useCdn: true, // Use CDN for faster reads
})
