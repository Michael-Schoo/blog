import { FilteredList } from "#/components/SectionList";
import { getPosts, getTagInfo } from "#/helper";
import { allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import config from "#/config";
import { Metadata } from "next";

export default function Tag({ params }: { params: { tag: string } }) {
    const tagInfo = config.tags.find((tag) => tag.slug === params.tag);
    const posts = getPosts({ tags: [tagInfo.slug, tagInfo.name] });

    return (
        <FilteredList category={tagInfo} posts={posts} mainName="Tags" />
    )
}

export const generateStaticParams = async () => config.tags.map((tag) => ({ tag: tag.slug }))

export async function generateMetadata({ params }): Promise<Metadata> {
    const tagInfo = config.tags.find((tag) => tag.slug === params.tag);

    return {
        title: `Tag: ${tagInfo.name}`,
        description: tagInfo.description,
        alternates: {
            canonical: `/tags/${tagInfo.slug}/`,
        },
        openGraph: {
            title: `Tag: ${tagInfo.name}`,
            description: tagInfo.description,
            url: `/tags/${tagInfo.slug}/`,
        },
        twitter: {
            title: `Tag: ${tagInfo.name}`,
        },
    };
}