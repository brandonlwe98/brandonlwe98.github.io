import { useColorMode, Icon, DarkMode, LightMode } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import {Box, Heading, Stack, Spacer, Center, Flex, Button, ButtonGroup, HStack,IconButton,useBreakpointValue,useColorModeValue, Input} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { MdMenu, MdOutlineDarkMode, MdClose } from 'react-icons/md'
import { BsSun } from 'react-icons/bs'
import { useLocation } from 'react-router-dom'

// import { Logo } from './Logo'

const Navbar = () => {

    const { colorMode, toggleColorMode } = useColorMode()

    const navbarColor = useColorModeValue('white', 'teal.500');

    const [isOpen, setIsOpen] = React.useState(false)

    const toggle = () => setIsOpen(!isOpen)

    const MenuToggle = ({ toggle, isOpen }) => {
        return (
            <Box display={{ base: "block", md: "none" }} onClick={toggle}
            className='hover:cursor-pointer hover:scale-110'>
                {isOpen ? <Icon as={MdClose} w={35} h={35}/> : <Icon as={MdMenu} w={35} h={35} />}
            </Box>
        )
    }

    //tailwind className for light/dark mode
    const hoverNavbar = useColorModeValue(
        'hover:bg-teal-500 hover:text-white',
        'hover:bg-white hover:text-teal-600'
    )

    let sections = [
        {name:'Home', link: 'home'},
        {name:'Academic', link: 'academic'},
        {name:'Projects', link: 'projects'},
        {name:'Contact', link: 'contact'}
    ]

    var sectionList = sections.map((item, index) => {
        return (
            <Section
                sectionName={item.name}
                pageLink={item.link}
                sectionID={item.sectionID}
                key={index}
            />
        )
    })
    function Section({sectionName, pageLink}){
        const currentLocation = useLocation().pathname;
        
        return (
            <Link to={pageLink}>
                {/* <DarkMode>  */}
                    <Box p={5}  
                    color={colorMode === 'light' ? 
                        (currentLocation == "/"+pageLink ? "white" : "black") : 
                        (currentLocation === "/"+pageLink ? "teal.500" : "white")}
                    backgroundColor={colorMode === 'light' ? 
                        (currentLocation == "/"+pageLink ? "teal.500" : navbarColor) : 
                        (currentLocation === "/"+pageLink ? "white" : navbarColor)}
                    className={hoverNavbar}
                    borderRadius={10}
                    alignSelf='center'
                    >
                        <Heading fontSize={{ base: 'sm', md: 'lg' }}>{sectionName}</Heading>

                    </Box>

                {/* </DarkMode> */}
            </Link>
        )
    }

    return(
        <Flex as="nav" align='center' justify='center' wrap='wrap' position="fixed" w="100%" bgColor={navbarColor} top="0" zIndex='999'>
            <MenuToggle toggle={toggle} isOpen={isOpen}/>
            <Box
            display={{ base: isOpen ? "block" : "none", md: "block" }}
            flexBasis={{ base: "100%", md: "auto" }}
            w='100%'
            >
                <Stack spacing={0} align='center' justify='center' direction={["column", "row", "row", "row"]}
                pt={[4, 4, 0, 0]} mx='auto'>
                    {sectionList}
                    <Box //dark mode button
                        onClick={toggleColorMode}
                        className="hover:rotate-45 duration-100 cursor-pointer"
                        p={1}
                        alignSelf='center'
                        >
                        {colorMode === 'light' ? (
                            <Icon as={BsSun} w={45} h={45} color="black"/>
                        ) : (
                            <Icon as={MdOutlineDarkMode} w={45} h={45} color="white"/>
                        )}
                    </Box>
                </Stack>
            </Box>

        </Flex>
    )
}

export default Navbar