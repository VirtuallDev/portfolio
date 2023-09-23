'use client'
import useScroll from "@/hooks/useScroll"
import { BsArrowBarDown } from "react-icons/bs";


const ScrollToSection = ({secId}: any) => {
    const scroll = useScroll();

    return <div onClick={() => scroll(secId)} className="transition-all ease-out rounded-full bg-dark-background dark:bg-primary p-5 text-dark-text dark:text-text text-5xl cursor-pointer hover:scale-110">
        <BsArrowBarDown />
    </div>
}

export default ScrollToSection;