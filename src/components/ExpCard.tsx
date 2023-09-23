import { ExperienceProps } from "@/types";
import Image from "next/image";



const ExpCard = ({ title, description, img, from, to }: ExperienceProps) => (
    <div className="flex flex-col bg-primary dark:bg-dark-secondary-bg max-w-sm rounded overflow-hidden gap-8 p-4">

        <div className="flex-1 flex-grow flex flex-wrap justify-center items-center"><Image width={196} height={196}  src={img} alt={title} /></div>

        <div className="flex-1 flex-grow px-6">
            <div className="text-text dark:text-dark-text font-bold text-xl mb-2">{title}</div>
            <p className="text-secondary-text dark:text-dark-primary text-base font-semibold h-48">
                {description}
            </p>
            <p className="text-center font-bold py-4">{from} - {to}</p>
        </div>
    </div>
)

export default ExpCard;