import React,{ useEffect,useState} from 'react';
import {Box,Button,Stack,TextField,Typography} from '@mui/material'
import { exerciseOptions,fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

<<<<<<< HEAD
const SearchExercises = () => {
  const [search, setSearch] = useState('')
  const [exercises, setExercises] = useState([]);
  const [muscle, setMuscle] = useState([])

  useEffect(()=>{
    const fetchExerciseData = async () => {
      const muscle = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setMuscle(['all',...muscle]);
=======
const SearchExercises = ({ setExercises,bodyPart,setBodyPart }) => {
  const [search, setSearch] = useState('')
  // const [exercises, setExercises] = useState([]);
  const [bodyparts, setBodyParts] = useState([])

  useEffect(()=>{
    const fetchExerciseData = async () => {
      const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setBodyParts(['all',...bodyPartData]);
>>>>>>> 77dfb2e (BodyPart component added with basic style)
    }
    fetchExerciseData();
  },[])


  const handleSearch = async()=>{
    if(search){
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
      console.log(exercisesData);

      const searchExercises = exercisesData.filter(
<<<<<<< HEAD
        (exercise) => exercise.name.toLowerCase().includes(search)
        || exercise.type.toLowerCase().includes(search)
        || exercise.equipment.toLowerCase().includes(search)
        || exercise.muscle.toLowerCase().includes(search)
=======
        (item) => item.name.toLowerCase().includes(search)
        || item.target.toLowerCase().includes(search)
        || item.equipment.toLowerCase().includes(search)
        || item.bodypart.toLowerCase().includes(search)
>>>>>>> 77dfb2e (BodyPart component added with basic style)
      );

      setSearch('');
      setExercises(searchExercises);
    }
  }
  return (
    <Stack alignItems="center" mt="37px"
    justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{
        fontSize: {lg:'44px', xs:'30px'}
      }} mb="50px" textAlign="center">
        Awesome Exercises You <br/>
        Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
        sx={{
          input: { 
            fontWeight:'700',
            border:'none',
            borderRadius:'4px'
          },
          width:{ lg:'800px',xs:'350px'},
          backgroundColor:"#fff",
          borderRadius:'40px'
        }}
        height="76px"
        value={search}
        onChange={(e)=>{ setSearch(e.target.value.toLowerCase())}} 
        placeholder="Search Exercises"
        type="text"/>
        <Button className='search-btn'
        sx={{
          bgcolor: '#FF2625',
          color:"#fff",
          textTransform:'none',
          width: { lg:'175px', xs:'100px'},
          fontSize : { lg:'20px', xs:'14px'},
          height: '56px',
          position:"absolute",
          right:"0"
        }}
        onClick={handleSearch}>
          Search
        </Button>

      </Box>
      <Box
      sx={{position:'relative', width:'100%',p:'20px'}}>
<<<<<<< HEAD
        <HorizontalScrollbar data={muscle}/>
=======
        <HorizontalScrollbar data={bodyparts} bodypart={bodyPart} setBodyPart={setBodyPart}/>
>>>>>>> 77dfb2e (BodyPart component added with basic style)
      </Box>
    </Stack>
  )
}

export default SearchExercises