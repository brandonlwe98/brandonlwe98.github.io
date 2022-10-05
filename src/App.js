import Navbar from './components/Navbar'
import Home from './pages/Home'
import Academic from './pages/Academic'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Portfolio from './pages/projects/Portfolio'
import Wwf from './pages/projects/Wwf'

import React, { useEffect, useState } from 'react';
import {Box, Container} from '@chakra-ui/react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {

  return (
    <Box>
        <BrowserRouter>
            <Navbar/>
            <Container mt="20" maxW='container.md'>
                <Routes>
                  <Route index element={<Home />} />
                  <Route path='home' element={<Home />} />
                  <Route path='academic' element={<Academic />} />
                  <Route path='projects' element={<Projects />} />
                  <Route path='contact' element={<Contact />} />
                  <Route path='projects/portfolio' element={<Portfolio/>}/>
                  <Route path='projects/wwf' element={<Wwf/>}/>
                </Routes>
            </Container>
        </BrowserRouter>
    </Box>
  );
}

export default App;
