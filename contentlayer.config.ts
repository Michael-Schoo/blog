import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import highlight from 'rehype-highlight'
import remarkUnwrapImages from 'remark-unwrap-images'
import remarkGfm from 'remark-gfm'
import GithubSlugger from 'github-slugger';


const Post = defineDocumentType(() => ({
    name: 'Post',
    filePathPattern: `**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            description: 'The title of the post',
            required: true,
        },
        date: {
            type: 'date',
            description: 'The date of the post',
            required: true,
        },
        description: {
            type: 'string',
            description: 'The description of the post',
            required: true,
        },
        categories: {
            type: 'list',
            of: {
                type: 'string',
            },
            description: 'The categories of the post',
            required: true,
        },
        tags: {
            type: 'list',
            of: {
                type: 'string',
            },
            description: 'The tags of the post',
            required: true,
        },
        image: {
            type: 'string',
            description: 'The image of the post',
            required: false,
        }
    },
    computedFields: {
        id: {
            type: 'string',
            resolve: (doc) => doc._raw.flattenedPath.replaceAll(' ', '-'),
        },
        url: {
            type: 'string',
            resolve: (doc) => `/p/${doc._raw.flattenedPath.replaceAll(' ', '-')}`,
        },
        readingTime: {
            type: 'string',
            resolve: (doc) => calculateReadingTime(doc.body.raw),
        },
        headings: {
            type: 'json',
            resolve: async (doc) => {

                // first remove code blocks
                const regXCode = /```[\s\S]*?```/g;
                const bodyWithoutCode = doc.body.raw.replaceAll(regXCode, '');

                // get the headings
                const regXHeader = /\n(?<flag>#{1,6})\s+(?<content>.+)/g;
                const slugger = new GithubSlugger();

                return Array.from(bodyWithoutCode.matchAll(regXHeader)).map(({ groups }) => {
                    const content = groups?.content;
                    return {
                        level: groups?.flag?.length,
                        text: content,
                        slug: content && slugger.slug(content),
                    };
                });
            },
        },
    }
}))

export default makeSource({
    contentDirPath: 'posts',
    documentTypes: [Post],
    mdx: {
        rehypePlugins: [
            highlight
        ],
        remarkPlugins: [
            remarkUnwrapImages,
            remarkGfm
        ]
    },
})

export const calculateReadingTime = (text: string) => {
    // Step 2: Determine the average reading speed (words per minute)
    const wordsPerMinute = 200;
    // Step 3: Calculate the word count
    const noOfWords = text.split(/\s/g).length;
    // Step 4: Calculate the estimated reading time (in minutes)
    const minutes = noOfWords / wordsPerMinute;
    const readTime = Math.ceil(minutes);
    // Step 5: Format the output
    return `${readTime} minute read`;
}