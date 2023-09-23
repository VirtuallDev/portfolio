import { SiDiscord, SiGmail, SiInstagram, SiLinkedin } from "react-icons/si";
import Accent from "../Accent";
import Link from "next/link";
import { IconType } from "react-icons";


const SOCIALS = [
    {
        'link': 'https://discord.com/users/907644492419571752',
        'logo': SiDiscord
    },
    {
        'link': 'https://www.linkedin.com/in/nitay-stain',
        'logo': SiLinkedin
    },
    {
        'link': 'https://www.instagram.com/nitay_250/',
        'logo': SiInstagram
    },
    {
        'link': 'mailto:nitaystain090@gmail.com',
        'logo': SiGmail
    }
]

const Contact = (props: {link: string, logo: IconType}) => (

    <Link href={props.link ?? "#"} className="hover:border-[2.2px] hover:border-dark-secondary-bg dark:hover:border-secondary-bg transition-all ease-out hover:scale-110 text-text dark:text-dark-primary text-7xl p-6 opacity-90 border-2 border-solid border-dark-background dark:border-background bg-primary dark:bg-dark-secondary-bg rounded-full"><props.logo /></Link>

)

const ContactSection = () => (
    <section id='contact' className="h-full flex flex-col items-center text-2xl gap-4">
        <div className="text-7xl font-bold text-text dark:text-dark-text">My <Accent>Socials</Accent></div>
        <ul className="py-10 flex items-center gap-12">
            {SOCIALS.map((k, i) => (
                <Contact key={i} {...k} />
            ))}
        </ul>
    </section>
)

export default ContactSection;