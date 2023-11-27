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
import useStore from '../../../../store/UseStore';


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
    setbc,
    setbd,
    setbe,
    setcd,
    setce,
    setde,
    setLinhas,popA,
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
    bc,
    bd,
    be,
    cd,
    ce,
    de,
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
    state.setbc,
    state.setbd,
    state.setbe,
    state.setcd,
    state.setce,
    state.setde,
    state.setLinhas,state.popA,
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
    state.bc,
    state.bd,
    state.be,
    state.cd,
    state.ce,
    state.de,
    state.linhas,
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


  return (
    <>
      <Button variant="contained" style={{width: 'fit-content'}} onClick={handleClickOpen}>
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
        <div className=' flex flex-col p-5 gap-4'>
          <FormInputLine label={'Bacteria A'} setPop={setPopA} setTaxa={setTaxaA} setK={setKa} pop={popA} taxa={taxaA} k={kA}/>
          <FormInputLine label={'Bacteria B'} setPop={setPopB} setTaxa={setTaxaB} setK={setKb} pop={popB} taxa={taxaB} k={kB}/>
          <FormInputLine label={'Bacteria C'} setPop={setPopC} setTaxa={setTaxaC} setK={setKc} pop={popC} taxa={taxaC} k={kC}/>
          <FormInputLine label={'Bacteria D'} setPop={setPopD} setTaxa={setTaxaD} setK={setKd} pop={popD} taxa={taxaD} k={kD}/>
          <FormInputLine label={'Bacteria E'} setPop={setPopE} setTaxa={setTaxaE} setK={setKe} pop={popE} taxa={taxaE} k={kE}/>
          <FormInputLineGeneral/>
        </div>
      </Dialog>
    </>
  );
}