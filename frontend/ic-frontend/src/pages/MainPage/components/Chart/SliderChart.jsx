import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { TextField } from '@mui/material';


export default function SliderChart(props) {

  function handleChange(value){
    props.setValue(value)
  }


  return (
    <Slider
      aria-label="Temperature"
      defaultValue={props.initialValue}
      getAriaValueText={handleChange}
      valueLabelDisplay="auto"
      step={50}
      marks
      min={0}
      max={props.maxValue}
      sx={{width: '10vw'}}
      disabled={!props.bool}
    />
  );
}