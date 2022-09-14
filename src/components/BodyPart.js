import React from 'react'
import { Stack, Typography } from '@mui/material'

const BodyPart = ({ img, item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className='bodyPart-card'
      sx={{
        borderTop: bodyPart === item ? '4px solid #ff2625' : '',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px', 
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px'
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' })
      }}
    >
      <img 
        src={img} 
        width='90px'
        height='80px'
      />
      <Typography letterSpacing="2px" fontSize="25px" fontWeight='bold' color="#3A1212" textTransform="capitalize" fontFamily="'Josefin Sans', sans-serif" >{item}</Typography>
    </Stack>
  )
}

export default BodyPart


