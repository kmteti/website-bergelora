/**
 * Helper to resolve media URLs directly to high-speed Supabase Object Storage CDN
 * or local fallback.
 */
export function getMediaUrl(image: any): string {
  if (!image) return '/images/news/placeholder.webp'
  
  if (typeof image === 'string') {
    if (image.startsWith('/api/media/file/')) {
      const filename = image.replace('/api/media/file/', '')
      return `https://ejvqynochdmikjcdqvuu.supabase.co/storage/v1/object/public/kmteti-bucket/${filename}`
    }
    return image
  }

  if (typeof image === 'object') {
    if (image.filename) {
      return `https://ejvqynochdmikjcdqvuu.supabase.co/storage/v1/object/public/kmteti-bucket/${encodeURIComponent(image.filename)}`
    }
    if (image.url) {
      if (image.url.startsWith('/api/media/file/')) {
        const filename = image.url.replace('/api/media/file/', '')
        return `https://ejvqynochdmikjcdqvuu.supabase.co/storage/v1/object/public/kmteti-bucket/${filename}`
      }
      return image.url
    }
  }

  return '/images/news/placeholder.webp'
}
