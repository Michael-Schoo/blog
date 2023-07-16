import { getCategoryInfo, formatDate, getTagInfo, getPosts } from "#/helper";
import type { Post } from "contentlayer/generated";
import Link from "next/link";
import CalenderIcon from "./icons/Calendar";
import ClockIcon from "./icons/Clock";


export default function ArticleListItem({ post, children, mainArticle, allowRelatedContent = true }: { post: Post, children?: React.ReactNode, mainArticle?: boolean, allowRelatedContent?: boolean }) {
    const tags = post.tags.map(tag => getTagInfo(tag));
    const categories = post.categories.map(category => getCategoryInfo(category));

    let relatedContent = mainArticle && allowRelatedContent ? getPosts({ categories: post.categories, tags: post.tags, limit: 5, postNotIn: [post._id] }) : [];

    return (
        <>
            <article className={`${post.image ? "has-image " : ''}${mainArticle ? 'main-article' : ''}`}>
                <header className="article-header">
                    {post.image && (
                        <div className="article-image">
                            <Link href={post.url}>
                                <img loading="lazy" alt={`Featured image of post ${post.title}`}
                                    src={post.image}>
                                </img>
                            </Link>
                        </div>
                    )}
                    <div className="article-details">
                        {categories.length > 0 && (
                            <header className="article-category">
                                {categories.map(category =>
                                    <Link key={category.slug == '#' ? category.name : category.slug} href={category.slug !== '#' ? `/categories/${category.slug}` : '#'} style={category.style}>
                                        {category.name}
                                    </Link>
                                )}
                            </header>
                        )}
                        <div className="article-title-wrapper">
                            <h2 className="article-title">
                                <Link href={post.url}>
                                    {post.title}
                                </Link>
                            </h2>
                            <h3 className="article-subtitle">{post.description}</h3>
                        </div>
                        <footer className="article-time">
                            {post.date && (
                                <div>
                                    <CalenderIcon />
                                    <time className="article-time--published" dateTime={post.date}>
                                        {formatDate(post.date)}
                                    </time>
                                </div>
                            )}
                            <div>
                                <ClockIcon />
                                <time className="article-time--reading">
                                    {post.readingTime}
                                </time>
                            </div>
                        </footer>
                    </div>
                </header>

                {children}
            </article>

            {!!relatedContent.length && (
                <aside className="related-content--wrapper">
                    <h2 className="section-title">Related content</h2>
                    <div className="related-content">
                        <div className="flex article-list--tile">
                            {relatedContent.map(post => (
                                <article key={post._id}>
                                    <Link href={post.url}>
                                        <div className="article-details">
                                            <h2 className="article-title">{post.title}</h2>
                                        </div>
                                    </Link>
                                </article>
                            ))}

                        </div>

                    </div>
                </aside>
            )}

        </>
    )
}


interface BasicItemProps {
    item: {
        url: string,
        title: string,
        date: string,
    }
}

export function ArticleListItemCompact({ item }: BasicItemProps) {
    return (
        <article>
            <Link href={item.url}>
                <div className="article-details">
                    <h2 className="article-title">{item.title}</h2>
                    <footer className="article-time">
                        <time dateTime={item.date}>
                            {item.date == '' ? "No posts yet" : formatDate(item.date)}
                        </time>
                    </footer>
                </div>
            </Link>
        </article>
    )
}
