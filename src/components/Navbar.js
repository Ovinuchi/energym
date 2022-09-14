import React from 'react'
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material'

import Logo from '../assets/images/logo.png'

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{
      gap: { lg: '100px', sm: '70px', xs: '40px' },
      mt: { lg: '25px', xs: '15px' },
      justifyContent: 'none',
      alignItems: 'center'
    }} px="20px" >
      <Link to='/'>
        <img src={Logo} alt='logo' style={{
          width: '80%', height: '80%', marginLeft: '20px', marginTop: '-5px',
        }} />
      </Link>
      <Stack direction="row" gap="40px" sx={{ fontSize: { lg: "24px", xs: '20px' }}}  alignItems="flex-end" >
        <Link to='/' style={{
          textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #FF2625'
        }}>Home</Link>
        <a href='#exercises' style={{
          textDecoration: 'none', color: '#3A1212'
        }} >Exercises</a>
      </Stack>
    </Stack>
  )
}

export default Navbar
