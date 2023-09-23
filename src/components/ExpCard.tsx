import { ExperienceProps } from "@/types";
import Image from "next/image";



const ExpCard = ({ title, description, img, from, to }: ExperienceProps) => (
    <div className="bg-primary dark:bg-dark-secondary-bg max-w-sm rounded overflow-hidden   p-4">
        <div className="w-full flex flex-wrap justify-center"><Image width={196} height={196}  src={img} alt={title} /></div>
        <div className="px-6 py-4">
            <div className="text-text dark:text-dark-text font-bold text-xl mb-2">{title}</div>
            <p className="text-secondary-text dark:text-dark-primary text-base">
                {description}
            </p>
            <p className="text-center py-4">{from} - {to}</p>
        </div>
    </div>
)

export default ExpCard;