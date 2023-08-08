import config from '#/config'
import { compareDesc } from 'date-fns'
import { allPosts } from 'contentlayer/generated'

export function getTagInfo(tag: string) {
    return config.tags.find((t) => t.slug === tag || t.name === tag) || { name: tag, slug: '#', style: {} }
}

export function getCategoryInfo(category: string) {
    return config.categories.find((c) => c.slug === category || c.name === category) || { name: category, slug: '#', style: {} }
}

export function formatDate(date: string): string {
    // returns Jan 01, 2022
    return new Date(date).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    })

}

export function simplifyHeading(heading: string): string {
    return heading.replace(/[^a-zA-Z0-9 ]/g, '').replace(/ /g, '-').toLowerCase()
}

export interface HeadingData {
    level: number;
    slug: string;
    text: string;
}

export interface HeadingNode extends HeadingData {
    children: HeadingNode[];
}

// Serialize heading data into a hierarchical tree structure where lower level headings are children of higher level headings.
export function serializeHeadings(headings: HeadingData[]): HeadingNode[] {
    const tree: HeadingNode[] = [];
    const stack: HeadingNode[] = [];

    for (const heading of headings) {
        const node: HeadingNode = {
            level: heading.level,
            text: heading.text,
            slug: heading.slug,
            children: [],
        };

        while (stack.length > 0 && stack.at(-1)!.level >= node.level) {
            stack.pop();
        }

        if (stack.length === 0) {
            tree.push(node);
        } else {
            stack.at(-1)!.children.push(node);
        }

        stack.push(node);
    }

    return tree;
}

const lower = (str: string) => str.toLowerCase();


export function getPosts(filter: { tags?: string[], categories?: string[], limit?: number, offset?: number, postNotIn?: string[] } = {}, sort: { date?: 'asc' | 'desc'} = { date: 'asc' }) {
    let posts = [...allPosts];

    // sort alphabetically
    posts.sort((a, b) => a.title.localeCompare(b.title));

    // sort
    if (sort.date === 'asc') {
        posts = posts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
    } else if (sort.date === 'desc') {
        posts = posts.sort((a, b) => compareDesc(new Date(b.date), new Date(a.date)));
    }

    // remove \r from tags and categories
    posts = posts.map((post) => {
        post.tags = post.tags.map((tag) => tag.replace(/\r/g, ''));
        post.categories = post.categories.map((category) => category.replace(/\r/g, ''));
        return post;
    });

    // tags
    if (filter.tags) {
        posts = posts.filter((post) => filter.tags.some((tag) => post.tags.map(lower).includes(tag.toLowerCase())));
    }

    // categories
    if (filter.categories) {
        posts = posts.filter((post) => filter.categories.some((category) => post.categories.map(lower).includes(category.toLowerCase())));
    }
    
    // exclude posts
    if (filter.postNotIn) {
        posts = posts.filter((post) => !filter.postNotIn.includes(post.url));
    }
    
    // limit
    if (filter.limit) {
        posts = posts.slice(filter.offset || 0, filter.limit + (filter.offset || 0));
    }

    // return
    return posts;

}