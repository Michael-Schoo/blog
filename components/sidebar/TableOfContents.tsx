'use client';

import { useEffect } from "react";
import HashIcon from "../icons/Hash"
import { setupScrollspy } from "./scrollspy";
import { HeadingNode } from "#/helper";


interface TableOfContentsSidebarProps {
    headings: HeadingNode[]
}

export default function TableOfContentsSidebar({ headings }: TableOfContentsSidebarProps) {
    if (!headings?.length) {
        return null
    }

    useEffect(() => {
        return setupScrollspy();
    }, []);
        

    return (
        <aside className="article-page sidebar right-sidebar sticky">
            <section className="widget archives">
                <div className="widget-icon">
                    <HashIcon />
                </div>
                <h2 className="widget-title section-title">
                    Table of contents
                </h2>

                <div className="widget--toc">
                    <nav id="TableOfContents">
                        <ol>
                            {headings.map((item) => <TOCItem item={item} key={item.slug} />)}
                        </ol>
                    </nav>

                </div>

            </section>

        </aside>
    )
}

function TOCItem({ item }: { item: HeadingNode }) {
    return (

        <li>
            <a href={`#${item.slug}`}>
                {item.text}
            </a>

            {!!item.children.length && (
                <ol>
                    {item.children.map((item) => (
                        <TOCItem item={item} key={item.slug} />
                    ))}
                </ol>
            )}
        </li>
    )
}




