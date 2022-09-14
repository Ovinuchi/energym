import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination'
import { Box, Stack, Typography } from '@mui/material'

import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'
import SearchExercises from './SearchExercises'

const Exercises = ({ exercises, setExercises, bodyPart, search }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 9;

  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;

  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

  const paginate = (e, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' })
  }

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',
          exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions);
      }

      setExercises(exercisesData)
    }

    fetchExercisesData();
  }, [bodyPart])

  if (exercises.length >= 1) {
    return (
      <Box id="exercises"
        sx={{ mt: { lg: '110px' } }}
        mt="50px"
        p="20px"
      >
        <Typography variant='h5' m="0px 0px 46px 40px" fontSize="30px" >
          Showing Results
        </Typography>
        
        <Stack direction="row" sx={{ gap: { lg: '35px', sm: '30px', xs: '25px' } }} flexWrap="wrap" justifyContent="space-around">
          {currentExercises.map((exercise, index) => (
            <ExerciseCard key={index} exercise={exercise} />
          ))}
        </Stack>
        <Stack mt="100px" alignItems="center" >
          {exercises.length > exercisesPerPage && (
            <Pagination
              color="standard"
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(exercises.length / exercisesPerPage)}
              page={currentPage}
              onChange={paginate}
              size="medium"
            />
          )}
        </Stack>
      </Box>
    )
  } else {
    return (
      <Typography variant='h5'
        color="gray"
        m="150px"
        fontSize="30px"
        textAlign='center'
        fontStyle='italic'
        fontFamily="inherit"
        fontWeight="500"
      >
        No exercise match your search
      </Typography>
    )
  }

}

export default Exercises
