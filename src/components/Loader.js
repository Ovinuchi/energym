import React from 'react'
import { Stack } from '@mui/material'
import { TailSpin } from 'react-loader-spinner'

const Loader = () => {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" width="100%" >
      <TailSpin color="#ff2625" />
    </Stack>
  )
}

export default Loader
