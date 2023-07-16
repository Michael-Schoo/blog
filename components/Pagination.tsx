import Link from "next/link";


export default function Pagination({ pageNumber, totalPages, slug }: { pageNumber: number; totalPages: number, slug: string }) {
    const pagination = generatePagination(pageNumber, totalPages);

    return (
        <nav className="pagination">
            {pagination.map((page, index) => (
                <PaginationItem key={page} pageNumber={page} active={page == pageNumber} slug={slug} />
            ))}

        </nav>

    )
}


function PaginationItem({ pageNumber, slug, active }: { pageNumber: number | string, slug: string, active?: boolean }) {
    if (pageNumber === '...') {
        return <span className="page-link dots">…</span>
    }

    return (
        <Link href={`${slug}page/${pageNumber}/`} className={`page-link ${active ? 'current' : ''}`}>
            {pageNumber}
        </Link>
    );
}


// nav pagination shown =
// - *1*, 2, ..., 17 (if pageNumber = 1)
// - 1, *2*, 3, ..., 17 (if pageNumber = 2)
// - 1, 2, *3*, 4, ..., 17 (if pageNumber = 3)
// - 1, ..., 3, 4, 5, ..., 17 (if pageNumber = 4)
// - 1, ..., 16, *17*, (if pageNumber = 17)
function generatePagination(currentPage: number, totalPages: number): (number | string)[] {
    const startRage = Math.max(1, currentPage - 1);
    const endRage = Math.min(totalPages, currentPage + 1);

    const pagination = [];
    for (let page = 1; page <= totalPages; page++) {
        // the first page
        if (page === currentPage) {
            pagination.push(page);
        }

        // the first and last page
        else if (page === 1 || page === totalPages) {
            pagination.push(page);
        }

        // +/- 1 page from the current page
        else if (startRage <= page && page <= endRage) {
            pagination.push(page);
        } 
        
        // add dots between pages (but only if the last page isn't already a dot)
        else if (pagination[pagination.length - 1] !== "...") {
            pagination.push("...");
        }
        
        // nothing else to do
        else {
            continue;
        }
    }

    return pagination;
}
