import {Box, useColorModeValue, Text, Spacer, Stack, Tooltip, Icon, IconButton} from '@chakra-ui/react'
import {HiArrowCircleLeft, HiArrowCircleRight} from 'react-icons/hi'
import {useNavigate} from 'react-router-dom'
import {projects as data_projects} from '../../components/Data'

const Splask = () => {
    const navigate = useNavigate();

    function navigatePost(link, event){
        event.preventDefault();
        navigate(link);
    }

    var projectIndex = data_projects.findIndex(project => project.page === 'splask')
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
                        Splask
                    </Text>
                    <Text fontFamily='mono' textAlign='left'>Spring 2022</Text>
                </Box>

                <Box mt={6}>
                    <Text lineHeight={2}>
                        
                    </Text>
                    {/* <Text mt={5}>
                        
                    </Text> */}
                </Box>
            </Box>


        </Box>
    )

}

export default Splask