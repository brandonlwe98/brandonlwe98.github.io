import { useColorMode, Icon} from '@chakra-ui/react'
import React from 'react';
import {Box, Heading, Stack, Flex, useColorModeValue} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { MdMenu, MdOutlineDarkMode, MdClose } from 'react-icons/md'
import { BsSun } from 'react-icons/bs'
import { useLocation } from 'react-router-dom'
import { sections as data_sections } from './Data'

// import { Logo } from './Logo'

const Navbar = () => {

    const { colorMode, toggleColorMode } = useColorMode()

    const navbarColor = useColorModeValue('white', 'teal.500');
    const navbarShadow = useColorModeValue('md', 'dark-lg');
    const activeBorderColor = useColorModeValue('teal.500', 'white');

    const [isOpen, setIsOpen] = React.useState(false)

    const toggle = () => setIsOpen(!isOpen)

    const MenuToggle = ({ toggle, isOpen }) => {
        return (
            <Box display={{ base: "block", md: "none" }} onClick={toggle}
            className='hover:cursor-pointer hover:scale-110 transition-transform duration-200'>
                {isOpen ? <Icon as={MdClose} w={35} h={35}/> : <Icon as={MdMenu} w={35} h={35} />}
            </Box>
        )
    }

    var sectionList = data_sections.map((item, index) => {
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
        const isActive = currentLocation === "/"+pageLink;
        
        return (
            <Link to={pageLink}>
                <Box 
                    p={[3, 5, 5, 5]}
                    position='relative'
                    color={colorMode === 'light' ? 
                        (isActive ? "white" : "black") : 
                        (isActive ? "teal.500" : "white")}
                    backgroundColor={colorMode === 'light' ? 
                        (isActive ? "teal.500" : "transparent") : 
                        (isActive ? "white" : "transparent")}
                    borderRadius={6}
                    alignSelf='center'
                    transition='all 0.2s ease-in-out'
                    _hover={!isActive ? {
                        backgroundColor: colorMode === 'light' ? "teal.400" : "rgba(255,255,255,0.1)",
                        transform: 'translateY(-2px)',
                    } : {}}
                    borderBottom={isActive ? `3px solid ${activeBorderColor}` : 'none'}
                >
                    <Heading fontSize={{ base: 'sm', md: 'md' }} fontWeight={isActive ? 'bold' : 'semibold'}>
                        {sectionName}
                    </Heading>
                </Box>
            </Link>
        )
    }

    return(
        <Flex 
            as="nav" 
            align='center' 
            justify='center'
            wrap='wrap' 
            position="fixed" 
            w="100%" 
            bgColor={navbarColor} 
            top="0" 
            zIndex='999'
            boxShadow={navbarShadow}
            px={[4, 6, 8, 10]}
            py={[4, 2, 2, 2]}
            minH={[16, 'auto', 'auto', 'auto']}
        >
            <Box position={{ base: 'absolute', md: 'relative' }} left={[4, 'auto', 'auto', 'auto']} display={{ base: 'block', md: 'none' }}>
                <MenuToggle toggle={toggle} isOpen={isOpen}/>
            </Box>
            
            <Box
                display={{ base: isOpen ? "block" : "none", md: "flex" }}
                flexBasis={{ base: "100%", md: "auto" }}
                w={{ base: '100%', md: 'auto' }}
                px={[4, 0, 0, 0]}
            >
                <Stack 
                    spacing={[0, 2, 2, 3]} 
                    align='center' 
                    justify='center' 
                    direction={["column", "row", "row", "row"]}
                    pt={[4, 0, 0, 0]} 
                    pb={[4, 0, 0, 0]}
                    mx='auto'
                    w='100%'
                >
                    {sectionList}
                    <Box
                        display={{ base: 'none', md: 'block' }}
                        onClick={toggleColorMode}
                        className="hover:rotate-45 hover:scale-110 duration-200 transition-transform cursor-pointer"
                        p={2}
                        ml={{ md: 2, lg: 4 }}
                    >
                        {colorMode === 'light' ? (
                            <Icon as={BsSun} w={35} h={35} color="black"/>
                        ) : (
                            <Icon as={MdOutlineDarkMode} w={35} h={35} color="white"/>
                        )}
                    </Box>
                </Stack>
            </Box>

            <Box
                display={{ base: 'block', md: 'none' }}
                position='absolute'
                right={[4, 6, 8, 10]}
                onClick={toggleColorMode}
                className="hover:rotate-45 hover:scale-110 duration-200 transition-transform cursor-pointer"
                p={2}
            >
                {colorMode === 'light' ? (
                    <Icon as={BsSun} w={[30, 35, 35, 35]} h={[30, 35, 35, 35]} color="black"/>
                ) : (
                    <Icon as={MdOutlineDarkMode} w={[30, 35, 35, 35]} h={[30, 35, 35, 35]} color="white"/>
                )}
            </Box>
        </Flex>
    )
}

export default Navbar