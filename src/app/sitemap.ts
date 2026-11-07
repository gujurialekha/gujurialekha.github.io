import { MetadataRoute } from 'next';
import { featuredProjects } from '@/data/projects';

// No lastModified: Google only trusts it when it matches real content changes, and a build-time date would not.
// changeFrequency/priority are ignored by Google, so they are left out too.
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://gujurialekha.github.io';

  return [
    { url: `${baseUrl}/` },
    ...featuredProjects.map((project) => ({ url: `${baseUrl}/projects/${project.slug}/` })),
  ];
}
