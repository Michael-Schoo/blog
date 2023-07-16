import Footer from "#/components/Footer";
import { ArchiveList } from "#/components/SectionList";
import { Post, allPosts } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import config from "#/config";
import { Metadata } from "next";
import { getPosts } from "#/helper";

export default function Archives() {
    const postsByYear = getPosts()
        .reduce((acc, post) => {
            const year = new Date(post.date).getFullYear();
            if (!acc[year]) {
                acc[year] = [];
            }
            acc[year].push(post);
            return acc;
        }, {} as Record<string, Post[]>);


    return (
        <main className="main full-width">
            <ArchiveList posts={postsByYear} categories={config.categories} />

            <Footer />

        </main>
    )

}

export const metadata: Metadata = {
    title: "Archives",
    description: "List of all posts",
    alternates: {
        canonical: '/archives',
    },
    openGraph: {
        title: "Archives",
        description: "List of all posts",
        url: '/archives',
    },
    twitter: {
        title: "Archives",
        description: "List of all posts",
    },
}