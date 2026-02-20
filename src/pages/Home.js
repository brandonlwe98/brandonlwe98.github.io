import {Text, Heading, Box, VStack, Image, Icon, 
    useColorModeValue, Tooltip, Collapse, useDisclosure, Spacer, Flex, IconButton, Link, Wrap, WrapItem
} from '@chakra-ui/react'
import { MdArrowDropUp, MdArrowDropDown } from 'react-icons/md'
import { languageList, toolsCategories } from '../components/Data'
import { Document, Page, pdfjs } from 'react-pdf'
import { useState } from 'react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Home = () => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setPageNumber(1);
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

    function SkillBox(){
        const { isOpen, onToggle } = useDisclosure()

        return(
            <Box mt={8}>
                <Flex>
                    <Heading as="h1">
                        Languages
                    </Heading>
                    <Spacer/>
                    <IconButton icon={<Icon as={!isOpen ? MdArrowDropUp : MdArrowDropDown} w={25} h={25} color='white'/>} 
                        bgColor='teal.500'
                        _hover={{ bg: "gray.500" }}
                        zIndex='0'
                        size='md' onClick={onToggle}/>
                </Flex>

                <Box borderWidth='2px' p={5} mt='5%' borderColor={useColorModeValue('black','gray.300')} overflowX='hidden'>
                    <Collapse in={!isOpen} animateOpacity>
                        <Wrap w='100%' spacing={{base: 4, md: 6}} justify="center">
                            {languageList.map((language, index) => {
                                return(
                                    <WrapItem key={index}>
                                        <IconRow
                                            item={language}
                                        />
                                    </WrapItem>
                                )
                            })}
                        </Wrap>
                    </Collapse>
                </Box>
            </Box>
        )
    }

    function ToolsBox(){
        const { isOpen, onToggle } = useDisclosure()

        return(
            <Box mt={8}>
                <Flex>
                    <Heading as="h1">
                        Tools
                    </Heading>
                    <Spacer/>
                    <IconButton icon={<Icon as={!isOpen ? MdArrowDropUp : MdArrowDropDown} w={25} h={25} color='white'/>} 
                        bgColor='teal.500'
                        _hover={{ bg: "gray.500" }}
                        zIndex='0'
                        size='md' onClick={onToggle}/>
                </Flex>

                <Box borderWidth='2px' p={5} mt='5%' borderColor={useColorModeValue('black','gray.300')} overflowX='hidden'>
                    <Collapse in={!isOpen} animateOpacity>
                        <VStack spacing={6} alignItems='stretch'>
                            {toolsCategories.map((category, catIndex) => {
                                return(
                                    <Box key={catIndex}>
                                        <Heading as="h3" size="md" mb={3}>
                                            {category.category}
                                        </Heading>
                                        <Wrap spacing={{base: 4, md: 6}} justify="center">
                                            {category.items.map((tool, toolIndex) => {
                                                return(
                                                    <WrapItem key={toolIndex}>
                                                        <IconRow
                                                            item={tool}
                                                        />
                                                    </WrapItem>
                                                )
                                            })}
                                        </Wrap>
                                    </Box>
                                )
                            })}
                        </VStack>
                    </Collapse>
                </Box>
            </Box>
        )
    }

    function ResumeCard(){
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
                            My name is Brandon and I'm a <b>Software Engineer</b> who's passionate for programming. I enjoy full-stack web development as well as general programming.
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
                    <ToolsBox/>
                </Box>
            </VStack>
        </Box>
    )
}

export default Home