import config from "#/config";
    
export default function Footer() {
    return (
        <footer className="site-footer">
            <section className="copyright">
                {`© ${new Date().getFullYear()} ${config.title}`}
            </section>

            <section className="powerby">
                {'The contents of the website is made by '}
                <a href={config.footer.link} target="_blank">{config.footer.name}</a>
                <br />

                {'Built with '}
                <a href="https://nextjs.org/" target="_blank" rel="noopener">Next.js</a>
                <br />

                {'Theme '}
                <b>
                    <a href="https://github.com/CaiJimmy/hugo-theme-stack" target="_blank" rel="noopener" data-version="3.16.0">
                        Stack
                    </a>
                </b>
                {' designed by '}
                <a href="https://jimmycai.com" target="_blank" rel="noopener">Jimmy</a>
            </section>
        </footer>
    )
}