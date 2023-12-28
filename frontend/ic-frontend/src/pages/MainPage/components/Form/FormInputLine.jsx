import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

export default function FormInputLine(props) {
  return (
    <>
    <Typography>{props.label}</Typography>
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
        <TextField
          id="outlined"
          label="Alfa"
          onChange={e => props.setAlfa(e.target.value)}
          defaultValue={props.alfa}
        />
        <TextField
          id="outlined"
          label="Beta"
          onChange={e => props.setBeta(e.target.value)}
          defaultValue={props.beta}
        />
        <TextField
          id="outlined"
          label="Gama"
          onChange={e => props.setGama(e.target.value)}
          defaultValue={props.gama}
        />
        <TextField
          id="outlined"
          label="Delta"
          onChange={e => props.setDelta(e.target.value)}
          defaultValue={props.delta}
        />
    </div>
    </>
  );
}
