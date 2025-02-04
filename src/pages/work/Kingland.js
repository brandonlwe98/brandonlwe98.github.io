import {Box, useColorModeValue, Text, Spacer, Stack, Tooltip, Icon, Link, UnorderedList, ListItem} from '@chakra-ui/react'
import {HiArrowCircleLeft, HiArrowCircleRight} from 'react-icons/hi'
import {useNavigate, Link as ReactRouterLink} from 'react-router-dom'
import {works as data_works} from '../../components/Data'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Kingland = () => {
    const navigate = useNavigate();

    function navigatePost(link, event){
        event.preventDefault();
        navigate(link);
    }

    var workIndex = data_works.findIndex(work => work.page === 'kingland')
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
                                        navigatePost('/work/' + data_works[prevIndex].page, e)
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
                                                navigatePost('/work/' + data_works[nextIndex].page, e)
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
                        Kingland Systems
                    </Text>
                    <Text fontFamily='mono' textAlign='left'>March 2023 - Dec 2023</Text>
                </Box>

                <Box mt={6}>
                    <Text lineHeight={2}>
                        <Link color="blue.400" href="https://www.kingland.com/" isExternal>Kingland Systems<ExternalLinkIcon mx='2px' w={{base:3, md:4}} h={{base:3, md:4}}/></Link> is
                        a business technology company that develops data management software. They specialize in solutions for data management, risk management, independence,
                        regulatory compliance, enterprise workflow, and much more! I joined the internship program throughout the Summer 2023 semester (May 2023 - Aug 2023), 
                        and eventually extending my internship throughout the Fall 2023 semester (Aug 2023 - Dec 2023).
                    </Text>
                    <Text lineHeight={2} mt={5}>
                        I was put in the team in that was tasked to enhance a crucial part of their existing regulatory compliance and enterprise workflow engine. The first week consisted
                        of trainings and onboarding activities. Part of my training included an essential Amazon Web Service (AWS) training which was pretty interesting, although I 
                        did not get any opportunity to do hands on development on the company's AWS infrastructure. However, I learned a lot of other useful skills throughout my internship!
                    </Text>
                    <UnorderedList lineHeight={2} mt={5}>
                        <ListItem>
                            <span className='animate-pulse'>Docker</span> - Basic understanding of the tool and how to utilize it to spin up a temporary container to execute the program's workflow.
                        </ListItem>
                        <ListItem>
                            <span className='animate-pulse'>JUnit & Mockito</span> - Lots of testing were required, and JUnit was the goto for the Java heavy program. Mockito was a very useful tool as well
                            to help mock external dependencies such as API calls.
                        </ListItem>
                        <ListItem>
                            <span className='animate-pulse'>GitLab</span> - I was exposed to and fell in love with the usage of GitLab for code management and development. Their online IDE (GitPod)
                            was super intuitive and convenient to use. I performed many merge requests, code review, and pipeline management through this tool.
                        </ListItem>
                        <ListItem>
                            <span className='animate-pulse'>Vagrant & DBeaver</span> - I learned about vagrant boxes and utilized it to access database content through DBeaver on my office laptop. There wasn't much to it,
                            but these were interesting for me to learn.
                        </ListItem>
                        <ListItem>
                            <span className='animate-pulse'>Jira</span> - My development team utilized Jira heavily for story sizing, sprints, and retrospectives. Story cards played a major role in delegating tasks among
                            the team members. Additional utilization of Jira included timesheet management and documentation.
                        </ListItem>
                    </UnorderedList>
                    <Text lineHeight={2} mt={5}>
                        Besides the numerous tools and technologies that I was exposed to, I learned a lot of extra skills such as enterprise code development and management, 
                        teamwork (sounds cliche, but a lot of skills and communication is needed to develop code with  other people), and agile methodology (standups, sprints, etc.).
                        I also spent a weekend developing a {' '}
                        <Link as={ReactRouterLink} to='/projects/scrum-poker-demo' color='teal.500' isExternal>
                            Scrum Poker <ExternalLinkIcon mx='2px' />
                        </Link>
                        {' '}
                        management tool for the team to utilize during sprint meetings where the team and project manager has to size
                        tasks (user stories). It was a fun mini-project and my team enjoyed using the tool.
                    </Text>
                    <Text lineHeight={2} mt={5}>
                        Kingland is such a fun and welcoming workplace that I recommend working for. Outsides of work, they have a lot of non-work related activities such as the 
                        Des Moines Corporate Games, Golf outings, Lunch N Learns, and many more. They strive for work life balance and have strong principles and practices.
                        The internship opportunity was a blast and I was fortunate to extend this into a full-time opportunity starting March 2024.
                    </Text>
                </Box>
            </Box>


        </Box>
    )

}

export default Kingland