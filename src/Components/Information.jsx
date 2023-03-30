import React from 'react'
import {Box,Typography} from "@mui/material";
export default function Information({result}) {
  return (
    result && Object.keys(result).length>0 ? 
    <Box>
        <Typography>{result.name}</Typography>
    </Box>
    :null
  )
}
