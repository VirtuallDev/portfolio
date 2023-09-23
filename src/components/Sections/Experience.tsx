import { ExperienceProps } from "@/types";
import Accent from "../Accent";
import ExperienceCardSet from "../ExpCardSet";

const exps: ExperienceProps[] = [
    {
        "title": "Game Developer",
        "img": "https://i.redd.it/tu3gt6ysfxq71.png",
        "description": "Learning and making games with Unity Engine",
        "from": "2018",
        "to": "2019"
    },
    {
        "title": "Frontend Designer",
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
        "description": "Learning the basics of UI designing with HTML/CSS/JS",
        "from": "2019",
        "to": "2020"
    },
    {
        "title": "Backend Developer",
        "img": "https://preview.redd.it/voqvc1bdstk61.png?width=640&crop=smart&auto=webp&s=93837f1bbe369098d3e0ee29a866b412c156e711",
        "description": "During the COVID-19 lockdown: Studying more about Discord.JS, making bots and simple tools",
        "from": "2020",
        "to": "2021"
    },
    {
        "title":"Backend Developer",
        "img": "https://logos-world.net/wp-content/uploads/2021/03/FiveM-Logo.png",
        "description": "Discovering Express.JS and starting to learn Lua language for FiveM scripting",
        "from": "2021",
        "to": "2022"
    },
    {
        "title": "Magshimim Cyber Student",
        "img": "https://images.crunchbase.com/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/j5wf1hzrplmsda2foqub",
        "description": "Being accepted to the Magshimim-Cyber plan, read about it more!",
        "from": "2022",
        "to": "Still Going"
    },
    {
        "title": "Fullstack Developer",
        "img": "https://cdn1.iconfinder.com/data/icons/soleicons-fill-vol-1/64/reactjs_javascript_library_atom_atomic_react-512.png",
        "description": "With the tools of the 1th year and self learning, I mastered React.js, Nest.js and socket programming!",
        "from": "2023",
        "to": "Still Going"
    }

]

const ExperienceSection = () => {

    return <section id="exp" className="h-full flex flex-col items-center text-2xl gap-4 gap-y-8">
           <div className="text-text dark:text-dark-text text-7xl font-bold">My <Accent>Experience</Accent></div>
           <ExperienceCardSet set={exps} />
    </section>
}

export default ExperienceSection;