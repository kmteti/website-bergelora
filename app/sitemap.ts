import { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import { bsoData } from '@/modules/bso/data/data'
import { eventData as staticEventData } from '@/modules/event/data/data'
import { divisi as staticDivisi } from '@/modules/divisi/data/data'
import { PANDUAN_TOPICS } from '@/modules/kontak/data/panduan'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'https://kmteti.org'
  const now = new Date()
  
  let newsUrls: MetadataRoute.Sitemap = []
  let divisiUrls: MetadataRoute.Sitemap = []
  let eventUrls: MetadataRoute.Sitemap = []

  try {
    const payload = await getPayload({ config })
    
    // 1. Fetch published news
    const { docs: news } = await payload.find({
      collection: 'news',
      where: { _status: { equals: 'published' } },
      limit: 1000,
    })

    newsUrls = news.map((post) => ({
      url: `${baseUrl}/tentang/berita/${post.slug}`,
      lastModified: new Date(post.updatedAt || post.createdAt),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))

    // 2. Fetch divisi
    const { docs: divisiList } = await payload.find({
      collection: 'divisi',
      limit: 100,
    })

    const effectiveDivisi = divisiList.length > 0 ? divisiList : staticDivisi
    divisiUrls = effectiveDivisi.map((d) => ({
      url: `${baseUrl}/divisi/${d.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))

    // 3. Fetch events
    const { docs: eventList } = await payload.find({
      collection: 'events',
      limit: 100,
    })

    const effectiveEvents = eventList.length > 0 ? eventList : staticEventData
    eventUrls = effectiveEvents.map((e) => ({
      url: `${baseUrl}/event/${e.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
  } catch {
    // Static fallbacks
    divisiUrls = staticDivisi.map((d) => ({
      url: `${baseUrl}/divisi/${d.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))

    eventUrls = staticEventData.map((e) => ({
      url: `${baseUrl}/event/${e.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
  }

  // 4. BSO URLs
  const bsoUrls: MetadataRoute.Sitemap = bsoData.map((b) => ({
    url: `${baseUrl}/bso/${b.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // 5. Panduan detail URLs
  const panduanUrls: MetadataRoute.Sitemap = PANDUAN_TOPICS.map((p) => ({
    url: `${baseUrl}/kontak/panduan/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tentang/profil`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tentang/berita`,
      lastModified: now,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/layanan`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kalender`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontak`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    ...divisiUrls,
    ...bsoUrls,
    ...eventUrls,
    ...panduanUrls,
    ...newsUrls,
  ]
}
