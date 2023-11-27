import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormInputLine(props) {
  return (
    <>
    <h1>{props.label}</h1>
    <div className='flex gap-4'>
      <TextField
          id="outlined"
          label="População inicial"
          onChange={e => props.setPop(e.target.value)}
          defaultValue={props.pop}
        />
        <TextField
          id="outlined"
          label="Taxa de crescimento"
          onChange={e => props.setTaxa(e.target.value)}
          defaultValue={props.taxa}
        />
        <TextField
          id="outlined"
          label="Capacidade de suporte"
          onChange={e => props.setK(e.target.value)}
          defaultValue={props.k}
        />
    </div>
    </>
  );
}
