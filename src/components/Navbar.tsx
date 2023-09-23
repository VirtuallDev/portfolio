'use client'

import useScroll from "@/hooks/useScroll";
import { ThemeSwitcher } from "./ToggleTheme";
import { SECTIONS } from "@/utils/consts";
import Link from "next/link";
import { DiGithubBadge } from "react-icons/di";

const cName = "transition-all ease-out cursor-pointer px-4 py2 text-xl font-bold text-text dark:text-dark-text hover:text-accent hover:dark:text-dark-accent"

const Navbar = () => {


    const scroll = useScroll();

    return <header>
        <nav className="flex flex-wrap fixed w-full px-64 py-10 h-auto z-50 navbar-shadow bg-inherit bg-secondary-bg dark:bg-dark-secondary-bg mb-auto">
            <ul className="flex flex-wrap flex-row items-center gap-4 w-full text-text">
                <p className="absolute left-36 text-4xl font-bold text-dark-secondary dark:text-secondary">Nitay</p>

                {SECTIONS.map((i, k) => (
                    <li key={k} onClick={() => scroll(i.section)} className={cName}>{i.title}</li>
                ))}

                <li className={`text-4xl absolute right-36 flex flex-row gap-4`}>
                    <Link target="_blank" className="text-text dark:text-white border-none" href={'https://github.com/VirtuallDev/portfolio'}><DiGithubBadge /></Link>
                    <ThemeSwitcher />
                </li>
            </ul>
        </nav>
    </header>
}

export default Navbar;