import type { MetadataRoute } from 'next';
const routes = ['', '/services', '/gallery', '/about', '/contact'];
export default function sitemap(): MetadataRoute.Sitemap { return routes.map((route) => ({ url: `https://www.elitehomeav.com${route}`, lastModified: new Date(), changeFrequency: 'monthly', priority: route === '' ? 1 : 0.7 })); }
