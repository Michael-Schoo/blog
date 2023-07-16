import { allPosts } from "contentlayer/generated";
import ArticleListItem from "#/components/ArticleListItem";
import Pagination from "#/components/Pagination";
import { notFound, redirect } from "next/navigation";
import { getPosts } from "#/helper";


export default function Home({ params }: { params: { page?: string } }) {
  if (params.page === '1') {
    return redirect('/');
  }

  // get page query params
  const page = params?.page ? parseInt(params.page) : 1;

  // segmented pages (5 posts per page)
  const postsPerPage = 5;

  const posts = getPosts({ limit: 5, offset: (page - 1) * postsPerPage });

  const totalPages = Math.ceil(allPosts.length / postsPerPage);
  if (posts.length === 0 && page !== 1) {
    notFound();
  }

  return (
    <>
      <section className="article-list">
        {posts.map((post) => <ArticleListItem post={post} key={post._id} />)}

      </section>

      <Pagination pageNumber={page} totalPages={totalPages} slug="/" />
    </>

  );
}
