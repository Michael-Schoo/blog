import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import highlight from 'rehype-highlight'
import remarkUnwrapImages from 'remark-unwrap-images'
import remarkGfm from 'remark-gfm'


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
        url: {
            type: 'string',
            resolve: (doc) => `/p/${doc._raw.flattenedPath.replaceAll(' ', '-')}`,
        },
        readingTime: {
            type: 'string',
            resolve: (doc) => calculateReadingTime(doc.body.raw),
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