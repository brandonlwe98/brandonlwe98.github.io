import {Text, Heading, Box, VStack, Stack, Image, Icon, Progress, HStack, StackDivider, 
    Center, useColorModeValue, Tooltip, Collapse, useDisclosure, Spacer, Flex, IconButton, Link
} from '@chakra-ui/react'
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md'
import { skillList, environmentList, frameworkList } from '../components/Data'
import { Document, Page, pdfjs } from 'react-pdf'
import { useState } from 'react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Home = () => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function SkillCard({name, icon}){
        return(
            <Box w='100%'>
                <HStack spacing={4}>
                    <Tooltip label={name}>
                        <Box p={5} flexShrink={0} w="10%" alignItems='center'>
                            {icon}
                        </Box>
                    </Tooltip>
                </HStack>
            </Box>
        )
    }

    function SkillBox({}){
        const { isOpen, onToggle } = useDisclosure()

        return(
            <Box mt={8}>
                <Flex>
                    <Heading as="h1">
                        Skills
                    </Heading>
                    <Spacer/>
                    <IconButton icon={<Icon as={!isOpen ? MdArrowDropUp : MdArrowDropDown} w={25} h={25} color='white'/>} 
                        bgColor='teal.500'
                        _hover={{ bg: "gray.500" }}
                        zIndex='0'
                        size='md' onClick={onToggle}/>
                </Flex>

                <Box borderWidth='2px' p={5} mt='5%' borderColor={useColorModeValue('black','gray.300')}>
                    <Collapse in={!isOpen} animateOpacity>
                        <VStack w='100%' divider={<StackDivider borderColor={useColorModeValue('black','gray.300')}/>} alignItems="center">
                            {skillList.map((row, index) => {
                                return(
                                    <SkillRow 
                                        row={row}
                                        key={index}
                                    />
                                )
                            })}
                        </VStack>
                    </Collapse>
                </Box>
            </Box>
        )
    }

    function SkillRow({row}) {
        return(
            <HStack>
                {row.map((skill, index) => {
                    return(
                    <SkillCard
                        name={skill.name}
                        icon={skill.icon}
                        key={index}
                    />)
                })}
            </HStack>
        )
    }

    function IconRow({item}) {
        return(
            <Tooltip label={item.name}>
            <Box className="hover:scale-110 hover:rotate-45 duration-200">
                {item.icon}
            </Box>
        </Tooltip>
        )
    }

    function ResumeCard({}){
        const { isOpen, onToggle } = useDisclosure()
        return(
            <Box>
                <Flex>
                    <Heading as="h1">
                        Resume
                    </Heading>
                    <Spacer/>
                    <IconButton icon={<Icon as={isOpen ? MdArrowDropUp : MdArrowDropDown} w={25} h={25} color='white'/>} 
                        bgColor='teal.500'
                        _hover={{ bg: "gray.500" }}
                        zIndex='0'
                        size='md' 
                        onClick={onToggle}
                        display={{base:'none', lg:'block'}}
                        />
                </Flex>

                <Box borderWidth='2px' p={5} mt='5%' borderColor={useColorModeValue('black','gray.300')} className='flex justify-center'>
                    <VStack>
                        <Text w='100%' className='flex justify-center'>
                            <Link as='a' href='/resume.pdf' download mb={2}>Download my resume here <ExternalLinkIcon mx='2px' w={{base:3, md:4}} h={{base:3, md:4}}/></Link>
                        </Text>

                        <Collapse in={isOpen} animateOpacity>
                            <Box display={{base:'none', md:'none', lg:'block'}}>
                                <Document file="/resume.pdf" onLoadSuccess={onDocumentLoadSuccess} onLoadError={console.error}>
                                    <Page size='object-fit' pageNumber={pageNumber}/>
                                </Document>
                            </Box>
                        </Collapse>
                    </VStack>
                </Box>
            </Box>
        )
    }


    return(
        <Box py={4}>
            <VStack alignItems="left">
                <Box display={{md:'flex'}}>
                    <Box 
                    flexShrink={0}>
                        <Image src='/profile-pic.jpg' width={{md:40}} borderRadius="full" alt="Brandon Lwe" borderStyle="solid" borderWidth='2px' borderColor="black"/>
                    </Box>
                    <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                        <Heading as="h1">
                            About Me
                        </Heading>
                        <Text fontSize='lg' mt={4}>
                            My name is Brandon and I'm a <b>Software Engineer</b> who's passionate for programming. I enjoy web development as well as general programming.
                        </Text>
                    </Box>
                </Box>
                
                <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }} pt='5%'>
                    <Heading as="h1">
                        Background
                    </Heading>
                    <Text mt={4}>
                        I'm from Malaysia, a multicultural country with lots of great food and rich history. I made my first website in high school using plain HTML and CSS. 
                        Ever since then, I was always intrigued and interested in coding and software development
                    </Text>
                </Box>

                <Box mt={{base:4, md:0}} pt={5}>
                    <ResumeCard/>
                    <SkillBox/>
                </Box>

                <Box mt={{base:4, md:0}} ml={{md:6}} pt='5%'>
                    <Heading as="h1">
                        Frameworks
                    </Heading>
                    <Box borderWidth='2px' p={5} mt='5%' borderColor={useColorModeValue('black','gray.300')}>
                        <Center>
                            <Stack direction='row' spacing={{base:1, md:5}}>
                                {frameworkList.map((environment, index) => {
                                    return(
                                        <IconRow
                                            item={environment}
                                            key={index}
                                        />
                                    )
                                })}
                            </Stack>

                        </Center>
                    </Box>
                </Box>

                <Box mt={{base:4, md:0}} ml={{md:6}} pt='5%'>
                    <Heading as="h1">
                        Environments
                    </Heading>
                    <Box borderWidth='2px' p={5} mt='5%' borderColor={useColorModeValue('black','gray.300')}>
                        <Center>
                            <Stack direction='row' spacing={{base:1, md:5}}>
                                {environmentList.map((environment, index) => {
                                    return(
                                        <IconRow
                                            item={environment}
                                            key={index}
                                        />
                                    )
                                })}
                            </Stack>
                        </Center>
                    </Box>
                </Box>
            </VStack>
        </Box>
    )
}

export default Home