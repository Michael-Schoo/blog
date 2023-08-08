import { Metadata } from "next";

export default function NotFound() {
    return (
        <main className="main full-width">
            <div className="not-found-card">
                <h1 className="article-title">Not Found</h1>
                <h2 className="article-subtitle">This page does not exist</h2>
            </div>
        </main>
    )
}

export const metadata: Metadata = {
    title: '404 Page not found',
}