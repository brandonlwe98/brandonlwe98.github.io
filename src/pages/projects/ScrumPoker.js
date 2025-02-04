import {Box, useColorModeValue, Text, Spacer, Stack, Tooltip, Icon, Image } from '@chakra-ui/react'
import {HiArrowCircleLeft, HiArrowCircleRight} from 'react-icons/hi'
import {useNavigate} from 'react-router-dom'
import {projects as data_projects} from '../../components/Data'

const ScrumPoker = () => {
    const navigate = useNavigate();

    function navigatePost(link, event){
        event.preventDefault();
        navigate(link);
    }

    // Get current project index to determine if its the earliest/latest project, removing unnecessary post navigation buttons
    var projectIndex = data_projects.findIndex(project => project.page === 'scrum-poker-demo')
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
                        Scrum Poker
                    </Text>
                    <Text fontFamily='mono' textAlign='left'>June 2023</Text>
                </Box>

                <Box mt={6}>
                    <Text lineHeight={2}>
                        During my summer internship with <span className='animate-pulse'>Kingland Systems</span>, my 
                        software development team was new to adapt the agile development methodology for the project that
                        we were working on. My project manager, who was also an intern like myself, was in charge of putting together
                        scrum meetings to help plan our sprints.
                    </Text>
                    <Text lineHeight={2} mt={5}>
                        He was having trouble finding good quality, free-to-use scrum poker applications online which could be used
                        to help size our stories.
                    </Text>
                    <Text lineHeight={2} mt={5}>
                        Scrum poker is typically used in agile development environments where each team member votes for an estimate
                        of how long the task will take to be completed (usually measured in story points, which can ratio to anywhere
                        between 5-8 hours per story point).
                    </Text>
                    <Text lineHeight={2} mt={5}>
                        Being the self-respecting software developer that I am, I decided to spend 30 hours working on application to help
                        automate this 30-minute task. Through this side project, I managed to contribute heavily to our Sprint Planning sessions
                        as well as learn more about web sockets, and deploying my first ever backend server through <span className='animate-pulse'>Heroku</span>
                    </Text>
                    <Text lineHeight={2} mt={5}>
                        This lite scrum poker application is developed using ReactJS on the front-end. For the backend, it is powered using ExpressJS, utilizing
                        the <span className='animate-pulse'>socket-io</span> npm package.
                    </Text>

                    <Box className='flex justify-center' mt={10}>
                        <Image src={require('./scrum-poker-demo.gif')} alt="Scrum Poker GIF"/>
                    </Box>

                    {/* <Box mt={10} display={{ base: "block", md: "none" }}>
                        <Text className='animate-pulse'>Sorry, the demo is not supported on mobile</Text>
                    </Box>

                    <Center>
                        <Link to='/projects/scrum-poker'>
                            <Button size='md' colorScheme='blue' mt={5} display={{ base: "none", md: "block" }}>
                                Link to Demo
                            </Button> 
                        </Link>

                    </Center> */}

                </Box>
            </Box>


        </Box>
    )

}

export default ScrumPoker