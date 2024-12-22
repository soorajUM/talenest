import type { MetadataRoute } from 'next'
import connectDB from '../lib/connectDb';
import Tale from '../models/tale';


export async function generateSitemaps() {
  await connectDB();
  const count = await Tale.countDocuments({});
  return [...Array(Math.ceil(count / 1000))].map((_, i) => ({ id: i }))
}

export default async function sitemap({
  id,
}: {
  id: number
}): Promise<MetadataRoute.Sitemap> {
  await connectDB();
  const tales = await Tale.find({}, { slug: 1 }).skip(1000 * id).limit(1000);
  return tales.map((tale) => {
    return {
      url: `https://www.talenest.in/tale/${encodeURIComponent(tale.slug)}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    }
  })
}