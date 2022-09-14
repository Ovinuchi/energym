import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Loader from './Loader'

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) {
    return <Loader />
  }

  return (
    <Box sx={{ marginTop: { lg: '100px', sm: '100', xs: '20px' } }} p="30px">
      <Typography variant='h4' sx={{ m: { lg: '0 0 30px 45px', sm: '0 0 30px 45px', xs: '0 0 30px 15px' } }} fontWeight='bold' >
        Watch <span style={{ color: '#ff2625', textTransform: 'capitalize' }} >{name}</span> exercise videos
      </Typography>
      <Stack justifyContent='center' flexWrap='wrap' alignItems='center'
        sx={{
          flexDirection: 'row',
          gap: { lg: '50px', xs: '10px' }
        }}
      >
        {exerciseVideos?.slice(0, 9).map((item, index) => (
          <a
            key={index}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img className='youtube-img' src={item.video.thumbnails[0].url} alt={item.video.title} />
            <Box>
              <Typography variant='h6' color='#000'>
                {item.video.title}
              </Typography>
              <Typography variant='p' mt="8px" color='#ff2625'>
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos
