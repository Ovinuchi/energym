import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material'
import HeroBannerImage from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
      mt: { lg: '215px',sm: '190px', xs: '150px' },
      ml: { lg: '50px', xs: '20px' }
    }} position='relative' p='20px'>
      <Typography color="#FF2625" sx={{ fontSize: { lg: "30px", sm: '27px', xs: '25px' } }} fontWeight="600" >
        Energym
      </Typography>
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', sm: '40px', xs: '30px' } }} mb='23px' mt='30px' >
        Work, Sweat <br /> Achieve
      </Typography>
      <Typography fontSize="20px" lineHeight="35px" mb={4} fontFamily='inherit' sx={{ mr: { lg: '60%', sm: '60%' , xs: '0' }}}  >
        Check out the most effective exercises personalized for you.
      </Typography>
      <Button variant='contained' color='error' behaviour="smooth" href='#exercises' sx={{ backgroundColor: '#ff2526', padding: '14px' }}>Explore Exercises</Button>
      <Typography fontWeight={600} color='#ff2625' mt='40px' sx={{ opacity: 0.1, display: { lg: 'block', xs: 'none' } }} fontSize="200px" >
        Work-Out
      </Typography>
      <img src={HeroBannerImage} alt="hero pic" className='hero-banner-img' />
    </Box>
  )
}

export default HeroBanner
