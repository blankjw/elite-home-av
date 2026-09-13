import type { MetadataRoute } from 'next';

// Stable revision date: changing this on every build teaches crawlers to ignore
// the sitemap lastModified signal, so it is bumped deliberately instead.
const LAST_REVIEWED = new Date('2026-09-13T00:00:00.000Z');

const routes: ReadonlyArray<readonly [string, number]> = [
  ['', 1],
  ['/services', 0.9],
  ['/services/audio', 0.8],
  ['/services/theater', 0.8],
  ['/services/lighting', 0.8],
  ['/services/surveillance', 0.8],
  ['/services/automation', 0.8],
  ['/services/networking', 0.8],
  ['/service-area', 0.8],
  ['/service-area/lumberton', 0.7],
  ['/service-area/beaumont', 0.7],
  ['/gallery', 0.7],
  ['/care', 0.8],
  ['/about', 0.6],
  ['/contact', 0.9],
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(([route, priority]) => ({
    url: `https://www.elitehomeav.com${route}`,
    lastModified: LAST_REVIEWED,
    changeFrequency: 'monthly',
    priority,
  }));
}
