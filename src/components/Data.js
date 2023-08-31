import { Icon } from '@chakra-ui/react'
import { FaHtml5, FaJava, FaUbuntu, FaAngular, FaNodeJs, FaGitlab, FaAws, FaCuttlefish } from 'react-icons/fa'
import { SiJavascript, SiCss3, SiMysql, SiPhp, SiPython, SiPostman, SiSpringboot, SiChakraui, SiTerraform } from 'react-icons/si'
import { DiAndroid, DiLinux } from 'react-icons/di'
import { BsWindows, BsGithub } from 'react-icons/bs'
import { GrReactjs } from 'react-icons/gr'

const iconSize={base: 55, md:75}

//Data for Navbar Options
export const sections = [ 
        {name:'Home', link: 'home'},
        {name:'Academic', link: 'academic'},
        {name:'Projects', link: 'projects'},
        {name:'Contact', link: 'contact'}]

//Data for List of Projects
export const projects = [{date:'2023', name:'Scrum Poker', page:'scrum-poker-demo'},
                        {date:'2022', name:'Self Portfolio', page:'portfolio'},
                        {date:'2022', name:'Wordle With Friends', page:'wwf'},
                        {date:'2022', name:'Splask', page:'splask'},
                        {date:'2020', name:'Inventory Management', page:'inventory'},]

//Data for List of Work Experiences
export const works = [{date:'2020', name:'Richwood Ventures', page:'richwood'},
                        {date:'2018-2019', name:'Dbix Systems', page:'dbix'},]

//Data for List of Skills
export const skillList = [
        [
                {name:'Javascript', icon:<Icon as={SiJavascript} w={iconSize} h={iconSize}/>},
                {name:'Java', icon:<Icon as={FaJava} w={iconSize} h={iconSize}/>},
                {name:'C/C++', icon:<Icon as={FaCuttlefish} w={iconSize} h={iconSize}/>},
                {name:'Python', icon:<Icon as={SiPython} w={iconSize} h={iconSize}/>},
        ],
        [
                {name:'GitHub', icon:<Icon as={BsGithub} w={iconSize} h={iconSize}/>},
                {name:'GitLab', icon:<Icon as={FaGitlab} w={iconSize} h={iconSize}/>},   
                {name:'MySQL', icon:<Icon as={SiMysql} w={iconSize} h={iconSize}/>},
                {name:'PHP', icon:<Icon as={SiPhp} w={iconSize} h={iconSize}/>},    
        ],
        [
                {name:'Android Studio', icon:<Icon as={DiAndroid} w={iconSize} h={iconSize}/>},
                {name:'Postman', icon:<Icon as={SiPostman} w={iconSize} h={iconSize}/>},
                {name:'HTML', icon:<Icon as={FaHtml5} w={iconSize} h={iconSize}/>},
                {name:'CSS', icon:<Icon as={SiCss3} w={iconSize} h={iconSize}/>}, 
        ],
        [
                {name:'Terraform', icon:<Icon as={SiTerraform} w={iconSize} h={iconSize}/>},
                {name:'AWS', icon:<Icon as={FaAws} w={iconSize} h={iconSize}/>},

        ]
]

//Data for List of Frameworks
export const frameworkList = [
        {name:'Angular6', icon:<Icon as={FaAngular} w={iconSize} h={iconSize}/>},
        {name:'NodeJS', icon:<Icon as={FaNodeJs} w={iconSize} h={iconSize}/>},
        {name:'Springboot', icon:<Icon as={SiSpringboot} w={iconSize} h={iconSize}/>},  
        {name:'ReactJS', icon:<Icon as={GrReactjs} w={iconSize} h={iconSize}/>},  
        {name:'ChakraUI', icon:<Icon as={SiChakraui} w={iconSize} h={iconSize}/>},  

]

//Data for List of Environments
export const environmentList = [
        {name:'Windows', icon:<Icon as={BsWindows} w={iconSize} h={iconSize}/>},
        {name:'Ubuntu', icon:<Icon as={FaUbuntu} w={iconSize} h={iconSize}/>},
        {name:'Linux', icon:<Icon as={DiLinux} w={iconSize} h={iconSize}/>},
]

