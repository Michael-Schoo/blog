import config from '#/config'
import { compareDesc } from 'date-fns'
import { TableOfContentsItem } from './components/sidebar/TableOfContents'
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

export function getTableOfContents(mdxCode: string): TableOfContentsItem[] {
    const lines = mdxCode.split('\n')

    let lvTop = 1;

    const items = []
    for (const [id, heading] of lines.entries()) {
        const result = heading.match(/^(#+) (.*)/);
        if (!result) continue;

        // check codeblock (check if ``` is an even number)
        const codeBlock = lines.slice(0, id).filter((line) => line.startsWith('```'));
        if (codeBlock && codeBlock.length % 2 === 1) continue;

        const level = result[1].length;
        const title = result[2].trim();
        const hash = simplifyHeading(title);

        // modify lvTop
        if (level < lvTop) {
            lvTop = level;
        }

        items.push({
            level,
            title,
            hash,
        });
    }

    const result: TableOfContentsItem[] = [];
    const stack: (TableOfContentsItem & { level: number })[] = [];

    for (const item of items) {
        const { level, title, hash } = item;
        const newItem: TableOfContentsItem & { level: number } = { title, hash, items: [], level };

        // pops everything that is greater than or equal to level
        while (stack.length > 0 && stack[stack.length - 1].level >= level) {
            stack.pop();
        }

        if (stack.length > 0) {
            stack[stack.length - 1].items.push(newItem);
        } else {
            result.push(newItem);
        }

        stack.push(newItem);
    }


    return result;
}

const lower = (str: string) => str.toLowerCase();


export function getPosts(filter: { tags?: string[], categories?: string[], limit?: number, offset?: number, postNotIn?: string[] } = {}, sort: { date?: 'asc' | 'desc' } = { date: 'asc' },) {
    let posts = [...allPosts];

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