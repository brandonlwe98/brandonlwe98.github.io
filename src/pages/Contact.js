import {Text, Center, Icon, IconButton, Box, VStack, Stack, Image, useColorModeValue, HStack} from '@chakra-ui/react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import {MdMail} from 'react-icons/md'

const Contact = () => {

    function Social({icon, link, linkName}){

        return(
            <Box w='100%' pb={{base:3, md:4}}>
                <HStack spacing={4}>
                    <Box p={5} w={{base:'25%', md:'30%'}} textAlign='right'>
                        <IconButton icon={icon}
                            colorScheme='teal'
                            className='hover:opacity-75 hover:scale-110'
                            onClick={
                                (e) =>{
                                    e.preventDefault();
                                    window.location.href=link
                                }}
                            />
                    </Box>
                    <Box p={5} w={{base:'75%', md:'70%'}} textAlign='left'>
                        <Text fontSize={{base:13, md:20}}>/{linkName}</Text>
                    </Box>
                </HStack>
            </Box>
        )
    }

    return(
        <Box pt={6}>
            <VStack w={{base:'100%',md:'70%'}} borderRadius='md' pt={5} borderWidth='2px' borderColor={useColorModeValue('black','gray.300')}
                alignItems='left'
                mx='auto'>
                <Social
                    icon={<Icon as={BsLinkedin} w={{base:'25px', md:'35px'}} h={{base:'25px', md:'35px'}}/>}
                    link='https://www.linkedin.com/in/brandon-lwe'
                    linkName='brandon-lwe'/>
                <Social
                    icon={<Icon as={BsGithub} w={{base:'25px', md:'35px'}} h={{base:'25px', md:'35px'}}/>}
                    link='https://github.com/brandonlwe98'
                    linkName='brandonlwe98'/>
                <Social
                    icon={<Icon as={MdMail} w={{base:'25px', md:'35px'}} h={{base:'25px', md:'35px'}}/>}
                    link='mailto:lwetheng@hotmail.com'
                    linkName='lwetheng@hotmail.com'/>
            </VStack>
        </Box>
    )
}

export default Contact