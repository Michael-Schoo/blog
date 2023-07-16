import ArticleListItem from "#/components/ArticleListItem";
import Footer from "#/components/Footer";
import { Post } from "contentlayer/generated";
import { Metadata } from "next";
import Link from "next/link";
import config from "#/config"


export default function About() {
    const post = {
        title: "About this blog",
        description: undefined,
        tags: [],
        categories: [],
        url: '/about',
        date: undefined,
        readingTime: "Infinite minute read"
    } as Post;

    return (
        <main className='article-page main full-width'>
            <ArticleListItem post={post} mainArticle allowRelatedContent={false}>
                <section className='article-content'>
                    {config.about}
                </section>
            </ArticleListItem>
            <Footer />
        </main>

    )
}

export const metadata: Metadata = {
    title: "About",
    alternates: {
        canonical: '/about',
    },
    openGraph: {
        title: "About",
        url: '/about',
    },
    twitter: {
        title: "About",
    },
}