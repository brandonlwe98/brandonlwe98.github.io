import {Box, useColorModeValue, Text, Spacer, Stack, Tooltip, Icon, IconButton} from '@chakra-ui/react'
import {HiArrowCircleLeft, HiArrowCircleRight} from 'react-icons/hi'
import {useNavigate} from 'react-router-dom'

const Projects = () => {
    const navigate = useNavigate();

    function navigatePost(link, event){
        console.log(event);
        console.log(link);
        event.preventDefault();
        navigate(link);
    }

    return(
        <Box py={4} borderWidth='2px' borderColor={useColorModeValue('black','white')}>
            <Box px={5} pt={2} pb={5}>
                <Stack direction='row'>
                    <Tooltip label='Previous Post'>
                        <Box className="hover:scale-110 cursor-pointer">
                            <IconButton icon={<Icon as={HiArrowCircleLeft} w={{base:'24px', md:'32px'}} h={{base:'24px', md:'32px'}}/>}
                                onClick={ (event) => navigatePost('/projects/wwf', event)}
                                className='bg-white hover:opacity-75 hover:scale-110'/>
                        </Box>
                    </Tooltip>
                    <Spacer/>
                    {/**Disabled (latest post) */}
                    {/* <Tooltip label='Next Post'>
                        <Box className="hover:scale-110">
                            <Icon as={HiArrowCircleRight} w={{base:'24px', md:'32px'}} h={{base:'24px', md:'32px'}}/>
                        </Box>
                    </Tooltip> */}
                        
                </Stack>
                <Box>
                    <Text fontSize={{base:'26px', md:'35px'}} fontWeight='md' fontFamily='mono'>
                        Self Portfolio Website
                    </Text>
                    <Text fontFamily='mono' textAlign='left'>October 2022</Text>
                </Box>

                <Box mt={6}>
                    <Text lineHeight={2}>
                        I started a project of my own to create a portfolio website (what you're viewing now) where I could display
                        my skills, information, and education. This website that you're currently viewing is
                        built using <span className='animate-pulse'>ReactJS</span>, styled
                        using <span className='animate-pulse'>ChakraUI </span> 
                        and <span className='animate-pulse'>TailwindCSS</span> libraries.
                    </Text>
                    {/* <Text mt={5}>
                        
                    </Text> */}
                </Box>
            </Box>


        </Box>
    )

}

export default Projects