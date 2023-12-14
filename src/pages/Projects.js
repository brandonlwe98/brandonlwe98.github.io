import {Grid, Button, Box, VStack, Text, Stack, Link, StackDivider, useColorModeValue} from '@chakra-ui/react'
import {Link as Navigate, useNavigate } from 'react-router-dom'
import {projects as data_projects, works as data_works} from '../components/Data'
import {BiLinkExternal} from 'react-icons/bi'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Projects = () => {
    const navigate = useNavigate()

    return(
        <Box py={4}>
            <Box>
                <VStack spacing={5}>
                    <Box my={5}>
                        <Text fontFamily='mono' fontSize={{base: '30px', md:'40px'}}>Projects</Text>
                    </Box>


                    <Stack direction='row' w={{base:'100%', md:'50%'}} px={5}>
                        <Box w='30%'>
                            <Text fontFamily='mono' fontWeight='bold' mb={4}>Date</Text>
                            {data_projects.map((project, index) => {
                                return(
                                    <Box mb={4} key={index}>
                                        <Text fontFamily='mono' fontStyle='italic'>{project.date}</Text>
                                    </Box>
                                )
                            })}
                        </Box>


                        <Box w='70%' alignItems='left' mx='auto'>
                            <Text fontFamily='mono' fontWeight='bold' mb={4}>Title</Text>
                            {data_projects.map((project, index) => {
                                return(
                                    <Box mb={4} key={index}>
                                        <Link onClick={(e) => {
                                            e.preventDefault();
                                            navigate('/projects/' + project.page, {projectIndex: index})}
                                        }>{project.name} <ExternalLinkIcon mx='2px' w={{base:3, md:4}} h={{base:3, md:4}}/></Link>
                                    </Box>
                                )
                            })}
                        </Box>
                    </Stack>
                    
                    <Box>
                        <Text fontFamily='mono' fontSize={{base: '30px', md:'40px'}} my={4}>Work Experience</Text>
                    </Box>


                    <Stack direction='row' w={{base:'100%', md:'50%'}} px={5}>
                        <Box w='30%'>
                            <Text mb={4} fontFamily='mono' fontWeight='bold'>Date</Text>
                            {data_works.map((work, index) => {
                                return(
                                    <Text key={index} fontStyle='italic' mb={4}>{work.date}</Text>
                                )
                            })}
                        </Box>


                        <Box w='70%' alignItems='left' mx='auto'>
                            <Text fontFamily='mono' fontWeight='bold' mb={4}>Title</Text>
                            {data_works.map((work, index)=> {
                                return(
                                    <Box mb={4} key={index}>
                                        <Link as={Navigate} to={"/work/"+work.page}>{work.name} 
                                            <ExternalLinkIcon mx={2} w={{base:3, md:4}} h={{base:3, md:4}}/>
                                        </Link>    
                                    </Box>
                                )
                            })}
                        </Box>
                    </Stack>
                </VStack>
            </Box>
            
        </Box>
    )
}

export default Projects