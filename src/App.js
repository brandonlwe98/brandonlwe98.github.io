import Navbar from './components/Navbar'
import Home from './pages/Home'
import Academic from './pages/Academic'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Portfolio from './pages/projects/Portfolio'
import Wwf from './pages/projects/Wwf'
import HowToPlay from './components/demo/wwf-demo/HowToPlay'
import Splask from './pages/projects/Splask'
import Inventory from './pages/projects/Inventory'
import Richwood from './pages/work/Richwood'
import Dbix from './pages/work/Dbix'

import React, { useEffect, useState } from 'react';
import {Box, Container} from '@chakra-ui/react'
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom'

import ReactGA from 'react-ga'; //Google Analytics Tracking
const TRACKING_ID = "UA-250902153-1";
ReactGA.initialize(TRACKING_ID);

function App() {
  
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <Box>
        <HashRouter>
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
                  <Route path='projects/wwf/howtoplay' element={<HowToPlay/>}/>
                  <Route path='projects/splask' element={<Splask/>}/>
                  <Route path='projects/inventory' element={<Inventory/>}/>
                  <Route path='projects/richwood' element={<Richwood/>}/>
                  <Route path='projects/dbix' element={<Dbix/>}/>
                </Routes>
            </Container>
        </HashRouter>
    </Box>
  );
}

export default App;
