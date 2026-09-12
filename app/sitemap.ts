import type { MetadataRoute } from 'next';
const routes = ['', '/services', '/services/audio', '/services/theater', '/services/lighting', '/services/surveillance', '/services/automation', '/services/networking', '/service-area', '/gallery', '/care', '/about', '/contact'];
export default function sitemap(): MetadataRoute.Sitemap { return routes.map((route) => ({ url: `https://www.elitehomeav.com${route}`, lastModified: new Date(), changeFrequency: 'monthly', priority: route === '' ? 1 : 0.7 })); }
