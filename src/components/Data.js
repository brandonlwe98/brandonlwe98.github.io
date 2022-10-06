import {Icon} from '@chakra-ui/react'
import {FaHtml5, FaJava} from 'react-icons/fa'
import {SiJavascript, SiCss3, SiMysql, SiPhp, SiPython} from 'react-icons/si'
import {TbLetterC} from 'react-icons/tb'

//Data for Navbar Options
export const sections = [ 
        {name:'Home', link: 'home'},
        {name:'Academic', link: 'academic'},
        {name:'Projects', link: 'projects'},
        {name:'Contact', link: 'contact'}]

//Data for List of Projects
export const projects = [{date:'2022', name:'Self Portfolio', page:'portfolio'},
                        {date:'2022', name:'Wordle With Friends', page:'wwf'},
                        {date:'2022', name:'Splask', page:'splask'},
                        {date:'2020', name:'Inventory Management', page:'inventory'},]

//Data for List of Work Experiences
export const works = [{date:'2020', name:'Richwood Ventures', page:'richwood'},
                        {date:'2018-2019', name:'Dbix Systems', page:'dbix'},]

//Data for List of Skills
export const skillList = [
        {name:'Javascript', icon:<Icon as={SiJavascript} w={45} h={45}/>, percentage:'90'},
        {name:'HTML', icon:<Icon as={FaHtml5} w={45} h={45}/>, percentage:'90'},
        {name:'CSS', icon:<Icon as={SiCss3} w={45} h={45}/>, percentage:'85'},
        {name:'Java', icon:<Icon as={FaJava} w={45} h={45}/>, percentage:'80'},
        {name:'MySQL', icon:<Icon as={SiMysql} w={45} h={45}/>, percentage:'80'},
        {name:'PHP', icon:<Icon as={SiPhp} w={45} h={45}/>, percentage:'80'},
        {name:'C/C++', icon:<Icon as={TbLetterC} w={45} h={45}/>, percentage:'70'},
        {name:'Python', icon:<Icon as={SiPython} w={45} h={45}/>, percentage:'60'},
]

