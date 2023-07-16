import { allPosts } from 'contentlayer/generated'
import { getMDXComponent } from 'next-contentlayer/hooks'
import { notFound } from 'next/navigation'
import TableOfContentsSidebar from '#/components/sidebar/TableOfContents'
import Footer from '#/components/Footer'
import ArticleListItem, { } from '#/components/ArticleListItem'
import { getTableOfContents, getTagInfo, simplifyHeading } from '#/helper'
import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import CopyCodeButton from '#/components/MDX/CopyCodeButton'
import { Image } from '#/components/MDX/Image'
import Clock from '#/components/MDX/Clock'
import { Metadata } from 'next'
import config from '#/config'

export const generateStaticParams = async () => allPosts.map((post) => ({ slug: post._raw.flattenedPath.replaceAll(' ', '-').split('/') }))

export const generateMetadata = ({ params }): Metadata => {
  const post = allPosts.find((post) => post._raw.flattenedPath.replaceAll(' ', '-') === params.slug.join('/'))

  const url = `/p/${post._raw.flattenedPath.replaceAll(' ', '-')}`

  return {
    title: post.title,
    alternates: {
      canonical: url
    },
    description: post.description,
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      url: url,
      modifiedTime: new Date(post.date).toISOString(),
      publishedTime: new Date(post.date).toISOString(),
      tags: post.tags.map((tag) => getTagInfo(tag).name),
      authors: [config.footer.name]
    },
    twitter: {
      title: post.title,
      description: post.description,
    },
  }
}



// Define your custom MDX components.
const mdxComponents: MDXComponents = {
  // Override the default <a> element to use the next/link component.
  a: ({ href, children }) => <Link href={href} className='link'>{children}</Link>,
  // Add a custom component.
  MyComponent: () => <div>Hello World!</div>,

  // headings (add id to headings)
  h1: ({ children }) => <h1 id={simplifyHeading(children.toString())}>{children}</h1>,
  h2: ({ children }) => <h2 id={simplifyHeading(children.toString())}>{children}</h2>,
  h3: ({ children }) => <h3 id={simplifyHeading(children.toString())}>{children}</h3>,
  h4: ({ children }) => <h4 id={simplifyHeading(children.toString())}>{children}</h4>,
  h5: ({ children }) => <h5 id={simplifyHeading(children.toString())}>{children}</h5>,

  // add copy button to code blocks
  pre: ({ children }) => <CopyCodeButton>{children}</CopyCodeButton>,

  // better image formatting
  img: ({ src, alt, }) => <Image src={src} alt={alt} />,

  Clock: () => <Clock />,
}


const PostLayout = ({ params }: { params: { slug: string[] } }) => {

  const post = allPosts.find((post) => post._raw.flattenedPath.replaceAll(' ', '-') === params.slug.join('/'))

  if (!post) return notFound();

  const Content = getMDXComponent(post.body.code)

  const tableOfContents = getTableOfContents(post.body.raw)

  return (
    <>
      <TableOfContentsSidebar items={tableOfContents} />

      <main className='article-page main full-width'>
        <ArticleListItem post={post} mainArticle>
          <section className='article-content'>
            <Content components={mdxComponents} />
          </section>

          <footer className="article-footer">
            <section className="article-tags">
              {post.tags.map(tag => getTagInfo(tag)).map((tag) => (
                <Link key={tag.slug} href={`/tags/${tag.slug == '#' ? '' : tag.slug}`}>
                  {tag.name}
                </Link>
              ))}
            </section>
          </footer>
        </ArticleListItem>
        
        <Footer />
      </main>
    </>


  )
}

export default PostLayout
