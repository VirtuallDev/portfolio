'use client'
import { BDAY_TIME } from "@/utils/consts";
import Particle from "../Particle";
import Typewriter from "../Typewriter";
import { useState } from 'react';
import { useEffect } from 'react';
import Accent from "../Accent";
import useAge from "@/hooks/useAge";


const HomeSection = () => {

    const [age, setAge] = useAge();

    return <section id='home' className="h-96 flex animate-up flex-col items-center text-2xl gap-4 gap-y-8">
        {/* <Particle /> */ /* TODO: Fix particles unshowing */}
        <p className="text-text dark:text-dark-text font-mono font-bold text-7xl">Hey, I&apos;m <Typewriter/></p>
        <p>I{"'"}m a <Accent>{age}</Accent> years old <Accent>fullstack web developer</Accent> from Israel</p> 
        
    </section>
}

export default HomeSection;