/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path are handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import { NextStudio } from 'next-sanity/studio';
import config from '../../../../sanity.config'; // Updated import path

export const dynamic = 'force-dynamic'; // Allow dynamic fetching for real-time updates
export const metadata = {
  title: 'MediSwift Studio',
  description: 'Admin panel for managing MediSwift content',
};

export default function StudioPage() {
  return <NextStudio config={config} />;
}

