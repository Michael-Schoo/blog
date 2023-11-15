'use client';

import { usePathname } from "next/navigation";
import { addBasePath } from "next/dist/client/add-base-path";

export function Image({ src, alt }: { src: string, alt: string }) {
    if (src.startsWith('./')) {
        
    }
    const pathname = usePathname();
    const newSrc = addBasePath(pathname + src.replace('./', ''));

    return (
        <>
            {/* <p className="no-text"> */}
                <div className="gallery">
                    <figure className="gallery-image">
                        <a href={newSrc} target="_blank">
                            <img src={newSrc} alt={alt} className="gallery-image" loading="lazy" />
                        </a>
                        <figcaption>{alt}</figcaption>
                    </figure>
                </div>
            {/* </p> */}
        </>
    )
}