import {Box, useColorModeValue, Text, Spacer, Stack, Tooltip, Icon, Link} from '@chakra-ui/react'
import {HiArrowCircleLeft, HiArrowCircleRight} from 'react-icons/hi'
import {useNavigate} from 'react-router-dom'
import {works as data_works} from '../../components/Data'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const Richwood = () => {
    const navigate = useNavigate();

    function navigatePost(link, event){
        event.preventDefault();
        navigate(link);
    }

    var workIndex = data_works.findIndex(work => work.page === 'richwood')
    var prevIndex = workIndex + 1
    var nextIndex = workIndex -1

    return(
        <Box py={4} borderWidth='2px' borderColor={useColorModeValue('black','white')}>
            <Box px={5} pt={2} pb={5}>
                <Stack direction='row'>
                {prevIndex < data_works.length ? 
                    (<Tooltip label='Previous Post'>
                        <Box>
                            <Icon as={HiArrowCircleLeft} w={{base:'24px', md:'32px'}} h={{base:'24px', md:'32px'}}
                                className='hover:opacity-75 hover:scale-110 cursor-pointer'
                                onClick={
                                    (e) => {
                                        navigatePost('/work/' + data_works[prevIndex].page, e)
                                    }
                                }/>
                        </Box>
                    </Tooltip>
                    )
                    :
                    <Box></Box>
                }
                    <Spacer/>
                    {nextIndex >= 0 ? 
                        (
                            <Tooltip label='Next Post'>
                                <Box>
                                    <Icon as={HiArrowCircleRight} w={{base:'24px', md:'32px'}} h={{base:'24px', md:'32px'}}
                                        className='hover:opacity-75 hover:scale-110 cursor-pointer'
                                        onClick={
                                            (e) => {
                                                navigatePost('/work/' + data_works[nextIndex].page, e)
                                            }
                                        }/>
                                </Box>
                            </Tooltip>
                        )
                        :
                        <Box></Box>
                    }

                        
                </Stack>
                <Box pt={4}>
                    <Text fontSize={{base:'26px', md:'35px'}} fontWeight='md' fontFamily='mono'>
                        Richwood Ventures
                    </Text>
                    <Text fontFamily='mono' textAlign='left'>Aug 2020 - Oct 2020</Text>
                </Box>

                <Box mt={6}>
                    <Text lineHeight={2}>
                        <Link href="https://richwoodvc.com/" isExternal>Richwood Ventures<ExternalLinkIcon mx='2px' w={{base:3, md:4}} h={{base:3, md:4}}/></Link> is a joint venture company involved in investment in 
                        various industries and companies. I was tasked to help develop and maintain their static web pages for multiple different websites. The websites were hosted on Cloudways,
                        developed using <b>PHP, Javascript and Bootstrap</b>. I helped to implement simple shopping carts and inventory management tools.
                    </Text>
                    {/* <Text mt={5}>
                        
                    </Text> */}
                </Box>
            </Box>


        </Box>
    )

}

export default Richwood