import ExperienceSection from "./Sections/Experience";
import HomeSection from "./Sections/Home";


const SECTIONS = [
    HomeSection,
    ExperienceSection
]

const HomeContainer = () => (
    <div>
        {SECTIONS.map((Element, k) => (
            <div key={k}>
                <Element />
                <div className="h-[48rem]"></div>
            </div>
        ))}
    </div>
);

export default HomeContainer;