import type { MetadataRoute } from 'next'
import connectDB from '../lib/connectDb';
import Tale from '../models/tale';

export default async function robots(): Promise<MetadataRoute.Robots> {
    await connectDB();
    const count = await Tale.countDocuments({});
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: [...Array(Math.ceil(count / 1000))].map((_, i) => `https://www.talenest.in/sitemap/${i}.xml`),
    }
}