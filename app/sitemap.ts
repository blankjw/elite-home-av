import type { MetadataRoute } from 'next';

// Stable revision date: changing this on every build teaches crawlers to ignore
// the sitemap lastModified signal, so it is bumped deliberately instead.
const LAST_REVIEWED = new Date('2026-09-13T00:00:00.000Z');
const REVIEWED_2026_10_21 = new Date('2026-10-21T00:00:00.000Z');

const routes: ReadonlyArray<readonly [string, number, Date?]> = [
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
  ['/service-area/beaumont/home-theater', 0.8, REVIEWED_2026_10_21],
  ['/lake-house-tech-toledo-bend-sam-rayburn', 0.8, REVIEWED_2026_10_21],
  ['/gallery', 0.7],
  ['/care', 0.8],
  ['/about', 0.6],
  ['/contact', 0.9],
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map(([route, priority, reviewed]) => ({
    url: `https://www.elitehomeav.com${route}`,
    lastModified: reviewed ?? LAST_REVIEWED,
    changeFrequency: 'monthly',
    priority,
  }));
}
