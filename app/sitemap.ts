import { MetadataRoute } from 'next'
import { getPosts } from '#/helper'
import config from '#/config'

export default function sitemap(): MetadataRoute.Sitemap {
    const posts = getPosts()

    return [
        {
            url: `${config.baseUrl}/`,
            // lastModified: new Date(),
        },
        ...posts.map((post) => ({
            url: `${config.baseUrl}${post.url}`,
            lastModified: post.date,
        })),


    ]
}