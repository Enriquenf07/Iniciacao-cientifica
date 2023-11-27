import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import useStore from '../../../../store/UseStore';

export default function FormInputLineGeneral() {
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
    setLinhas,
    popA,
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
    state.setLinhas,
    state.popA,
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
  return (
    <>
    <h1>Coeficiente de interação</h1>
    <div className='flex gap-4 flex-wrap'>
      <TextField
          id="outlined"
          label="ab"
          onChange={e => setab(e.target.value)}
          defaultValue={ab}
        />
        <TextField
          id="outlined"
          label="ac"
          onChange={e => setac(e.target.value)}
          defaultValue={ac}
        />
        <TextField
          id="outlined"
          label="ad"
          onChange={e => setad(e.target.value)}
          defaultValue={ad}
        />
        <TextField
          id="outlined"
          label="ae"
          onChange={e => setae(e.target.value)}
          defaultValue={ae}
        />
        <TextField
          id="outlined"
          label="bc"
          onChange={e => setbc(e.target.value)}
          defaultValue={bc}
        />
        <TextField
          id="outlined"
          label="bd"
          onChange={e => setbd(e.target.value)}
          defaultValue={bd}
        />
        <TextField
          id="outlined"
          label="be"
          onChange={e => setbe(e.target.value)}
          defaultValue={be}
        />
        <TextField
          id="outlined"
          label="cd"
          onChange={e => setcd(e.target.value)}
          defaultValue={cd}
        />
        <TextField
          id="outlined"
          label="ce"
          onChange={e => setce(e.target.value)}
          defaultValue={ce}
        />
        <TextField
          id="outlined"
          label="de"
          onChange={e => setde(e.target.value)}
          defaultValue={de}
        />
    </div>
    <h1>Instante final</h1>
    <div className='flex gap-4 flex-wrap'>
    <TextField
          id="outlined"
          label="Instante Final"
          onChange={e => setLinhas(e.target.value)}
          defaultValue={linhas}
        />
    </div>
    </>
  );
}
