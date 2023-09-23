import LazyComponent from "./LazyComponent";
import ScrollToSection from "./ScrollToSection";
import ExperienceSection from "./Sections/Experience";
import HomeSection from "./Sections/Home";


const SECTIONS = [
    {"id": "home", Element: HomeSection},
    {"id": "exp", Element: ExperienceSection}
]

const HomeContainer = () => (
    <div>
        {SECTIONS.map((Element, k) => (
            <LazyComponent key={k}>
                <div className="flex flex-wrap flex-col justify-center items-center gap-4">
                <Element.Element />
                <ScrollToSection secId={SECTIONS[k + 1]?.id ?? "footer"} />
                <div className="h-[48rem]"></div>
                </div>
            </LazyComponent>
        ))}
    </div>
);

export default HomeContainer;