
export interface TagConfig {
    name: string;
    description: string;
    slug: string;
    image?: string;
}

export interface CategoryConfig {
    name: string;
    description: string;
    style?: {
        backgroundColor: string;
        color: string;
    };
    slug: string;
    image?: string;
}

export interface SocialConfig {
    name: string;
    url: string;
    icon: string;
}

export interface MenuItemConfig {
    name: string;
    url: string;
    icon: string;
    /** adds rel="me" */
    social?: boolean;
}

export const tags: TagConfig[] = [
    {
        name: 'From Assignments',
        description: 'The blogs made from an assignment in IT',
        slug: 'from-assignments',
    },
    {
        name: 'From Tasks',
        description: 'The blogs made from the tasks required in-class',
        slug: 'from-tasks',
    },
    {
        name: 'Intro',
        description: 'The introduction blogs for each category',
        slug: 'intro',
    },
    {
        name: 'Programming',
        description: 'The blogs made from assignments that have coding component in them',
        slug: 'programming',
    },
    {
        name: 'Research Report',
        description: 'The blogs made from research report assignments',
        slug: 'research-report',
    },
    {
        name: 'In-class',
        description: 'The blogs made from in-class tests',
        slug: 'in-class',
    }
]

export const categories: CategoryConfig[] = [
    {
        name: 'Data Science',
        description: 'The posts that I have written about data science',
        style: {
            backgroundColor: '#ff6961',
            color: '#fff',
        },
        slug: 'data-science',
        image: 'https://insidebigdata.com/wp-content/uploads/2019/04/DataScience_shutterstock_1054542323.jpg'
    },
    {
        name: 'Web Development',
        description: 'The posts that I have written about web development',
        style: {
            backgroundColor: '#3065ac',
            color: '#fff',
        },
        slug: 'web-dev',
        image: 'https://alvarotrigo.com/blog/assets/imgs/2021-11-30/web-developer-top-skills.webp',
    },
]

export const socials: SocialConfig[] = [
    // {
    //     name: 'GitHub',
    //     url: 'https://github.com/Michael-Schoo',
    //     icon: 'github',
    // },
]

export const menuItems: MenuItemConfig[] = [
    {
        name: 'Home',
        url: '/',
        icon: 'home',
    },
    {
        name: 'About',
        url: '/about',
        icon: 'user',
    },
    {
        name: 'Archives',
        url: '/archives',
        icon: 'archive',
    },
    // {
    //     name: 'Search',
    //     url: '/search',
    //     icon: 'search',
    // },
    {
        name: 'GitHub',
        url: 'https://github.com/Michael-Schoo',
        icon: 'github',
        social: true
    },
]

const about = <p>
    {"Hello this blog is dedicated for "}
    <Link href="/categories/web-dev" className="link">web dev</Link>
    {" and "}
    <Link href="/categories/data-science" className="link">data science</Link>
    {" (IT at school). "}
    My IT teacher is requiring me to write a post every week, because I do 2 subjects (web dev and data science),
    I will be writing 2 blog posts every week (monday).
</p>



import { addBasePath } from "next/dist/client/add-base-path";
import Link from "next/link";

const config = {
    tags,
    categories,
    socials,
    menuItems,
    sidebar: {
        avatar: addBasePath('/images/img.jpg'),
        emoji: '🏫',
        subtitle: 'A blog for IT at school',
    },
    baseUrl: 'https://Michael-Schoo.github.io/blog',
    title: 'Michael Blog',
    footer: {
        name: 'Michael H',
        link: 'https://github.com/Michael-Schoo'
    },
    about

}


export default config
