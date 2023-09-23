'use client'
import { ExperienceProps } from "@/types";
import Accent from "../Accent";
import LazyComponent from "../LazyComponent"
import { useState } from 'react';
import { useEffect } from 'react';
import ExpCard from "../ExpCard";
import ExperienceCardSet from "../ExpCardSet";


const ExperienceSection = () => {

    const [exps, setExps] = useState<ExperienceProps[]>([]);

    const fetchExps = async () => {
        try {
            const res = await fetch('/api/experience');
            const data = await res.json();
            setExps(data);
        } catch {
            console.error('error fetching experiences');
        }
    }

    useEffect(() => {
        fetchExps();
    }, []);

    return <section id="exp" className="h-full flex flex-col items-center text-2xl gap-4 gap-y-8">
           <div className="text-text dark:text-dark-text text-7xl font-bold">My <Accent>Experience</Accent></div>
           <ExperienceCardSet set={exps} />
    </section>
}

export default ExperienceSection;