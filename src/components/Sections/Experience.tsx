import Accent from "../Accent";
import LazyComponent from "../LazyComponent"


const ExperienceSection = () => {

    return <LazyComponent>
        <section id="exp" className="h-96 flex flex-col items-center text-2xl gap-4 gap-y-8">
           <h1 className="text-7xl font-bold">My <Accent>Experience</Accent></h1>
        </section>
    </LazyComponent>
}

export default ExperienceSection;