'use client'
import Typewriter from "../Typewriter";
import Accent from "../Accent";
import useAge from "@/hooks/useAge";
import LazyComponent from "../LazyComponent";


const HomeSection = () => {

    const [age, setAge] = useAge();

    return <section id='home' className="h-96 flex animate-up flex-col items-center text-2xl gap-4 gap-y-8">
        {/* <Particle /> */ /* TODO: Fix particles unshowing */}
        <p className="text-text dark:text-dark-text font-mono font-bold text-7xl">Hey, I{"'"}m <Typewriter/></p>
        <div className="text-center text-text dark:text-dark-text font-bold text-xl">
            <p>I{"'"}m a <Accent>{age}</Accent> years old <Accent>fullstack web developer</Accent> from Israel</p> 
            <p>I am experienced with programming for 6 years of my life</p>
        </div>
        
        </section>
}

export default HomeSection;