import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://gujurialekha.github.io';
  return {
    // Every crawler allowed, AI ones (GPTBot, ClaudeBot, CCBot, Bytespider...) included: the goal is maximum visibility
    rules: [{ userAgent: '*', allow: '/' }],
    // This is the host-root robots.txt, so it also lists the blog's sitemap
    sitemap: [`${baseUrl}/sitemap.xml`, `${baseUrl}/blog/sitemap.xml`],
  };
}
