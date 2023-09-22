'use client'

import useScroll from "@/hooks/useScroll";
import { ThemeSwitcher } from "./ToggleTheme";
import { SECTIONS } from "@/utils/consts";

const cName = "transition-all ease-out cursor-pointer px-4 py2 text-xl font-bold text-text dark:text-dark-text hover:text-accent hover:dark:text-dark-accent"

const Navbar = () => {


    const scroll = useScroll();

    return <header>
        <nav className="flex fixed top-0 w-full px-48 h-32 navbar-shadow bg-inherit">
            <ul className="flex items-center gap-4 w-full text-text">
                <p className="py2 px-3 text-4xl font-bold text-dark-secondary dark:text-secondary">Virtual</p>

                {SECTIONS.map((i, k) => (
                    <li key={k} onClick={() => scroll(i.section)} className={cName}>{i.title}</li>
                ))}

                <li className={`text-4xl ml-auto`}><ThemeSwitcher /></li>
            </ul>
        </nav>
    </header>
}

export default Navbar;