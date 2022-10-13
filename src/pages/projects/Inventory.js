import {Box, useColorModeValue, Text, Spacer, Stack, Tooltip, Icon, Image} from '@chakra-ui/react'
import {HiArrowCircleLeft, HiArrowCircleRight} from 'react-icons/hi'
import {useNavigate} from 'react-router-dom'
import {projects as data_projects} from '../../components/Data'

const Inventory = () => {
    const navigate = useNavigate();

    function navigatePost(link, event){
        event.preventDefault();
        navigate(link);
    }

    var projectIndex = data_projects.findIndex(project => project.page === 'inventory')
    var prevIndex = projectIndex + 1
    var nextIndex = projectIndex -1

    return(
        <Box py={4} borderWidth='2px' borderColor={useColorModeValue('black','white')}>
            <Box px={5} pt={2} pb={5}>
                <Stack direction='row'>
                {prevIndex < data_projects.length ? 
                    (<Tooltip label='Previous Post'>
                        <Box>
                            <Icon as={HiArrowCircleLeft} w={{base:'24px', md:'32px'}} h={{base:'24px', md:'32px'}}
                                className='hover:opacity-75 hover:scale-110 cursor-pointer'
                                onClick={
                                    (e) => {
                                        navigatePost('/projects/' + data_projects[prevIndex].page, e)
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
                                                navigatePost('/projects/' + data_projects[nextIndex].page, e)
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
                        Inventory Management
                    </Text>
                    <Text fontFamily='mono' textAlign='left'>2020</Text>
                </Box>

                <Box mt={6}>
                    <Text lineHeight={2}>
                        During the Covid-19 pandemic, a friend of mine started an online business. His business process consisted of buying meat products,
                        processing and packaging the meat, and delivering it to customers at our local area. His business soon grew larger, and so
                        did his inventory tracking issues.
                    </Text>
                    <Text lineHeight={2} mt={5}>
                        I proposed to help him out by creating a small inventory management application to help keep track of his stock. The project grew larger as requirements
                        started increasing. The inventory management functioned to display overall sales, customer, stock, and delivery information. It's a web application powered
                        using <b>PHP</b>, <b>JavaScript</b>, and <b>Bootstrap</b> . Data was stored and managed using a local MySQL database (<b>PHPMyAdmin, xampp</b>).
                    </Text>
                    <Box className='flex justify-center' mt={10}>
                        <Image src={require('./inventory-gif.gif')} alt="Inventory GIF"/>
                    </Box>
                    {/* <Text mt={5}>
                        
                    </Text> */}
                </Box>
            </Box>


        </Box>
    )

}

export default Inventory