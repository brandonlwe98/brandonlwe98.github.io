import React from 'react'
import { Box, Flex, Spacer, Text, Icon} from '@chakra-ui/react'
import { AiTwotoneStar } from 'react-icons/ai';

const PlayerCard = ({ id, name, input, scrumMaster, isCurrent, ready }) => {
    const playerId = id;
    return(
        <Box bg={scrumMaster ? 'tomato' : (ready ? 'green.500' :'blue.500')} p={4} color='white' mb={5}
        className="hover:scale-110 duration-200">
            <Flex>
                <Text>
                    {name}
                </Text>
                {
                    isCurrent ?
                        <Icon as={AiTwotoneStar} size='sm'/>
                        :
                        <></>
                }
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

    )
}

export default PlayerCard
