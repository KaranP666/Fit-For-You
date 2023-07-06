import React,{ useEffect,useState} from 'react';
import {Box,Button,Stack,TextField,Typography} from '@mui/material'
import { exerciseOptions,fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises,bodyPart,setBodyPart }) => {
  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])

  useEffect(()=>{
    const fetchExerciseData = async () => {
      const bodyPartData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setBodyParts(['all',...bodyPartData]);
    }
    fetchExerciseData();
  },[])


  const handleSearch = async()=>{
    if(search){
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
      console.log(exercisesData);

      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      setExercises(searchedExercises);
    }
  }
  return (
    <Stack alignItems="center" mt="37px"
    justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{
        fontSize: {lg:'44px', xs:'30px'}
      }} mb="49px" textAlign="center">
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
          right:"0px"
        }}
        onClick={handleSearch}>
          Search
        </Button>

      </Box>
      <Box
      sx={{position:'relative', width:'100%',p:'20px'}}>
        {/* <HorizontalScrollbar data={bodyParts} bodypart={bodyPart} setBodyPart={setBodyPart}/> */}
         <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </Stack>
  )
}

export default SearchExercises