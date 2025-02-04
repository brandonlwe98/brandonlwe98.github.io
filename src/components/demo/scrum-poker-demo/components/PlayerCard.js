import React from 'react'
import { Box, Flex, Spacer, Text, useColorModeValue, HStack} from '@chakra-ui/react'
import Anime from 'react-animejs-wrapper'

const PlayerCard = ({ id, name, input, scrumMaster, isCurrent, ready, animateCard, scrumMasterView }) => {
    return(
        <HStack alignItems='left' verticalAlign="baseline">
            <Box w="100%">
                {/* <Anime config={{}}> */}
                <Anime className="hover:scale-110 duration-200" config={ animateCard && (animateCard === name) ? {scale: [{value: 1}, {value: 1.2}, {value: 1, delay: 500}], rotateY: {value: '+=360', delay: 350}, duration: 400 } : {}}>
                    <Box bg={scrumMaster ? 'tomato' : (ready ? 'green.500' :'blue.500')} p={4} color='white' mb={5}
                    border={useColorModeValue( isCurrent ? "2px solid black" : "none", isCurrent ? "2px solid yellow" : "none")}>
                        <Flex>
                            <Text>
                                {name}
                            </Text>
                            <Spacer/>
                            {scrumMaster ? 
                                <Text fontWeight='bold'>
                                    [Scrum Master]
                                </Text>
                                :
                                <Text fontWeight='bold'>
                                    {input}    
                                </Text>
                            }
                        </Flex>
                    </Box>
                </Anime>
            </Box>
        </HStack>
    )
}

export default PlayerCard
