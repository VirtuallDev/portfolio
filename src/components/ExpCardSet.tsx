import { ExperienceProps } from "@/types";
import ExpCard from "./ExpCard";


const ExperienceCardSet = ({set}: {set: ExperienceProps[]}) => (
    <div className="flex flex-wrap w-1/2 flex-row justify-center gap-4">
        {set.map((e, i) => (
            <ExpCard key={i} {...e} />
        ))}
    </div>
)

export default ExperienceCardSet;