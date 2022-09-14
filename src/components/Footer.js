import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import Logo from '../assets/images/logo.png'


const Footer = () => {
  return (
    <Box mt="80px" backgroundColor='#FFCADA' >
      <Stack gap="10px" alignItems="center" px="20px" pt="20px">
        <img src={Logo} alt="logo" width="200px" height="40px" />
        <Typography variant="h6" pb="20px" fontFamily="'Josefin Sans', sans-serif">
          Made with ❤️ by Ovinuchi David
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer
