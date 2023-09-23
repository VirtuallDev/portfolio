'use client'
import { SkillItem } from "@/types";
import { SKILL_STACK } from "@/utils/consts";
import ToolTip from "./ToolTip";




const SkillCard = (data: SkillItem) => (
    <div>
        <ToolTip content={data.tooltip} delay={200}>
            <data.logo className="text-text dark:text-dark-primary overflow-hidden transition-all duration-75 ease-out hover:scale-110 hover:overflow-hidden  hover:border-[2.2px] hover:border-dark-secondary-bg dark:hover:border-secondary-bg  text-8xl m-4 p-3 p-y-1 w-28 h-28 opacity-90 border-2 border-solid border-dark-background dark:border-background bg-primary dark:bg-dark-secondary-bg text-center rounded table" />
        </ToolTip>
    </div>
)

const SkillSet = () => (
    <div className="flex flex-col flex-wrap items-center justify-center">
        {Object.keys(SKILL_STACK).map((key, i) => (
            <div key={i} className="flex flex-col items-center  justify-center gap-y-8">
                <h2 className="font-mono text-3xl">{key}</h2>
                <div  className="flex flex-wrap flex-row justify-center gap-4 w-[48rem]">
                    {SKILL_STACK[key].map((skill, i) => (
                        <SkillCard key={i} {...skill} />
                        
                    ))
                    }
                </div>
             </div>
        ))}
    </div>
)

export default SkillSet;