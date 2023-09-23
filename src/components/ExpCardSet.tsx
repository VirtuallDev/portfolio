import { ExperienceProps } from "@/types";
import ExpCard from "./ExpCard";


const ExperienceCardSet = ({set}: {set: ExperienceProps[]}) => (
    <div className="grid max-w-2xl gap-4 grid-cols-1">
        {set.map((e, i) => (
            <ExpCard key={i} {...e} />
        ))}
    </div>
)

export default ExperienceCardSet;