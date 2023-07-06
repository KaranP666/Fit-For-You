import React from 'react'
import { Link } from 'react-router-dom';
import { Button,Stack,Typography } from '@mui/material';

const ExcerciseCard = ({exercise}) => {
  return (
    <Link className='exercise-card' to={`/excercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading='lazy'/>
    </Link>
  )
}

export default ExcerciseCard