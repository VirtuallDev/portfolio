"use client"
import { useState } from "react";

interface Props {
    delay: number,
    children: any,
    content: string
};

const ToolTip = ({
children,
content,
delay
}: Props) => {
    let timeout:NodeJS.Timeout;
    const [active, setActive] = useState(false);

    const showTip = () => {
        timeout = setTimeout(() => {
            setActive(true);
        }, delay || 4000);
    }

    const hideTip = () => {
        clearInterval(timeout);
        setActive(false);
    }

    return (
        <div className="relative inline-block" onMouseEnter={showTip} onMouseLeave={hideTip}>
            {children}
            {active && (
                <div className={`absolute rounded left-1/2 -translate-x-1/2 p-1 text-white bg-black text-sm font-mono z-50 whitespace-nowrap before:content-[" "] before:left-1/2 before:border-transparent before:h-0 before:w-0 before:absolute before:pointer-events-none before:border-2 before:-ml-2 -top-6 before:top-full`}>
                    {content}
                </div>
            )}
        </div>
    )

}
export default ToolTip