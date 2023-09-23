import { SkillsData } from '@/types';
import { IconType } from 'react-icons';
import { BsTerminalFill } from 'react-icons/bs';
import { DiDjango, DiReact } from 'react-icons/di';
import { GiComputerFan } from 'react-icons/gi';
import { SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiCsharp,SiGo, SiRust, SiCplusplus, SiLua, SiPython, SiVite, SiNestjs, SiExpress, SiFlask, SiFastapi, SiSocketdotio, SiMongodb, SiSqlite, SiMysql, SiPostgresql, SiVisualstudio, SiVisualstudiocode, SiGit, SiGithub, SiWireshark, SiIntellijidea, SiFivem, SiWindows11, SiLinux, SiMacos, SiMarkdown  } from 'react-icons/si';

export const SECTIONS = [
    {
        'title': 'Home',
        'section': 'home'
    },
    {
        'title': 'My Experience',
        'section': 'exp'
    },
    {
        'title': 'Skill Stack',
        section: 'skill-stack'
    },
    {
        'title': 'Socials',
        section: 'contact'
    }
]


export const SKILL_STACK: SkillsData = {
    "Languages": [
        {
            'tooltip': 'Typescript',
            'logo': SiTypescript
        },
        {
            'tooltip': 'C#',
            'logo': SiCsharp
        },
        {
            'tooltip': 'C++',
            'logo': SiCplusplus
        },
        {
            'tooltip': 'Rust',
            'logo': SiRust,
        },
        {
            'tooltip': 'Go',
            'logo': SiGo
        },
        {
            'tooltip': 'Lua',
            'logo': SiLua
        },
        {
            'tooltip': 'Python',
            'logo': SiPython
        },
    ],
    'Frontend Development': [
        {
            'tooltip': 'HTML5',
            'logo': SiHtml5
        },
        {
            'tooltip': 'CSS3',
            'logo': SiCss3
        },
        {
            'tooltip': 'Javascript',
            'logo': SiJavascript
        },
        {
            'tooltip': 'React',
            'logo': DiReact
        },
        {
            'tooltip': 'Next.JS',
            'logo': SiNextdotjs
        },
    
        {
            'tooltip': 'Vite',
            'logo': SiVite
        },
    ],
    "Backend Development": [

        {
            'tooltip': 'NestJS',
            'logo': SiNestjs
        },
        {
            'tooltip': 'Django',
            'logo': DiDjango
        },
        {
            'tooltip': 'Express.JS',
            'logo': SiExpress
        },
        {
            'tooltip': 'Flask',
            'logo': SiFlask
        },
        {
            'tooltip': 'FastAPI',
            logo: SiFastapi
        },
        {
            tooltip: 'Socket.IO',
            logo: SiSocketdotio
        }
    ],
    'Databases': [
        {
            tooltip: 'MongoDB',
            logo: SiMongodb,
        },
        {
            tooltip: 'Sqlite',
            logo: SiSqlite,
        },
        {
            tooltip: 'MySQL',
            logo: SiMysql
        },
        {
            tooltip: 'Postgresql',
            logo: SiPostgresql
        }
    ],
    'Tools': [
        {
            tooltip: 'Visual Studio Code',
            logo: SiVisualstudiocode
        },
        {
            tooltip: 'Visual Studio',
            logo: SiVisualstudio
        },
        {
            tooltip: 'Git',
            logo: SiGit
        },
        {
            tooltip: 'Github',
            logo: SiGithub
        },
        {
            tooltip: 'Wireshark',
            logo: SiWireshark
        },
        {
            tooltip: 'Intellij Idea',
            logo: SiIntellijidea
        },
        {
            tooltip: 'FiveM',
            logo: SiFivem
        }
    ],
    'Operating Systems': [
        {
            tooltip: 'Windows',
            logo: SiWindows11
        },
        {
            tooltip: 'Linux',
            logo: SiLinux
        },
        {
            tooltip: 'MacOS',
            logo: SiMacos
        }
    ],
    'Extras': [
        {
            tooltip: 'Terminal',
            logo: BsTerminalFill
        },
        {
            tooltip: 'Markdown',
            logo: SiMarkdown
        },
        {
            tooltip: 'Computer Building',
            logo: GiComputerFan
        }
    ]
} 


export const BDAY_TIME = new Date("2007-09-16");