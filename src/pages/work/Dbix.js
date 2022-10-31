import {Box, useColorModeValue, Text, Spacer, Stack, Tooltip, Icon, Link} from '@chakra-ui/react'
import {HiArrowCircleLeft, HiArrowCircleRight} from 'react-icons/hi'
import {useNavigate} from 'react-router-dom'
import {works as data_works} from '../../components/Data'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Dbix = () => {
    const navigate = useNavigate();

    function navigatePost(link, event){
        event.preventDefault();
        navigate(link);
    }

    var workIndex = data_works.findIndex(work => work.page === 'dbix')
    var prevIndex = workIndex + 1
    var nextIndex = workIndex -1

    return(
        <Box py={4} borderWidth='2px' borderColor={useColorModeValue('black','white')}>
            <Box px={5} pt={2} pb={5}>
                <Stack direction='row'>
                {prevIndex < data_works.length ? 
                    (<Tooltip label='Previous Post'>
                        <Box>
                            <Icon as={HiArrowCircleLeft} w={{base:'24px', md:'32px'}} h={{base:'24px', md:'32px'}}
                                className='hover:opacity-75 hover:scale-110 cursor-pointer'
                                onClick={
                                    (e) => {
                                        navigatePost('/projects/' + data_works[prevIndex].page, e)
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
                                                navigatePost('/projects/' + data_works[nextIndex].page, e)
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
                        Dbix Systems
                    </Text>
                    <Text fontFamily='mono' textAlign='left'>Aug 2018 - Mar 2019</Text>
                </Box>

                <Box mt={6}>
                    <Text lineHeight={2}>
                        <Link href="https://www.dbix.com.my/" isExternal>Dbix Systems<ExternalLinkIcon mx='2px' w={{base:3, md:4}} h={{base:3, md:4}}/></Link> is
                        a business technology company that customizes software for B2B needs. I was hired as a software developer right after receiving my Diploma in IT, with little to no
                        knowledge of the work industry. My supervisor was thankfully patient and really engaging. During my 8-month work period, I worked on multiple projects.
                    </Text>
                    <Text lineHeight={2} mt={5}>
                        The main project I worked on was an Invoice Receiving System designed for use of admins in an electronics company. The web application was powered
                        using Angular6 and SailsJS. My tasks covered everything including the database, server-side, and client-side code, making me a full-stack developer.
                        I learned a lot of skills and tools whilst expanding my knowledge on frameworks and coding conventions used in the workplace.
                    </Text>
                    <Text lineHeight={2} mt={5}>
                        Another project I got to work on was a small mobile application using Android Studio that was designed to handle basic user authentications and server-side calls. It communicated
                        with a third-party application, processing the data retrieved from it and passing it to a third-party server. I got to learn about Cisco remote server connections,
                        SOAP operations, and basic UI designs for mobile applications.
                    </Text>
                    {/* <Text mt={5}>
                        
                    </Text> */}
                </Box>
            </Box>


        </Box>
    )

}

export default Dbix