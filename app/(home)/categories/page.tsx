import { ItemList } from "#/components/SectionList";
import config from "#/config";
import { getPosts } from "#/helper";
import { Metadata } from "next";


export default function Categories() {
    const items = config.categories.map((category) => ({ name: category.name, slug: category.slug, description: category.description, url: `/categories/${category.slug}`, lastModified: '' }));
    // add last modified (based on latest post in that category)
    items.forEach((item) => {
        const posts = getPosts({categories: [item.slug, item.name]})
        const latestPost = posts[0]
        if (latestPost) {
            item.lastModified = latestPost.date.toString();
        }
    });

    return (
        <ItemList items={items} mainName="Categories" />
    )
}

export const metadata: Metadata = {
    title: "Categories",
    description: "List of all categories",
    alternates: {
        canonical: '/categories',
    },
    openGraph: {
        title: "Categories",
        description: "List of all categories",
        url: '/categories',
    },
    twitter: {
        title: "Categories",
    },
}