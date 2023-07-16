'use client';
import { FormEventHandler } from "react";
import SearchIcon from "../icons/Search";

const baseQuery = `repo:Michael-Schoo/blog path:/^posts\\//`;

export default function Search() {
    const searchSubmit: FormEventHandler<HTMLFormElement> = (element) => {
        element?.preventDefault();
        const form = element.target as HTMLFormElement;
        const input = form.querySelector('input[name="keyword"]') as HTMLInputElement;
        const keyword = input.value;
        const url = `https://github.com/search?q=${baseQuery} ${keyword}`;
        window.open(url, '_blank', 'noopener');
        input.value = '';
    }

    return (
        <form action="https://github.com/search" className="search-form widget" onSubmit={searchSubmit} >
            <p>
                <label>Search</label>
                <input name="keyword" required placeholder="Type something..." />
                <input type="hidden" name="q" value={baseQuery} />
                <button title="Search">
                    <SearchIcon />
                </button>
            </p>
        </form >
    )

}