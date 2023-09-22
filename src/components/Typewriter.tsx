'use client'
import ReactTyped from "react-typed";

const Typewriter = () => (
    <span className="text-accent dark:text-dark-accent"><ReactTyped strings={['Nitay!', 'Virtual!']} typeSpeed={100} loop /></span>
)

export default Typewriter;