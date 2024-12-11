import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const home = {
        url: 'https://petarbenjak.com/',
        lastModified: new Date().toString(),
    }

    return [home]
}