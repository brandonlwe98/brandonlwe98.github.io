import { Progress, propNames, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import {Box, Heading, Center, Select, Button, FormControl,FormLabel,FormErrorMessage,FormHelperText, Input} from '@chakra-ui/react'

function App() {

  const [progress, setProgress] = useState(0);
  const [formData, setFormData] = useState({});

  const validEmail = new RegExp(
    '^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$'
 );

  function handleSubmit(event){
    event.preventDefault();
    console.log(formData);
    alert("SUBMITTED");
  }

  const handleChange = (event) => {
    console.log(event.target.name);
    setFormData(values => ({...values, [event.target.name]: event.target.value}));
  }

  var submitBtn = document.getElementById('formSubmit');

  useEffect(() => { //callback for formData set state
    var updateProgress = 0;
    if(formData.name && formData.name != "")
      updateProgress += 25;
    if(formData.email && formData.email != "" && validEmail.test(formData.email)){
      updateProgress += 25;
    }
    if(formData.gender && formData.gender != "")
      updateProgress += 25;
    if(formData.fruit && formData.fruit != "")
      updateProgress += 25;

    setProgress(updateProgress);
    if(updateProgress == 100)
      submitBtn.disabled = false;
    else
      submitBtn.disabled = true;
      
  }, [formData]);

  return (
    <Box mx='auto' w='40%'>

      <Progress value={progress} height='32px' my='10'/>

      <Center>
        <Heading mx='auto' mb='5' as='h1'>Random Form</Heading>
      </Center>

      <VStack>
        <Center w='75%'>
          <FormControl isRequired>
            <FormLabel fontSize='20px' fontWeight='bold'>Name:</FormLabel>
            <Input name="name" id="name" type='text' mb='5' placeholder='Your Name' onChange={handleChange}/>

            <FormLabel fontSize='20px' fontWeight='bold'>Email:</FormLabel>
            <Input name='email' id='email' type='email' mb='5' placeholder='Your Email' onChange={handleChange}/>

            <FormLabel fontSize='20px' fontWeight='bold'>Gender:</FormLabel>
            <Select name='gender' id='gender' mb='5' onChange={handleChange}>
              <option></option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </Select>

            <FormLabel fontSize='20px' fontWeight='bold'>Favourite Fruit:</FormLabel>
            <Select name='fruit' id='fruit' mb='5' onChange={handleChange}>
              <option></option>
              <option>Apple</option>
              <option>Orange</option>
              <option>Banana</option>
            </Select>

            <Button colorScheme='blue' type='button' name='formSubmit' id='formSubmit' onClick={handleSubmit} disabled='false'>Submit</Button>
          </FormControl>
        </Center>
      </VStack>
    </Box>

  );
}

export default App;
