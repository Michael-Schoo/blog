'use client';

import { useEffect } from "react";
import HashIcon from "../icons/Hash"
import { setupScrollspy } from "./scrollspy";


interface Item {
    hash: string,
    title: string,
    items?: Item[]
}

export type TableOfContentsItem = Item

interface TableOfContentsSidebarProps {
    items: Item[]
}


export default function TableOfContentsSidebar({ items }: TableOfContentsSidebarProps) {
    if (!items?.length) {
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
                            {items.map((item) => <TOCItem item={item} key={item.hash} />)}
                        </ol>
                    </nav>

                </div>

            </section>

        </aside>
    )
}

function TOCItem({ item }: { item: Item }) {
    return (

        <li>
            <a href={`#${item.hash}`}>
                {item.title}
            </a>

            {!!item.items.length && (
                <ol>
                    {item.items.map((item) => (
                        <TOCItem item={item} key={item.hash} />
                    ))}
                </ol>
            )}
        </li>
    )
}




