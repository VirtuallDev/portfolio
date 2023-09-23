import LazyComponent from "./LazyComponent";
import ScrollToSection from "./ScrollToSection";
import ContactSection from "./Sections/Contact";
import ExperienceSection from "./Sections/Experience";
import HomeSection from "./Sections/Home";
import SkillStackSection from "./Sections/SkillStack";


const SECTIONS = [
    {"id": "home", Element: HomeSection},
    {"id": "exp", Element: ExperienceSection},
    {'id': 'skill-stack', Element: SkillStackSection},
    {'id': 'contact', Element: ContactSection}
]

const HomeContainer = () => (
    <div>
        {SECTIONS.map((Element, k) => (
            <LazyComponent key={k}>
                <div className="flex text-text dark:text-dark-text flex-wrap flex-col justify-center items-center gap-12">
                <Element.Element />
                <ScrollToSection secId={SECTIONS[k + 1]?.id ?? "footer"} />
                <div className="h-[48rem]"></div>
                </div>
            </LazyComponent>
        ))}
    </div>
);

export default HomeContainer;