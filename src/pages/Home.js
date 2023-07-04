import React,{useState} from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';

const Home = () => {
<<<<<<< HEAD
  return (
    <Box>
      <HeroBanner/>
      <SearchExercises />
      <Exercises/>
=======
  const [bodyPart,setBodyPart] = useState('all');
  const [exercises,setExercises] = useState([]);


  return (
    <Box>
      <HeroBanner/>
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
      <Exercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
>>>>>>> 77dfb2e (BodyPart component added with basic style)
    </Box>
  )
}

export default Home