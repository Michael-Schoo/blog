'use client';

import config from '#/config';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import GetIcon from '../icons/Icon';
import { useEffect } from 'react';
import { slideToggle } from './menu'

export default function LeftMainMenu() {
    const pathname = usePathname();

    useEffect(() => {

        const eventListener = () => {
            if (document.getElementById('main-menu').classList.contains('transiting')) return;
            document.body.classList.toggle('show-menu');
            slideToggle(document.getElementById('main-menu'), 300);
            toggleMenu.classList.toggle('is-active');
        }

        const toggleMenu = document.getElementById('toggle-menu');
        if (toggleMenu) {
            toggleMenu.addEventListener('click', eventListener);
        }

        return () => {
            return toggleMenu.removeEventListener('click', eventListener);
        }

    }, []);


    const itemOptions = (str: string) => {
        // trailing slash and no trailing slash
        if (str.endsWith('/')) {
            return [str.slice(0, -1), str];
        }
        return [str, str + '/'];
    }


    return (
        <ol className="menu" id="main-menu">
            {config.menuItems.map((item, index) => (
                <li className={itemOptions(item.url).includes(pathname) ? 'current' : undefined} key={item.name}>
                    {item.url.startsWith('/') ? (
                        <Link href={item.url}>
                            <GetIcon iconName={item.icon} />
                            <span>{item.name}</span>
                        </Link>
                    ) : (
                        <a href={item.url} target="_blank" rel={item.social ? 'me' : undefined}>
                            <GetIcon iconName={item.icon} />
                            <span>{item.name}</span>
                        </a>
                    )}

                </li>

            ))}

            {/* i18n-switch and dark-mode-toggle */}

        </ol>

    )
}
