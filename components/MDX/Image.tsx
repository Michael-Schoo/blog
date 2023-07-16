export function Image({ src, alt }: { src: string, alt: string }) {
    if (src.startsWith('./')) {
        
    }

    return (
        <>
            {/* <p className="no-text"> */}
                <div className="gallery">
                    <figure className="gallery-image">
                        <a href={src} target="_blank">
                            <img src={src} alt={alt} className="gallery-image" loading="lazy" />
                        </a>
                        <figcaption>{alt}</figcaption>
                    </figure>
                </div>
            {/* </p> */}
        </>
    )
}