import config from '#/config';
import Link from 'next/link';
import LeftMainMenu from './LeftMainMenu';
import GetIcon from '../icons/Icon';


export default function LeftSidebar() {
    return (
        <aside className="sidebar left-sidebar sticky">
            <button className="hamburger hamburger--spin" type="button" id="toggle-menu" aria-label="toggleMenu">
                <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                </span>
            </button>

            <header>
                {config.sidebar.avatar && (
                    <figure className="site-avatar">
                        <Link href="/">
                            <img src={config.sidebar.avatar} width="300" height="300" className="site-logo" loading="lazy" alt="Avatar"></img>
                        </Link>
                        {config.sidebar?.emoji && (
                            <span className="emoji">{config.sidebar?.emoji}</span>
                        )}
                    </figure>
                )}
                <div className="site-meta">
                    <h1 className="site-name">
                        <Link href="/">{config.title}</Link>
                    </h1>
                    <h2 className="site-description">{config.sidebar.subtitle}</h2>
                </div>
            </header>

            {!!config.socials.length && (
                <ol className="social-menu">
                    {config.socials.map((social, index) => (
                        <li key={social.name}>
                            <a
                                href={social.url} 
                                title={social.name}
                                target="_blank"
                                rel="me"
                            >
                                <GetIcon iconName={social.icon} />
                            </a>
                        </li>
                    ))}
                </ol>
            )}

            <LeftMainMenu />

        </aside>

    )
}