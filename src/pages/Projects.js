import {Grid, Heading, Box, VStack, Text, Stack, Link, StackDivider, useColorModeValue} from '@chakra-ui/react'
import {Link as Navigate } from 'react-router-dom'

const Projects = () => {
    const projects = [{date:'2022', name:'Self Portfolio', page:'portfolio'},
                      {date:'2022', name:'Wordle With Friends', page:'wwf'},
                      {date:'2022', name:'Splask', page:'splask'},
                      {date:'2020', name:'Inventory Management', page:'inventory'},]
    
    const works = [{date:'2020', name:'Richwood Ventures', page:'richwood'},
                   {date:'2018-2019', name:'Dbix Systems', page:'dbix'},]


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
                            {projects.map((project, index) => {
                                return(
                                    <Box mb={4} key={index}>
                                        <Text fontFamily='mono' fontStyle='italic'>{project.date}</Text>
                                    </Box>
                                )
                            })}
                        </Box>


                        <Box w='70%' alignItems='left' mx='auto'>
                            <Text fontFamily='mono' fontWeight='bold' mb={4}>Title</Text>
                            {projects.map((project, index) => {
                                return(
                                    <Box mb={4} key={index}>
                                        <Link as={Navigate} to={'/projects/' + project.page}>{project.name}</Link>
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
                            {works.map((work, index) => {
                                return(
                                    <Text key={index} fontStyle='italic' mb={4}>{work.date}</Text>
                                )
                            })}
                        </Box>


                        <Box w='70%' alignItems='left' mx='auto'>
                            <Text fontFamily='mono' fontWeight='bold' mb={4}>Title</Text>
                            {works.map((work, index)=> {
                                return(
                                    <Box mb={4} key={index}>
                                        <Link as={Navigate} to={"/projects/"+work.page}>{work.name}</Link>    
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