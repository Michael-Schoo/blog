import Home from "../../page"
import { allPosts } from "contentlayer/generated";


export default Home


export function generateStaticParams() {
    const amountOfPosts = allPosts.length;
    const postsPerPage = 5;
    const totalPages = Math.ceil(amountOfPosts / postsPerPage);

    const paths = [];
    for (let i = 1; i <= totalPages; i++) {
        paths.push({ page: i.toString() });
    }

    return paths;
}

export async function generateMetadata({ params }: { params: { page?: string } }) {
    const page = params?.page ? parseInt(params.page) : 1;
    
    return {
        title: `Page ${page}`,
        alternates: {
            canonical: page === 1 ? '/' : `/page/${page}`,
        },
        openGraph: {
            title: `Page ${page}`,
            url: page === 1 ? '/' : `/page/${page}`,
        },
        twitter: {
            title: `Page ${page}`,
        },
    };
}
