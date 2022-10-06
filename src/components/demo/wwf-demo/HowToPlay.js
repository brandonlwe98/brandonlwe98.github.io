import { Box, Divider, Heading, Text, Button, Flex, Spacer, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import MiniTile from './components/MiniTile'
import { Link, useNavigate } from 'react-router-dom'

const HowToPlay = () => {
    
	const navigate = useNavigate()

    const back = () => {
        navigate(-1);
    }
	return (
		<Box className='flex flex-col justify-center mx-auto border-1 p-5'>
            <Flex>
                <Spacer />
                <Heading as='h1' className='flex justify-center mb-5'>
                How To Play
                </Heading>
                <Spacer />
                {/* <Button className='float-right my-auto' w='55px' size='md' onClick={back}>
                Back
                </Button> */}
            </Flex>
			<Divider className='mb-10' borderColor={useColorModeValue('black','white')}/>
            <Text fontSize='lg'>
                Guess the WORDLE in six tries.
            </Text>
            <Text fontSize='lg' mt={5}>
                Each guess must be a valid five-letter word. Hit the enter button to submit.
            </Text>
            <Text fontSize='lg' mt={5}>
                After each guess, the color of the tiles will change to show how close your guess was to the word.
            </Text>
            <Divider className='my-10' borderColor={useColorModeValue('black','white')}/>
            <Text as='b' fontSize='xl' className='mb-5'>Example</Text>
            <Box className='flex gap-1'>
                <Box>
                    <MiniTile letter='T' color='green' />
                </Box>
                <Box>
                    <MiniTile letter='H' color='lightgray' />
                </Box>
                <Box>
                    <MiniTile letter='E' color='lightgray' />
                </Box>
                <Box>
                    <MiniTile letter='N' color='lightgray' />
                </Box>
                <Box>
                    <MiniTile letter='G' color='yellow' />
                </Box>
            </Box>
            <Text my='5'>
                The character <b className='text-green-600'>T</b> is in the word and in the correct spot.
                <br></br>
                The character <b className='text-yellow-400'>G</b> is in the word but in the wrong spot.
                <br></br>
                The other characters <b className='text-gray-400'>(H, E, N)</b> are not in the word in any spot.
            </Text>

		</Box>
	)
}

export default HowToPlay