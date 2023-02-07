import React from 'react';
import { Route,Routes } from 'react-router-dom';
import { Box } from '@mui/material'; // Box is just a div with color and shedding 

import './App.css'
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <Box width="400px">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/exercise/:id' element={<ExerciseDetail />}/>
      </Routes>
      <Footer/>
      </Box>
  )
}

export default App