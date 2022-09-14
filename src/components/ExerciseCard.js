import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Stack, Typography } from '@mui/material'

const ExerciseCard = ({ exercise }) => {
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
      <Stack direction="row">
        <Button sx={{ ml: '21px', pt: '9px' ,color: '#fff', background: '#ffa9a9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalise', fontFamily: "'Josefin Sans', sans-serif" }}>
          {exercise.bodyPart}
        </Button>
        <Button sx={{ ml: '21px', pt: '9px' , color: '#fff', background: '#fcc757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalise', fontFamily: "'Josefin Sans', sans-serif" }}>
          {exercise.target}
        </Button>
      </Stack>
    <Typography ml="21px" color="black" fontWeight="bold" mt="11px" pb="10px" textTransform="capitalize" fontSize="22px"> 
      {exercise.name}
    </Typography>
    </Link>
  )
}

export default ExerciseCard
