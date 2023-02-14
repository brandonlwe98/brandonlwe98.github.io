import {Text, Heading, Box, VStack, useDisclosure, Collapse, Button, useColorModeValue, Flex, IconButton, Spacer, Icon, Image,
        Tooltip,} from '@chakra-ui/react'
import {useState, React} from 'react'
import {MdArrowDropDown, MdArrowDropUp} from 'react-icons/md'

const Academic = () => {

    function AcademicCard({schoolName, course, gpa, startDate, endDate, cert}){
        const { isOpen, onToggle } = useDisclosure()
        const [isCert, toggleCert] = useState(false);

        const handleCert = () => toggleCert(!isCert);
        return(
            <Box w='100%' borderWidth='2px' borderColor={useColorModeValue('black','gray.300')} p={8} rounded='sm'>
                <Flex>
                    <Heading as='h1' fontFamily='mono'>
                        {schoolName}
                    </Heading>
                    <Spacer/>
                    <IconButton icon={<Icon as={!isOpen ? MdArrowDropUp : MdArrowDropDown} w={25} h={25} color='white' zIndex='1'/>} 
                        bgColor='teal.500'
                        _hover={{ bg: "gray.500" }}
                        size='md' onClick={onToggle}/>
                </Flex>

                <Collapse in={!isOpen} animateOpacity>
                    <Box>
                        <Text mt={5} fontFamily='mono' fontSize='lg' fontWeight='bold'>{course}</Text>
                        <Text mt={1} fontFamily='mono'>CGPA: {gpa} / 4.00</Text>
                        <Flex>
                            <Text mt={1} fontFamily='mono' fontStyle='italic'>{startDate} - {endDate}</Text>
                            <Spacer/>

                            {cert === undefined ?
                                (<Tooltip label="To Be Graduated">
                                    <Button size={{base: 'sm', md:'md'}} disabled>
                                        {isCert ? 'Hide Certificate' : 'Show Certificate'}
                                    </Button>
                                </Tooltip>)
                                :
                                (<Button size={{base: 'sm', md:'md'}} onClick={handleCert} borderWidth='2px'
                                borderColor={isCert ? 'teal.300' : 'grey.500'}
                                boxShadow={isCert ? 'base' : 'none'}>
                                    {isCert ? 'Hide Certificate' : 'Show Certificate'}
                                </Button>)

                        }


                        </Flex>
                    </Box>
                    <Collapse in={isCert} animateOpacity>
                        <Box mt={4}>
                            <Image src={cert} alt="University Certificate"></Image>
                        </Box>
                    </Collapse>

                </Collapse>
            </Box>
        )
    }

    return(
        <Box py={4}>
            <VStack alignItems='left'>
                <AcademicCard
                    schoolName = 'Iowa State University'
                    course = 'BSc Software Engineering'
                    gpa = '3.98'
                    startDate = '2021'
                    endDate = '2023'
                />

                <AcademicCard
                    schoolName = 'Sunway University'
                    course = 'American Degree Transfer Program'
                    gpa = '3.84'
                    startDate = '2019'
                    endDate = '2020'
                    cert = '/adtp-cert.jpg'
                />
                <AcademicCard
                    schoolName = 'Sunway University'
                    course = 'Diploma in Information Technology'
                    gpa = '3.90'
                    startDate = '2016'
                    endDate = '2018'
                    cert = '/dit-cert.jpg'
                />
            </VStack>

        </Box>
    )
}

export default Academic