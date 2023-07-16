import { ItemList } from "#/components/SectionList";
import config from "#/config";
import { getPosts } from "#/helper";
import { Metadata } from "next";


export default function Tags() {
    const items = config.tags.map((tag) => ({ name: tag.name, slug: tag.slug, description: tag.description, url: `/tags/${tag.slug}`, lastModified: '' }));
    // add last modified (based on latest post in that tag)
    items.forEach((item) => {
        const posts = getPosts({ tags: [item.slug, item.name] })
        const latestPost = posts[0]
        if (latestPost) {
            item.lastModified = latestPost.date.toString();
        }
    });

    return (
        <ItemList items={items} mainName="Tags" />
    )
}

export const metadata: Metadata = {
    title: "Tags",
    description: "List of all tags",
    alternates: {
        canonical: '/tags',
    },
    openGraph: {
        title: "Tags",
        description: "List of all tags",
        url: '/tags',
    },
    twitter: {
        title: "Tags",
    },
}