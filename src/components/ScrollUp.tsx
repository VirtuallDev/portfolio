'use client'
import useScroll from "@/hooks/useScroll";
import { BsArrowUp } from "react-icons/bs";
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';


const ScrollUp = () => {

    const scroll = useScroll();
    const ref = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);
  
    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 100);
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);


    return (
        <div ref={ref} onClick={() => scroll("home")} className={`transition-opacity ease-out ${visible ? "opacity-100" : "opacity-0"} fixed right-0 bottom-8 mx-8 transition-all ease-out rounded-full bg-dark-background dark:bg-primary p-5 text-dark-text dark:text-text text-5xl cursor-pointer hover:scale-110`}><BsArrowUp /></div>
    )
}

export default ScrollUp;