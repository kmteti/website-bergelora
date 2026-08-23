import { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'
import { SITE_URL } from '@/lib/site'
import { bsoData } from '@/modules/bso/data/data'
import { divisi } from '@/modules/divisi/data/data'
import { eventData } from '@/modules/event/data/data'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_URL

  const payload = await getPayload({ config })
  
  const { docs: news } = await payload.find({
    collection: 'news',
    where: { _status: { equals: 'published' } },
    limit: 1000,
  })

  const staticUrls = [
    ...bsoData.map((b) => `/bso/${b.slug}`),
    ...divisi.map((d) => `/divisi/${d.slug}`),
    ...eventData.map((e) => `/event/${e.slug}`),
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const newsUrls = news.map((post) => ({
    url: `${baseUrl}/tentang/berita/${post.slug}`,
    lastModified: new Date(post.updatedAt || post.createdAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/tentang/profil`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/tentang/berita`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/layanan`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontak`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    ...staticUrls,
    ...newsUrls,
  ]
}
