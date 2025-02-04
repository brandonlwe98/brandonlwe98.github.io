import {Box, useColorModeValue, Text, Spacer, Stack, Tooltip, Icon} from '@chakra-ui/react'
import {HiArrowCircleLeft, HiArrowCircleRight} from 'react-icons/hi'
import { useNavigate } from 'react-router-dom'
import { FaQuestionCircle } from 'react-icons/fa'
import {MdCancel} from 'react-icons/md'
import {projects as data_projects} from '../../components/Data'
import SinglePlayer from '../../components/demo/wwf-demo/SinglePlayer'
import HowToPlay from '../../components/demo/wwf-demo/HowToPlay'
import { useState } from 'react'

const Wwf = () => {
    const navigate = useNavigate();

    const [isHowToPlay, setIsHowToPlay] = useState(false)

    const toggleGame = () => setIsHowToPlay(!isHowToPlay)

    function navigatePost(link, event){
        event.preventDefault();
        navigate(link);
    }

    var projectIndex = data_projects.findIndex(project => project.page === 'wwf')
    var prevIndex = projectIndex + 1
    var nextIndex = projectIndex -1

    return(
        <Box py={4} borderWidth='2px' borderColor={useColorModeValue('black','white')}>
            <Box px={5} pt={2} pb={5}>
                <Stack direction='row'>
                {prevIndex < data_projects.length ? 
                    (<Tooltip label='Previous Post'>
                        <Box>
                            <Icon as={HiArrowCircleLeft} w={{base:'24px', md:'32px'}} h={{base:'24px', md:'32px'}}
                                className='hover:opacity-75 hover:scale-110 cursor-pointer'
                                onClick={
                                    (e) => {
                                        navigatePost('/projects/' + data_projects[prevIndex].page, e)
                                    }
                                }/>
                        </Box>
                    </Tooltip>
                    )
                    :
                    <Box></Box>
                }
                    <Spacer/>
                    {nextIndex >= 0 ? 
                        (
                            <Tooltip label='Next Post'>
                                <Box>
                                    <Icon as={HiArrowCircleRight} w={{base:'24px', md:'32px'}} h={{base:'24px', md:'32px'}}
                                        className='hover:opacity-75 hover:scale-110 cursor-pointer'
                                        onClick={
                                            (e) => {
                                                navigatePost('/projects/' + data_projects[nextIndex].page, e)
                                            }
                                        }/>
                                </Box>
                            </Tooltip>
                        )
                        :
                        <Box></Box>
                    }
                        
                </Stack>
                <Box pt={4}>
                    <Text fontSize={{base:'26px', md:'35px'}} fontWeight='md' fontFamily='mono'>
                        Wordle With Friends
                    </Text>
                    <Text fontFamily='mono' textAlign='left'>Spring 2022</Text>
                </Box>

                <Box mt={6}>
                    <Text lineHeight={2}>
                        For one of my courses in Iowa State University, I worked with 3 other students to create a small ReactJS project for the entire Spring semester.
                        Our project came out first, beating 40+ other group projects. The idea was to implement the classic Wordle application, but with slight improvements and
                        extra features (login, leaderboards, animations, etc.)
                    </Text>
                    <Text mt={5}>
                        Below, you can find a demo, a lite version of the actual application (not available for mobile)
                    </Text>
                    
                    <Box mt={35} display={{ base: "none", md: "block" }}>
                        <Box className='flex justify-center' my={5}>
                            {isHowToPlay ? 
                                (
                                <Tooltip label="Cancel">
                                    <Box className='hover:scale-110 duration-100 text-red-600 cursor-pointer' onClick={toggleGame}>
                                        <MdCancel className='text-5xl' />
                                    </Box>
                                </Tooltip>

                                )
                                :
                                (
                                <Tooltip label="How to Play">
                                    <Box className='hover:scale-110 duration-100 text-green-600 cursor-pointer' onClick={toggleGame}>
                                        <FaQuestionCircle className='text-5xl' />
                                    </Box>
                                </Tooltip>

                                )
                            }
                        </Box>
                        {isHowToPlay ? (<HowToPlay/>) :  (<SinglePlayer/>)}

                    </Box>

                    <Box mt={10} display={{ base: "block", md: "none" }}>
                        <Text className='animate-pulse'>Sorry, the demo is not supported on mobile</Text>
                    </Box>

                </Box>
            </Box>


        </Box>
    )

}

export default Wwf