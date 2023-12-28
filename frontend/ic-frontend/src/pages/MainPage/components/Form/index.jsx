import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import FormInputLine from './FormInputLine';
import FormInputLineGeneral from './FormInputLineGeneral';
import { Select } from '@mui/material';
import {MenuItem, FormHelperText, InputLabel, Box} from '@mui/material';
import useStore from '../../../../store/UseStore';
import { useState } from 'react';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Form(props) {
  const [open, setOpen] = React.useState(false);
  const [
    setPopA,
    setPopB,
    setPopC,
    setPopD,
    setPopE,
    setTaxaA,
    setTaxaB,
    setTaxaC,
    setTaxaD,
    setTaxaE,
    setKa,
    setKb,
    setKc,
    setKd,
    setKe,
    setab,
    setac,
    setad,
    setae,
    setba,
    setbc,
    setbd,
    setbe,
    setca,
    setcb,
    setcd,
    setce,
    setda,
    setdb,
    setdc,
    setde,
    setea,
    seteb,
    setec,
    seted,
    setLinhas, popA,
    taxaA,
    kA,
    popB,
    taxaB,
    kB,
    popC,
    taxaC,
    kC,
    popD,
    taxaD,
    kD,
    popE,
    taxaE,
    kE,
    ab,
    ac,
    ad,
    ae,
    ba,
    bc,
    bd,
    be,
    ca,
    cb,
    cd,
    ce,
    da,
    db,
    dc,
    de,
    ea,
    eb,
    ec,
    ed,
    linhas,
  ] = useStore(state => [
    state.setPopA,
    state.setPopB,
    state.setPopC,
    state.setPopD,
    state.setPopE,
    state.setTaxaA,
    state.setTaxaB,
    state.setTaxaC,
    state.setTaxaD,
    state.setTaxaE,
    state.setKa,
    state.setKb,
    state.setKc,
    state.setKd,
    state.setKe,
    state.setab,
    state.setac,
    state.setad,
    state.setae,
    state.setba,
    state.setbc,
    state.setbd,
    state.setbe,
    state.setca,
    state.setcb,
    state.setcd,
    state.setce,
    state.setda,
    state.setdb,
    state.setdc,
    state.setde,
    state.setea,
    state.seteb,
    state.setec,
    state.seted,
    state.setLinhas, state.popA,
    state.taxaA,
    state.kA,
    state.popB,
    state.taxaB,
    state.kB,
    state.popC,
    state.taxaC,
    state.kC,
    state.popD,
    state.taxaD,
    state.kD,
    state.popE,
    state.taxaE,
    state.kE,
    state.ab,
    state.ac,
    state.ad,
    state.ae,
    state.ba,
    state.bc,
    state.bd,
    state.be,
    state.ca,
    state.cb,
    state.cd,
    state.ce,
    state.da,
    state.db,
    state.dc,
    state.de,
    state.ea,
    state.eb,
    state.ec,
    state.ed,
  ])


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const start = () => {
    setOpen(false)
    props.handleStart()
  }

  

  const handleChange = (event) => {
    setLinhas(event.target.value);
    console.log(event.target.value)
  };


  return (
    <>
      <Button variant="contained" style={{ width: 'fit-content' }} onClick={handleClickOpen}>
        Iniciar simulação
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <Button
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <p>X</p>
            </Button>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">

            </Typography>
            <Button autoFocus color="inherit" onClick={start}>
              Iniciar
            </Button>
          </Toolbar>
        </AppBar>
        <div className=' flex flex-col p-5 gap-4 min-h-screen'>
          <FormInputLine label={'Bacteria A'} setPop={setPopA} setTaxa={setTaxaA} setK={setKa} setAlfa={setab} setBeta={setac} setGama={setad} setDelta={setae}
            pop={popA} taxa={taxaA} k={kA} alfa={ab} beta={ac} gama={ad} delta={ae} />
          <FormInputLine label={'Bacteria B'} setPop={setPopB} setTaxa={setTaxaB} setK={setKb} setAlfa={setba} setBeta={setbc} setGama={setbd} setDelta={setbe}
            pop={popB} taxa={taxaB} k={kB} alfa={ba} beta={bc} gama={bd} delta={be} />
          <FormInputLine label={'Bacteria C'} setPop={setPopC} setTaxa={setTaxaC} setK={setKc} setAlfa={setca} setBeta={setcb} setGama={setcd} setDelta={setce}
            pop={popC} taxa={taxaC} k={kC} alfa={ca} beta={cb} gama={cd} delta={ce} />
          <FormInputLine label={'Bacteria D'} setPop={setPopD} setTaxa={setTaxaD} setK={setKd} setAlfa={setda} setBeta={setdb} setGama={setdc} setDelta={setde}
            pop={popD} taxa={taxaD} k={kD} alfa={da} beta={db} gama={dc} delta={de} />
          <FormInputLine label={'Bacteria E'} setPop={setPopE} setTaxa={setTaxaE} setK={setKe} setAlfa={setea} setBeta={seteb} setGama={setec} setDelta={seted}
            pop={popE} taxa={taxaE} k={kE} alfa={ea} beta={eb} gama={ec} delta={ed} />
          <Typography>Tempo</Typography>
          <Box style={{width: '10rem'}}>
            <Select
            id="tempo"
            value={linhas}
            onChange={handleChange}
            autoWidth
            defaultValue={70}
          >
            <MenuItem value={10}>Muito curto</MenuItem>
            <MenuItem value={30}>Curto</MenuItem>
            <MenuItem value={70}>Médio</MenuItem>
            <MenuItem value={110}>Longo</MenuItem>
            <MenuItem value={200}>Muito longo</MenuItem>
          </Select>
          </Box>
        </div>
      </Dialog>
    </>
  );
}