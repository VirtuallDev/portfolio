import { IconType } from "react-icons";

export interface ExperienceProps {
    title: string;
    img: string;
    description: string;
    from: string;
    to: string;
};

export interface SkillItem {
    tooltip: string;
    logo: IconType;
};

export interface  SkillsData  {
    [key: string]: SkillItem[];
};