import { allPosts } from "contentlayer/generated";
import config from "#/config";
import InfinityIcon from "../icons/Infinity";
import TagIcon from "../icons/Tag";
import Link from "next/link";
import Search from "./Search";

export default function RightSidebarHome() {
    const tags = config.tags;
    const years: { year: number, count: number }[] = [];
    for (const post of allPosts) {
        const year = new Date(post.date).getFullYear();
        const yearObj = years.find((y) => y.year == year);
        if (yearObj) {
            yearObj.count++;
        } else {
            years.push({ year: year, count: 1 });
        }
    }


    return (
        <aside className="sidebar right-sidebar sticky">
            <Search />

            <section className="widget archives">
                <div className="widget-icon">
                    <InfinityIcon />
                </div>
                <h2 className="widget-title section-title">Archives</h2>
                <div className="widget-archive--list">
                    {years.reverse().map((year) => (
                        <div className="archives-year" key={year.year}>
                            <Link href={{ pathname: '/archives', hash: year.year.toString() }}>
                                <span className="year">{year.year}</span>
                                <span className="count">{year.count}</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
            <section className="widget tagCloud">
                <div className="widget-icon">
                    <TagIcon />
                </div>
                <h2 className="widget-title section-title">Tags</h2>
                <div className="tagCloud-tags">
                    {tags.map((tag) =>
                        <Link href={`/tags/${tag.slug}/`} key={tag.slug}>
                            {tag.name}
                        </Link>
                    )}
                </div>
            </section>
        </aside>
    );
}
