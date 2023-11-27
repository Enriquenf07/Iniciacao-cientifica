import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { TextField } from '@mui/material';


export default function SliderChart(props) {
  return (
    <div className=' flex justify-between w-screen items-start'>
      <h1 className='text-2xl'>População</h1>
      <div className='flex gap-3 pb-5'>
        <TextField id="outlined-basic" label="Dominio inicial" variant="outlined" onChange={(e) => props.setDi(Number(e.target.value))}/>
        <TextField id="outlined-basic" label="Dominio final" variant="outlined" onChange={(e) => props.setDf(Number(e.target.value))}/>
        <TextField id="outlined-basic" label="Imagem inicial" variant="outlined" onChange={(e) => props.setIi(e.target.value)}/>
        <TextField id="outlined-basic" label="Imagem final" variant="outlined" onChange={(e) => props.setIf(e.target.value)}/>
      </div>
      
    </div>
  );
}