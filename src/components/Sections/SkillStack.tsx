import Accent from "../Accent";
import SkillSet from "../SkillSet";



const SkillStackSection = () => (
    <section id='skill-stack' className='h-full flex flex-col items-center text-2xl gap-4 gap-y-8'>
        <div className="text-text dark:text-dark-text text-7xl font-bold">Skill <Accent>Stack</Accent></div>
        <SkillSet />
    </section>
)

export default SkillStackSection;