import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'


const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0'}}}>
      <Typography variant='h4' m="40px" mb='33px' fontWeight='bold' >
        Similar <span style={{ color: '#ff2625' }} >target muscle</span> exercises
      </Typography>
      <Stack direction="row" sx={{ p:'2px', position: 'relative'}} >
        {targetMuscleExercises.length ? <HorizontalScrollbar data={targetMuscleExercises}/> : <Loader/> }
      </Stack>
      <Typography variant='h4' m="40px" mb="33px" fontWeight='bold' >
        Similar <span style={{ color: '#ff2625' }} >equipment</span> exercises
      </Typography>
      <Stack direction="row" sx={{ p:'2px', position: 'relative'}} >
        {equipmentExercises.length ? <HorizontalScrollbar data={equipmentExercises}/> : <Loader/> }
      </Stack>
    </Box>
  )
}

export default SimilarExercises
