import { NextResponse } from 'next/server'
import { Post } from "contentlayer/generated";
import { getPosts } from '#/helper';


export async function GET() {
    // const data = await res.json()

    return NextResponse.json(getPosts().map((post: Post) => ({
        content: post.body.raw,
        title: post.title,
        date: post.date,
        slug: post.url,
        tags: post.tags,
        categories: post.categories
    })))
}