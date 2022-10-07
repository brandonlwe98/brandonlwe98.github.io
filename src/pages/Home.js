import {Text, Heading, Box, VStack, Stack, Image, Icon, Progress, HStack, StackDivider, 
    Center, useColorModeValue, Tooltip, Collapse, useDisclosure, Spacer, Flex, IconButton, Link
} from '@chakra-ui/react'
import { FaAngular, FaNodeJs } from 'react-icons/fa'
import { SiChakraui, SiSpringboot} from 'react-icons/si'
import {MdArrowDropUp, MdArrowDropDown} from 'react-icons/md'
import {GrReactjs} from 'react-icons/gr'
import {skillList as data_skilList} from '../components/Data'
import { Document, Page, pdfjs } from 'react-pdf'
import { useState } from 'react'

const Home = () => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    const iconSize={base: 45, md:75}

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setPageNumber(1);
    }

    function SkillCard({name, icon, percentage}){
        return(
            <Box w='100%'>
                <Text w='100%' fontSize='lg'>{name}</Text>
                <HStack spacing={4}>
                    <Box p={5} flexShrink={0} w="10%" alignItems='center'>
                        {icon}
                    </Box>
                    <Box p={5} w="90%">
                        <Progress hasStripe value={percentage} colorScheme='green' size='md' isAnimated zIndex='0'/>
                    </Box>
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
                            {data_skilList.map((skill, index) => {
                                return(
                                    <SkillCard
                                        key={index}
                                        name={skill.name}
                                        icon={skill.icon}
                                        percentage={skill.percentage}
                                    />
                                )
                            })}
                        </VStack>
                    </Collapse>
                </Box>
            </Box>
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
                            <Link as='a' href='/resume.pdf' download mb={2}>Download my resume here</Link>
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
                                <Tooltip label='AngularJS / Angular6'>
                                    <Box className="hover:scale-110 hover:rotate-45 duration-200">
                                        <Icon as={FaAngular} w={iconSize} h={iconSize}/>
                                    </Box>
                                </Tooltip>
                                <Tooltip label='NodeJS / SailsJS'>
                                    <Box className="hover:scale-110 hover:-rotate-45 duration-200">
                                        <Icon as={FaNodeJs} w={iconSize} h={iconSize}/>
                                    </Box>
                                </Tooltip>
                                <Tooltip label='Springboot'>
                                    <Box className="hover:scale-110 hover:rotate-180 duration-200">
                                        <Icon as={SiSpringboot} w={iconSize} h={iconSize}/>
                                    </Box>
                                </Tooltip>
                                <Tooltip label='ReactJS'>
                                    <Box className="hover:scale-110 hover:-rotate-90 duration-200">
                                        <Icon as={GrReactjs} w={iconSize} h={iconSize}/>
                                    </Box>
                                </Tooltip>
                                <Tooltip label='ChakraUI'>
                                    <Box className="hover:scale-110 hover:rotate-90 duration-200">
                                        <Icon as={SiChakraui} w={iconSize} h={iconSize}/>
                                    </Box>  
                                </Tooltip>

                            </Stack>

                        </Center>
                    </Box>
                </Box>

            </VStack>


        </Box>
    )
}

export default Home