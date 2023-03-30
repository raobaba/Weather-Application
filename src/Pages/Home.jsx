import React from 'react'
import {Box,styled} from "@mui/material";
import SunSet from "../Assests/Images/bg.jpg";
const Component = styled(Box)({
    height:'100vh',
    display:'flex',
    alignItems:'center',
    margin:'0 auto',
    width:'65%'
})
const Image = styled(Box)({
    backgroundImage:`url(${SunSet})`,
    width:'27%',
    height:'80%',
    backgroundSize:'position',
    borderRadius:'20px 0 0 20px'
})
export default function Home() {
  return (
    <Component>
       <Image></Image>
       <Box></Box>
    </Component>
  )
}
