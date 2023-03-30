import React,{useState} from 'react'
import {Box,InputBase,Button,styled} from "@mui/material";
import { getWeather } from './../Services/api';
const Container = styled(Box)({
   background: 'purple',
   padding: 10,
})
const Input = styled(InputBase)({
    color:'#fff',
    marginRight:20,
    fontSize:18
})
const GetButton = styled(Button)({
    background:'#e67e22'
})
export default function Form() {
    const [data,setData] = useState({city:'',country:''})
    const handleChange = (e)=>{
        setData({...data,[e.target.name]:e.target.value});
        console.log(data)
    }
    const getWeatherInfo =async ({setResult})=>{
       let response = await getWeather(data.city,data.country);
       setResult(response)
    }
  return (
    <Container>
       <Input
       placeholder='City'
       onChange={(e)=>handleChange(e)}
       name="city"
       />
       <Input
       placeholder='Country'
       onChange={(e)=>handleChange(e)}
       name="country"
       />
       <GetButton
       onClick={()=>getWeatherInfo()}
       variant='contained'
       >Get Weather</GetButton>
    </Container>
  )
}
