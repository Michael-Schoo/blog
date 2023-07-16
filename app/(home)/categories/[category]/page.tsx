import { FilteredList } from "#/components/SectionList";
import config from "#/config";
import { getPosts } from "#/helper";
import { Metadata } from "next";

export default function Category({ params }: { params: { category: string } }) {
    const categoryInfo = config.categories.find((category) => category.slug === params.category);
    const posts = getPosts({ categories: [categoryInfo.slug, categoryInfo.name] });

    return (
        <FilteredList category={categoryInfo} posts={posts} mainName="Categories" />
    )
}

export const generateStaticParams = async () => config.categories.map((category) => ({ category: category.slug }))

export async function generateMetadata({ params }): Promise<Metadata> {
    const categoryInfo = config.categories.find((category) => category.slug === params.category);
    return {
        title: `Category: ${categoryInfo.name}`,
        description: categoryInfo.description,
        alternates: {
            canonical: `/categories/${categoryInfo.slug}`,
        },
        openGraph: {
            title: `Category: ${categoryInfo.name}`,
            description: categoryInfo.description,
            url: `/categories/${categoryInfo.slug}`,
        },
        twitter: {
            title: `Category: ${categoryInfo.name}`,
        },
    };
}