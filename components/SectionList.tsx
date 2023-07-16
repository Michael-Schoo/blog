import { CategoryConfig, TagConfig } from "#/config";
import { Post } from "contentlayer/generated";
import { ArticleListItemCompact } from "./ArticleListItem";
import Link from "next/link";


interface FilteredListProps {
    posts: Post[],
    category?: CategoryConfig | TagConfig,
    mainName?: string,
}


export function FilteredList({ posts, category, mainName = 'Section' }: FilteredListProps) {
    return (
        <>
            <header>
                <h3 className="section-title">{mainName}</h3>
                <div className="section-card">
                    <div className="section-details">
                        <h3 className="section-count">{posts.length} pages</h3>
                        <h1 className="section-term">{category.name}</h1>
                        <h2 className="section-description">{category.description}</h2>
                    </div>
                    {category.image && (
                        <div className="section-image">
                            <img src={category.image} loading="lazy" width="120" height="120" />
                        </div>
                    )}
                </div>
            </header>

            <section className="article-list--compact">
                {posts.map((post) => (
                    <ArticleListItemCompact item={post} key={post._id} />
                ))}
            </section>
        </>
    )
}

interface ItemListProps {
    items: {
        name: string,
        lastModified: string,
        slug: string,
        url: string,
    }[],
    mainName?: string,
}

export function ItemList({ items, mainName = 'Section' }: ItemListProps) {
    return (
        <>
            <header>
                <h3 className="section-title">{mainName}</h3>
                <div className="section-card">
                    <div className="section-details">
                        <h3 className="section-count">{items.length} pages</h3>
                        <h1 className="section-term">{mainName}</h1>
                    </div>
                </div>
            </header>

            <section className="article-list--compact">
                {items.map((item) => (
                    <ArticleListItemCompact item={{ url: item.url, title: item.name, date: item.lastModified }} key={item.slug} />
                ))}
            </section>
        </>
    )
}

interface ArchiveListProps {
    posts: Record<string, Post[]>,
    categories?: CategoryConfig[],
}


export function ArchiveList({ posts, categories }: ArchiveListProps) {
    return (
        <>
            <header>
                <h3 className="section-title">Categories</h3>

                <div className="subsection-list">
                    <div className="article-list--tile">
                        {categories.map(category => (
                            <article className={category.image && "has-image"} key={category.slug}>
                                <Link href={'/categories/' + category.slug}>
                                    {/* // TODO: implement the gradient */}
                                    {category.image && (
                                        <div className="article-image">
                                            <img loading="lazy" alt={`Featured image of post ${category.name}`}
                                                src={category.image} />
                                        </div>
                                    )}
                                    <div className="article-details">
                                        <h2 className="article-title">
                                            {category.name}
                                        </h2>
                                        {/* <h3 className="article-subtitle">{category.description}</h3> */}
                                    </div>

                                </Link>

                            </article>
                        ))}

                    </div>

                </div>

            </header>

            {Object.entries(posts).reverse().map(([year, posts]) => (
                <div id={year} key={year}>
                    <h2 className="archives-date section-title">
                        {year}
                    </h2>

                    <div className="article-list--compact">
                        {posts.map((post) => (
                            <ArticleListItemCompact item={post} key={post._id} />
                        ))}

                    </div>

                </div>
            ))}

        </>
    )
}   