import {Box, useColorModeValue, Text, Spacer, Stack, Tooltip, Icon} from '@chakra-ui/react'
import {HiArrowCircleLeft, HiArrowCircleRight} from 'react-icons/hi'
import {useNavigate} from 'react-router-dom'

const Wwf = () => {
    const navigate = useNavigate();

    return(
        <Box py={4} borderWidth='2px' borderColor={useColorModeValue('black','white')}>
            <Box px={5} pt={2} pb={5}>
                <Stack direction='row'>
                    <Tooltip label='Previous Post'>
                        <Box className="hover:scale-110 cursor-pointer">
                            <Icon as={HiArrowCircleLeft} w={{base:'24px', md:'32px'}} h={{base:'24px', md:'32px'}}/>
                        </Box>
                    </Tooltip>
                    <Spacer/>
                    {/**Disabled (latest post) */}
                    {/* <Tooltip label='Next Post'>
                        <Box className="hover:scale-110">
                            <Icon as={HiArrowCircleRight} w={{base:'24px', md:'32px'}} h={{base:'24px', md:'32px'}}/>
                        </Box>
                    </Tooltip> */}
                        
                </Stack>
                <Box>
                    <Text fontSize={{base:'26px', md:'35px'}} fontWeight='md' fontFamily='mono'>
                        Wordle With Friends
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

export default Wwf